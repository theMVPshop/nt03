require('dotenv').config();

const axios = require('axios');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../database/dbConnection');
const { handleSQLError } = require('../database/error');

const login = (req, res) => {
  const { username, password } = req.body;

  //requesting access token
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

  let sql = 'SELECT * FROM users WHERE username = ?';
  sql = mysql.format(sql, [username]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    if (!rows.length) return res.status(404).send('No matching users');

    const hash = rows[0].password;
    bcrypt.compare(password, hash).then((result) => {
      if (!result) return res.status(400).send('Invalid password');

      const data = { ...rows[0] };
      data.password = 'REDACTED';

      const { id, username } = data;
      const userProfile = { userId: id, username: username };
      const token = jwt.sign(data, 'secret');
      res.json({
        msg: 'Login successful',
        token,
        userProfile,
      });
    });
  });
};

const logOut = (req, res) => {
  token = '';
  res.json({
    msg: 'Logged Out',
    token,
  });
};

module.exports = {
  login,
  logOut,
};

// GET https://dev-k7rou30o.us.auth0.com/v2/logout?
//   client_id=DTVZutsnMuYy1zPj0Ybs8Aj8RFAQulvf&
//   returnTo=LOGOUT_URL
