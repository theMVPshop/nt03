// DB Connection code
const db = require('../database/dbConnection');
const mysql = require(`mysql`);

//@GET
// All users
const allUsers = (req, res) => {
  let sql = "SELECT * FROM users"

  db.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500)
    }

    res.json(result);
  })
};

//@GET
// get a specific user by ID
const userByUsername = (req, res) => {
  let username = req.params.username;

  sql = 'SELECT * FROM users WHERE username = ?';

  sql = mysql.format(sql, [username]);

  db.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }

    res.json(result);
  });
};

//@PUT
// Update a specific user
const updateUser = (req, res) => {
  let username = req.params.username;

  res.json({ action: `User ${username} was updated` });
};

//@POST
// Create a new user
const createUser = (req, res) => {
  let newUsername = req.body.username;
  let newUserFirstName = req.body.first_name;
  let newUserLastName = req.body.last_name;

  let sql = 'INSERT INTO users (username, first_name, last_name) values (?, ?, ?)';

  sql = mysql.format(sql, [newUsername, newUserFirstName, newUserLastName]);

  db.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }

    console.log(result);
    res.json(`User ${req.body.username} was succesfully created!`);
  });
};

module.exports = { allUsers, userByUsername, updateUser, createUser };
