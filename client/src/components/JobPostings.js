import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobSearchSm from './JobSearchSm';
import JobCard from '../Containers/JobCard';
import NewsArticles from './NewsArticles';
import FlashCards from './FlashCards';

const JobPostings = ({jobSearch, setJobSearch}) => {
  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    axios.post('https://jooble.org/api/2f68c697-0b9e-420b-ac07-3522403e50ae', {
      keywords: jobSearch.position,
      location: jobSearch.location
    })
      .then(res => res.data)
      .then(data => {
        let jobs = data.jobs;
        setJobList(jobs);
      })
  }, [jobSearch]);
  
  return (
    <div className='container'>
      <JobSearchSm setJobSearch={setJobSearch} />
      <div className='grid-container'>
        <div className='job-postings-grid'>
          {jobList.length > 0 ?
            jobList.map(job => {
              return (
                <JobCard 
                  key={job.id}
                  title={job.title}
                  location={job.location}
                  company={job.company}
                  description={job.snippet}
                  link={job.link}
                />
              )
            })
          : <h3>No job postings found with your specifications.</h3>                           
          }
        </div>
        {/* <div className='news-grid'> */}
          <NewsArticles />
        {/* </div> */}
        <div className='flashcards-grid'>
          <FlashCards />
        </div>
      </div>
    </div>
  )
}

export default JobPostings;