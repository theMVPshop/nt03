import React, { useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Table } from 'react-bootstrap';

const SavedJobs = () => {
  let savedJobs = [];

  useEffect(() => {
    fetch(`/jobs/jobs/1`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
  })

  return (
    <div className='table-container'>
      <Table className='table' bordered hover>
        <thead>
          <th></th>
          <th>Position</th>
          <th>Company</th>
          <th>Location</th>
          <th>Link</th>
          <th className='contacted'>Contacted?</th>
        </thead>
        <tbody>
          {savedJobs.map((job, index) => (
            <tr key={index}>
              <td>
                <DeleteIcon />
              </td>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.location}</td>
              <td>{job.link}</td>
              <td>
                <input type='checkbox' />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SavedJobs;
