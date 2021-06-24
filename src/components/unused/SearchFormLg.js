import React from 'react';

const SearchFormLg = (props) => {
  const handleTextChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='lg-search-form-container'>
      <div className='lg-search-form'>
        <img className='lg-search-form-icon' src={props.icon} alt={props.alt} />
        <form className='lg-search-form' onSubmit={handleSubmit}>
          <input
            className='lg-search-input'
            type='text'
            placeholder={props.placeholder1}
            onChange={handleTextChange}
          />
          {props.placeholder2 === undefined ? null : (
            <input
              className='lg-search-input'
              type='text'
              placeholder={props.placeholder2}
              onChange={handleTextChange}
            />
          )}
          <button className='btn lg-btn' type='submit'>
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchFormLg;
