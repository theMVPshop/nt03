import React from 'react';

const SearchFormSm = (props) => {
  const handleTextChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='sm-search-form-container'>
      <form className='sm-search-form' onSubmit={handleSubmit}>
        <input
          className='sm-search-input'
          type='text'
          placeholder={props.placeholder1}
          onChange={handleTextChange}
        />
        {props.placeholder2 === undefined ? null : (
          <input
            className='sm-search-input'
            type='text'
            placeholder={props.placeholder2}
            onChange={handleTextChange}
          />
        )}
        <button className='btn sm-btn' type='submit'>
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default SearchFormSm;
