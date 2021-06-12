// express imports
const express = require('express');
const router = express.Router();

// Controllers imports
const jobs = require('../Controllers/jobs');

// All jobs
router.get('/jobs', jobs.allJobs);

// List of saved jobs by user
router.get('/jobs/:userID', jobs.jobByID);

// Save new job to user
router.post('/jobs', jobs.saveJob);

// Update job
router.put('/jobs', jobs.updateJob);

// delete job
router.delete('/jobs/:jobID', jobs.deleteJob);

module.exports = router;
