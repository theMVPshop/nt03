import React, { useState, useEffect } from 'react'
import SearchFormSm from './SearchFormSm';
import JobCard from './JobCard';
import NewsArticles from './NewsArticles';
import FlashCards from './FlashCards';

const JobPostings = ({jobSearch}) => {
  // const [jobList, setJobList] = useState([])
  // const [selectedJob, setSelectedJob] = useState({})

  useEffect(() => {
    fetch('https://jooble.org/api/2f68c697-0b9e-420b-ac07-3522403e50ae', {
      // mode: 'no-cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        "keywords": "dental hygienist",
        "location": "Tampa, FL"
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // setJobList(data)
        // setSelectedJob(data[0])
      })
      .catch(error => console.log(`Error, ${error}`))
  },[]);
  
  return (
    <div>
      <div className='container'>
        <SearchFormSm placeholder1='position' placeholder2='location' />
        <div className='grid-container'>
          <div className='job-postings-grid'>
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
          <div className='news-grid'>
            <NewsArticles />
          </div>
          <div className='flashcards-grid'>
            <FlashCards />
          </div>
      </div>
      </div>
    </div>
  )
}

export default JobPostings;

// {jobList.map((job, index) => {
//   <JobCard 
//     title={job.title}
//     location={job.location}
//     company={job.company}
//     description={job.snippet}
//     link={job.link}
//   />
// })}