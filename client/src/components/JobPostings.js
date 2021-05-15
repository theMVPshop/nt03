import React from 'react';
import SearchFormSm from './SearchFormSm';
import JobCard from './JobCard';
import NewsArticles from './NewsArticles';
import FlashCards from './FlashCards';

const JobPostings = (props) => {
  
  return (
    <div>
      <SearchFormSm placeholder1='position' placeholder2='location' />

      <div className='grid-container'>
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
        <div className='news-container'>
          <NewsArticles />
        </div>
        <div className='flashcards-container'>
          <FlashCards />
        </div>
      </div>

    </div>
  )
}

export default JobPostings;