import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import searchIcon from '../images/GREEN-search.png';

const JobSearch = ({ setJobSearch }) => {
  const [search, setSearch] = useState({});

  const history = useHistory();

  const handleTextChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobSearch(search);
    history.push('/job-postings');
  };
  return (
    <div className='lg-search-form-container'>
      <h3>Search for dental jobs in your area</h3>
      <div className='lg-search-form'>
        <img
          className='lg-search-form-icon'
          src={searchIcon}
          alt='job search icon'
        />
        <form className='lg-search-form' onSubmit={handleSubmit}>
          <input
            className='lg-search-input'
            type='text'
            name='position'
            value={search.position}
            placeholder='Enter position title'
            onChange={handleTextChange}
          />
          <input
            className='lg-search-input'
            type='text'
            name='location'
            value={search.location}
            placeholder='Enter location'
            onChange={handleTextChange}
          />
          <button className='btn lg-btn' type='submit'>
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};

// const JobSearch = () => {
//   return (
//     <SearchFormLg
//       icon={search}
//       alt='job search icon'
//       placeholder1='position'
//       placeholder2='location'
//     />
//   );
// };

export default JobSearch;
