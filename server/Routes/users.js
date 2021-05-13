// express imports
const express = require('express');
const router = express.Router();

// Controllers imports
const users = require('../Controllers/users');

// All users
router.get('/users', users.allUsers);

// Specific User
router.get('/users/:username', users.userByUsername);

// Created new user
router.post('/users', users.createUser);

// Update user
router.put('/users/:username', users.updateUser);

module.exports = router;
