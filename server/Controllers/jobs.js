// DB Connection code
const db = require('../database/dbConnection');
const { checkJwt } = require('../Middleware/auth');
const mysql = require(`mysql`);

//@GET
// All jobs
const allJobs = (req, res) => {
  let sql = 'SELECT job_url FROM saved_jobs';

  db.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }

    res.json(result);
  });
};

//@GET
// get a saved job list by user ID
const jobByID = (req, res) => {
  let userID = req.params.id;

  sql = 'SELECT job_url FROM saved_jobs WHERE user_id = ?';

  sql = mysql.format(sql, [userID]);

  db.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }

    res.json(result);
  });
};

//@PUT
// Update a specific job
const updateJob = (req, res) => {
  let jobID = req.body.id;
  let newURL = req.body.url;

  let sql = 'UPDATE saved_jobs SET job_url = ? WHERE savedjob_id = ?';

  sql = mysql.format(sql, [newURL, jobID]);

  db.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }
    res.json(`Job ${jobID} was updated with new URL`);
  });
};

//@POST
// Save a new job to user
const saveJob = (req, res) => {
  let newJobUrl = req.body.url;
  let userID = req.body.user_id;

  let sql = 'INSERT INTO saved_jobs (job_url, user_id) values (?, ?)';

  sql = mysql.format(sql, [newJobUrl, userID]);

  db.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }

    console.log(result);
    res.json({
      msg: `Job ${req.body.url} was succesfully saved!`,
      jobID: result.insertId
    });
  });
};

module.exports = { allJobs, saveJob, jobByID, updateJob };
