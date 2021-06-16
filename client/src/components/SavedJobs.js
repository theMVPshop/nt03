import React, { useState, useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Table } from 'react-bootstrap';

const SavedJobs = () => {
  const [savedJobs, setSavedJobs] = useState([]);
  const [toggleChecked, setToggleChecked] = useState(0);

  useEffect(() => {
    fetch(`/jobs/jobs/1`)
      .then(response => response.json())
      .then(data => {
        setSavedJobs(data);
        // console.log(data);
      })
  }, [savedJobs])

  const deleteJob = (id) => {
    fetch(`/jobs/jobs/${id}`, {
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
            const newState = [...savedJobs];
            let filteredState = newState.filter(job => job.job_id !== id);
            setSavedJobs(filteredState);
        } else {
            alert('There was an error and job posting was not saved');
        }
    })
  }

  // const toggleChecked = () => {
  //  setToggleChecked(toggleChecked === 0 ? 1 : 0);
  // }

  // const updateChecked = (id) => {
  //   fetch(`/jobs/jobs/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     body: json(toggleChecked)
  //   })
  //     .then(response => {
  //       if (response.ok) {
  //           console.log(response);
  //       } else {
  //           alert('There was an error and job posting was not updated');
  //       }
  //   })
  // }
  
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
                <DeleteIcon onClick={() => deleteJob(job.job_id)} />
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

// onChange={() => updateChecked(job.job_id)}