// express imports
const express = require('express');
const { checkJwt } = require('../Middleware/auth');
const router = express.Router();

// Controllers imports
const users = require('../Controllers/users');

// All users
router.get('/', users.allUsers);

// Specific User
router.get('/:username', users.userByUsername);

// Specific User list of saved clinics
router.get('/:userID/clinics', users.getUserSavedClinics);

// Created new user
//validating data with express-validator
router.post('/', users.createUser);

// Save a new clinic to a user
router.post('/:userID/clinics', users.saveClinic);

// Update user
router.put('/:username', checkJwt, users.updateUser);

// Mark clinic as contacted
router.put('/:clinicID/contacted', users.clinicContacted);

// Unsave a clinic
router.delete('/:clinicID/clinics', checkJwt, users.unsaveClinic);

module.exports = router;
