import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobSearchSm from './JobSearchSm';
import JobCard from './JobCard';
// import NewsArticles from './NewsArticles';
import FlashCards from './FlashCards';
import dentalImg from '../images/Dental-image.jpg';

const JobPostings = ({jobSearch, setJobSearch}) => {
  const [jobList, setJobList] = useState([]);
  const [resultsFound, setResultsFound] = useState(true);

  useEffect(() => {
    axios.post('https://jooble.org/api/2f68c697-0b9e-420b-ac07-3522403e50ae', {
      keywords: jobSearch.position,
      location: jobSearch.location
    })
      .then(res => res.data)
      .then(data => {
        let jobs = data.jobs;
        if(jobs.length > 0){
          setJobList(jobs);
        } else {
          setResultsFound(false);
        }
      })
  }, [jobSearch]);
  
  return (
    <div className='jobs-page-container'>
      <JobSearchSm setJobSearch={setJobSearch} />
      <div className='grid-container'>
        <div className='job-postings-grid'>
          {!resultsFound && 
              <div>
                <h3>No job postings found with your specifications.</h3>
                <img src={dentalImg} alt='dentist illustration' className='no-results-img'/> 
              </div> 
          } 

          {resultsFound && jobList.length > 0 ?
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
            : resultsFound && <h3>Searching.....</h3> 
          }                     
        </div>
        {/* <NewsArticles className='news-grid' /> */}
        <div className='flashcards-grid'>
          <FlashCards />
        </div>
      </div>
    </div>
  )
}

export default JobPostings;