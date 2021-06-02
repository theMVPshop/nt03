import React, { useState } from 'react';

const JobSearchSm = ({setJobSearch}) => {
  const [search, setSearch] = useState({});

  const handleTextChange = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobSearch(search);
  };

  return (
    <div className='sm-search-form-container'>
      <form className='sm-search-form' onSubmit={handleSubmit}>
        <input
          className='sm-search-input'
          type='text'
          placeholder='position'
          name='position'
          value={search.position}
          onChange={handleTextChange}
        />
        <input
          className='sm-search-input'
          type='text'
          placeholder='location'
          name='location'
          value={search.location}
          onChange={handleTextChange}
        />
        <button className='btn sm-btn' type='submit'>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default JobSearchSm;
