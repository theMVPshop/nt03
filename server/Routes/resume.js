// express imports
const express = require('express');
const router = express.Router();

// controllers imports
const resume = require('../Controllers/resume');

// Save a resume
router.post('/:userID', resume.saveResume);

// get resume
router.get('/:userID', resume.getResume);

module.exports = router;