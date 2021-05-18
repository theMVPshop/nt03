require('dotenv').config();

const axios = require('axios');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');

// for bcrypt
const saltRounds = 10;

const signup = (req, res) => {
  const { username, password } = req.body;
  let sql = 'INSERT INTO usersCredentials (username, password) VALUES (?, ?)';

  bcrypt.hash(password, saltRounds, function (err, hash) {
    sql = mysql.format(sql, [username, hash]);

    pool.query(sql, (err, result) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY')
          return res.status(409).send('Username is taken');
        return handleSQLError(res, err);
      }
      return res.send('Sign-up successful');
    });
  });
};

const login = (req, res) => {
  const { username, password } = req.body;

  axios(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    data: {
      grant_type: 'password',
      username: username,
      password: password,
      audience: process.env.AUTH0_IDENTITY,
      connection: 'Username-Password-Authentication',
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
    },
  })
    .then((response) => {
      const { access_token } = response.data;
      res.json({
        access_token,
      });
    })
    .catch((e) => {
      res.send(e);
    });

  let sql = 'SELECT * FROM usersCredentials WHERE username = ?';
  sql = mysql.format(sql, [username]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    if (!rows.length) return res.status(404).send('No matching users');

    const hash = rows[0].password;
    bcrypt.compare(password, hash).then((result) => {
      if (!result) return res.status(400).send('Invalid password');

      const data = { ...rows[0] };
      data.password = 'REDACTED';

      const token = jwt.sign(data, 'secret');
      res.json({
        msg: 'Login successful',
        token,
      });
    });
  });
};

module.exports = {
  signup,
  login,
};
