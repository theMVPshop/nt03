// express imports
const express = require('express');
const router = express.Router();

// Controllers imports
const jobs = require('../Controllers/jobs');

// All jobs
router.get('/jobs', jobs.allJobs);

// Specific job by user
router.get('/jobs/:id', jobs.jobByID);

// Save new job to user
router.post('/jobs', jobs.saveJob);

// Update job
router.put('/jobs', jobs.updateJob);

module.exports = router;
