import React from 'react';
import JobCard from './JobCard';
import SearchFormSm from './SearchFormSm';


const JobPostings = (props) => {
  
  return (
    <div>

      <div>
        <SearchFormSm placeholder1='position' placeholder2='location' />
      </div>

      <div className='job-postings-container'>
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>

    </div>
  )
}

export default JobPostings;