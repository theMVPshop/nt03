import React, { useState, useEffect } from 'react'
import SearchFormSm from './SearchFormSm';
import JobCard from './JobCard';
import NewsArticles from './NewsArticles';
import FlashCards from './FlashCards';

const JobPostings = ({jobSearch}) => {
  // const [jobList, setJobList] = useState([])
  // const [selectedJob, setSelectedJob] = useState({})

  useEffect(() => {
    const url = "https://jooble.org/api/";
    const key = "2f68c697-0b9e-420b-ac07-3522403e50ae";
    let params = "{ keywords: 'dental assistant', location: 'Austin'}";

    //create xmlHttpRequest object
    const http = new XMLHttpRequest();
    //open connection. true - asynchronous, false - synchronous
    http.open("POST", url + key, true);

    //Send the proper header information
    http.setRequestHeader("Content-type", "application/json");
      
    //Callback when the state changes
    http.onreadystatechange = function() {
      if(http.readyState == 4 && http.status == 200) {
        let data = JSON.parse(http.responseText);
        console.log(data.jobs);
        // setJobList(data)
        // setSelectedJob(data[0])
      }
    }
    //Send request to the server
    http.send(params);
  }, [])
  
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
          {/* <div className='news-grid'> */}
            <NewsArticles />
          {/* </div> */}
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