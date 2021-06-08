// DB Connection code
const db = require('../database/dbConnection');
const { handleSQLError } = require('../database/error');
const mysql = require(`mysql`);

//const resume = require('./usersTest/resumeDATA');

// POST
// Save resume info to DB
const saveResume = (req, res) => {

    // get the user ID from the url and the resume object from request body
    const userID = req.params.userID;
    const resume = req.body.resume;

    // parse out the various areas of the resume by DB tables
    const resume_head = { ...resume.resume_head };
    const resume_work = [ ...resume.experience ];
    const resume_education = [ ...resume.education ];
    const resume_skills = [ ...resume.skills ];

    console.log(userID);
    console.log(resume);
    // console.log('****************************');
    // console.log(resume_head);
    // console.log(resume_work);
    // console.log(resume_education);
    // console.log(resume_skills);

    // create sql statement to save the resume header info
    let sqlResumeHead = 'INSERT INTO resume_head (name, address, city, state, zip, phone, email, summary, user_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    sqlResumeHead = mysql.format(sqlResumeHead, [...Object.values(resume_head), userID]);

    // create sql statement to save the array of work experience
    let sqlResumeWork = 'INSERT INTO resume_work (company, location, position, start, end, description1, description2, description3, user_id) VALUES ?';
    let sqlResumeWorkValues = resume_work.map( work => [...Object.values(work), userID]);
    sqlResumeWork = mysql.format(sqlResumeWork, [sqlResumeWorkValues]);

    // create sql statement to save the array of education
    let sqlResumeEducation = 'INSERT INTO resume_education (school, location, major, graduation, info, user_id) VALUES ?';
    let sqlResumeEducationValues = resume_education.map( edu => [...Object.values(edu), userID]);
    sqlResumeEducation = mysql.format(sqlResumeEducation, [sqlResumeEducationValues]);

    // create sql statement to save the array of skills
    let sqlResumeSkills = 'INSERT INTO resume_skills (skill, user_id) VALUES ?';
    let sqlResumeSkillsValues = resume_skills.map( skill => [skill, userID]);
    sqlResumeSkills = mysql.format(sqlResumeSkills, [sqlResumeSkillsValues]);

    console.log(sqlResumeHead+"\n");
    console.log(sqlResumeWork+"\n");
    console.log(sqlResumeEducation+"\n");
    console.log(sqlResumeSkills);

    // start a MySQL transaction
    // series of sql statements, if one fails no partial data will be saved to the DB
    // db.beginTransaction( err => {
    //     if (err) return handleSQLError(res, err);

    //     // save resume header info
    //     db.query(sqlResumeHead, (error, results) => {
    //         if (error) return db.rollback((error) => handleSQLError(res, error));
    //         console.log(results);
    //     })

    //     // save resume work info
    //     db.query(sqlResumeWork, (error, results) => {
    //         if (error) return db.rollback((error) => handleSQLError(res, error));
    //         console.log(results);
    //     })

    //     // save resume education info
    //     db.query(sqlResumeEducation, (error, results) => {
    //         if (error) return db.rollback((error) => handleSQLError(res, error));
    //         console.log(results);
    //     })

    //     // save resume skills
    //     db.query(sqlResumeSkills, (error, results) => {
    //         if (error) return db.rollback((error) => handleSQLError(res, error));
    //         console.log(results);
    //     })

    //     // if no errors so far commit the statements and changes to the DB
    //     db.commit( error => {
    //         if (error) return db.rollback((error) => handleSQLError(res, error));
    //     })

        // succesful call to DB, return response OK
    //     console.log("MySQL Transaction Succesful!!");
    //     res.sendStatus(200);
    // });
};

module.exports = { saveResume }

// const buildResumeObject = () => {
//     let resume = {
//           "resume_head": {
//               "name": name,
//               "address": address,
//               "city": city,
//               "state": state,
//               "zip": zip,
//               "phone": phone,
//               "email": email,
//               "summary": summary
//           },
//           "experience": [ ...proData ],
//           "education": [ ...eduData ],
//           "skills": addSkillsData.map( skill => Object.values(skill)).flat(2)
//       };

//       console.log(resume);

//       fetch('/resume/1', {
//         'method': 'POST',
//         'headers' : {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ resume })
//       })
//   };