import React, { useState, useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Table } from 'react-bootstrap';

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {
    fetch(`/jobs/jobs/1`)
      .then(response => response.json())
      .then(data => {
        setSavedJobs(data);
        console.log(data);
      })
  }, [])
  
  return (
    <div className='table-container'>
      <Table className='table' bordered hover>
        <thead>
          <th></th>
          <th>Position</th>
          <th>Company</th>
          <th>Location</th>
          <th className='contacted'>Contacted?</th>
        </thead>
        <tbody>
          {savedJobs.map(job => (
            <tr key={job.job_id}>
              <td>
                <DeleteIcon />
              </td>
              <td><a href={job.url} target='blank'>{job.position}</a></td>
              <td>{job.company}</td>
              <td>{job.location}</td>
              <td>
                <input type='checkbox' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default SavedJobs;
