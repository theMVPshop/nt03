import React from 'react';
import { Link } from 'react-router-dom';
import clinic from '../images/WHITE-clinic-search.png';
import search from '../images/WHITE-Search.png';

const Landing = () => {
  return (
    <div className='landing-container'>
      <div className='main-info'>
        <button className='search-button'>
          <Link className='main-link' to='/clinic-search'>
            Clinic Phone Book
          </Link>
          <img src={clinic} alt='clinic search icon' />
        </button>
        <button className='search-button'>
          <Link className='main-link' to='/job-search'>
            Search For Jobs
          </Link>
          <img src={search} alt='job search icon' />
        </button>
      </div>
    </div>
  );
};

export default Landing;
