// DB Connection code
const db = require('../database/dbConnection');
const { handleSQLError } = require('../database/error');
const mysql = require(`mysql`);
const bcrypt = require('bcrypt');

const saltRounds = 10;

//@GET
// All users
const allUsers = (req, res) => {
  let sql = 'SELECT * FROM users';

  db.query(sql, (error, result) => {
    if (error) return handleSQLError(res, error);

    res.json(result);
  });
};

//@GET
// get a specific user by ID
const userByUsername = (req, res) => {
  let username = req.params.username;

  sql = 'SELECT * FROM users WHERE username = ?';

  sql = mysql.format(sql, [username]);

  db.query(sql, (error, result) => {
    if (error) return handleSQLError(res, error);

    res.json(result);
  });
};

//@GET
// Get a list of the current users saved clinics
const getUserSavedClinics = (req, res) => {
  let userID = req.params.userID;

  sql = 'SELECT * FROM user_saved_clinics WHERE user_id = ?';

  sql = mysql.format(sql, [userID]);

  db.query(sql, (error, results) => {
    if (error) return handleSQLError(res, error);

    res.json(results);
  });
};

//@PUT
// Update a specific user
const updateUser = (req, res) => {
  let username = req.params.username;

  res.json({ action: `User ${username} was updated` });
};

//@PUT
// Mark a saved clinic as contacted
const clinicContacted = (req, res) => {
  let clinicID = req.params.clinicID;

  let sql = `
    UPDATE user_saved_clinics
    SET contacted = true
    WHERE id = ?`;

  sql = mysql.format(sql, [clinicID]);

  db.query(sql, (error, results) => {
    if (error) return handleSQLError(res, error);

    res.sendStatus(200);
  });
};

//@POST
// Create a new user
//{TODO JEFF FIX ERROR HANDLING}
const createUser = (req, res, err) => {
  const { username, password } = req.body;

  let sql = 'INSERT INTO users (username, password) values (?, ?)';
  bcrypt.hash(password, saltRounds, (err, hash) => {
    try {
      sql = mysql.format(sql, [username, hash]);

      db.query(sql, (err, res) => {
        res.send(res);
      });
    } catch (err) {
      return handleSQLError(err, res);
    }
  });
};

//@POST
// Save a new clinic for a user
const saveClinic = (req, res) => {
  let userID = req.params.userID;

  const newClinic = req.body;

  let sql =
    'INSERT INTO user_saved_clinics (clinic_name, clinic_address, clinic_phone, contacted, user_id) VALUES (?, ?, ?, ?, ?)';

  sql = mysql.format(sql, [...Object.values(newClinic), userID]);

  db.query(sql, (error, result) => {
    if (error) return handleSQLError(res, error);

    console.log(result);
    res.json({
      msg: 'clinic saved',
      clinicID: result.insertId
    });
  });
};

//@DELETE
// Unsave a clinic
const unsaveClinic = (req, res) => {
  let clinicID = req.params.clinicID;

  let sql = 'DELETE * FROM user_saved_clinics WHERE id = ?';

  sql = mysql.format(sql, [clinicID]);

  db.query(sql, (error, result) => {
    if (error) return handleSQLError(res, error);

    console.log(result);
    res.sendStatus(200);
  });
};

module.exports = {
  allUsers,
  userByUsername,
  updateUser,
  createUser,
  getUserSavedClinics,
  saveClinic,
  unsaveClinic,
  clinicContacted,
};
