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
  let userID = req.params.userID;

  sql = 'SELECT * FROM saved_jobs WHERE user_id = ?';

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
  let newJob = req.body.job;
  console.log(req.body);
  let userID = req.body.user_id;

  let sql = 'INSERT INTO saved_jobs (company, position, location, url, contacted, user_id) values (?, ?, ?, ?, ?, ?)';

  sql = mysql.format(sql, [...Object.values(newJob), false, userID]);

  db.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      return res.sendStatus(500);
    }

    console.log(result);
    res.json({
      msg: `Job ${newJob.position} at ${newJob.company} was succesfully saved!`,
      jobID: result.insertId
    });
  });
};

// @DELETE
// Delete a saved job
const deleteJob = (req, res) => {
  let jobID = req.params.jobID;

  let sql = 'DELETE FROM saved_jobs where job_id = ?';

  sql = mysql.format(sql, [jobID]);

  db.query(sql, (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json('There was an error deleting the record from the database....');
    }

    res.sendStatus(200);
  })
}

//@PUT
// Mark a saved clinic as contacted
const jobContacted = (req, res) => {
  let jobID = req.params.jobID;

  let sql = `
    UPDATE saved_jobs
    SET contacted = true
    WHERE job_id = ?`;

  sql = mysql.format(sql, [jobID]);

  db.query(sql, (error, results) => {
    if (error) return handleSQLError(res, error);

    res.sendStatus(200);
  });
};

module.exports = { allJobs, saveJob, jobByID, updateJob, deleteJob, jobContacted };
