// express imports
const express = require('express');
const { checkJwt } = require('../Middleware/auth');
const router = express.Router();

// Controllers imports
const users = require('../Controllers/users');

// All users
router.get('/users', users.allUsers);

// Specific User
router.get('/users/:username', users.userByUsername);

// Specific User list of saved clinics
router.get('/users/:userID/clinics', users.getUserSavedClinics);

// Created new user
//validating data with express-validator
router.post('/users', users.createUser);

// Save a new clinic to a user
router.post('/users/:userID/clinics', users.saveClinic);

// Update user
router.put('/users/:username', checkJwt, users.updateUser);

// Mark clinic as contacted
router.put('/users/:clinicID/contacted', users.clinicContacted);

// Unsave a clinic
router.delete('/users/:clinicID/clinics', checkJwt, users.unsaveClinic);

module.exports = router;
