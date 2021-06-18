/**
 * Router file for the saved resume data endpoints
 */

// express imports
const express = require('express');
const router = express.Router();

// controllers imports
const resume = require('../Controllers/resume');

// Save a resume
router.post('/:userID', resume.saveResume);

module.exports = router;