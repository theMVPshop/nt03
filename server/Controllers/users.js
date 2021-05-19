// DB Connection code
const db = require('../database/dbConnection');
const { handleSQLError } = require('../database/error');
const mysql = require(`mysql`);

//@GET
// All users
const allUsers = (req, res) => {
  let sql = "SELECT * FROM users"

  db.query(sql, (error, result) => {
    if (error) return handleSQLError(res, error);

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
    if (error) return handleSQLError(res, error);

    res.json(result);
  });
};

//@GET
// Get a list of the current users saved clinics
const getUserSavedClinics = (req, res) => {
  let userID = req.params.userID

  sql = "SELECT * FFROM user_saved_clinics WHERE user_id = ?";

  sql = mysql.format(sql, [userID]);

  db.query(sql, (error, results) => {
    if (error) return handleSQLError(res, error);

    res.json(rows);
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
const createUser = (req, res) => {
  let newUsername = req.body.username;
  let newUserFirstName = req.body.first_name;
  let newUserLastName = req.body.last_name;

  let sql = 'INSERT INTO users (username, first_name, last_name) values (?, ?, ?)';

  sql = mysql.format(sql, [newUsername, newUserFirstName, newUserLastName]);

  db.query(sql, (error, result) => {
    if (error) return handleSQLError(res, error);

    console.log(result);
    res.json(`User ${req.body.username} was succesfully created!`);
  });
};

//@POST
// Save a new clinic for a user
const saveClinic = (req, res) => {
  let userID = req.params.userID;

  const newClinic = req.body.clinic;

  let sql = 'INSERT INTO user_saved_clinics (clinic_name, clinic_address, clinic_phone, contacted, user_id) VALUES (?, ?, ?, ?, ?)';

  sql = mysql.format(sql, [...Object.values(newClinic), userID]);

  db.query(sql, (error, result) => {
    if (error) return handleSQLError(res, error);

    console.log(result);
    res.sendStatus(200);
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
                    clinicContacted
                  };
