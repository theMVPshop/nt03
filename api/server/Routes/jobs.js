/**
 * Router file for the saved job data endpoints
 */

// express imports
const express = require('express');
const router = express.Router();

// Controllers imports
const jobs = require('../Controllers/jobs');

// All jobs
router.get('/', jobs.allJobs);

// List of saved jobs by user
router.get('/:userID', jobs.jobByID);

// Save new job to user
router.post('/', jobs.saveJob);

// Update job
router.put('/', jobs.updateJob);

// delete job
router.delete('/:jobID', jobs.deleteJob);

// Update job to contacted
router.put('/:jobID', jobs.jobContacted);

module.exports = router;
