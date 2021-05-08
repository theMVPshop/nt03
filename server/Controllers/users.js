// DB Connection code
const db = require('../database/dbConnection');
const mysql = require(`mysql`);

//@GET
// All users
const allUsers = (req, res) => {
  res.json({ action: 'Get all Users' });
};

//@GET
// get a specific user by ID
const userByID = (req, res) => {
  let userID = req.params.id;

  sql = 'SELECT * FROM users WHERE id = ?';

  sql = mysql.format(sql, [userID]);

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
  let userID = req.params.id;

  res.json({ action: `User ID ${userID} was updated` });
};

//@POST
// Create a new user
const createUser = (req, res) => {
  let newUser = Object.values(req.body);

  let sql = 'INSERT INTO users (username, first_name, last_name) values (?)';

  sql = mysql.format(sql, [newUser]);

  db.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }

    console.log(result);
    res.json(`User ${req.body.username} was succesfully created!`);
  });
};

module.exports = { allUsers, userByID, updateUser, createUser };
