import React from 'react';
const SearchForm = (props) => {
  const handleTextChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='search-form-container'>
      <div className='search-form'>
        <img className='search-form-icon' src={props.icon} alt={props.alt} />
        <form className='search-form' onSubmit={handleSubmit}>
          <input
            className='search-input'
            type='text'
            placeholder={props.placeholder1}
            onChange={handleTextChange}
          />
          {props.placeholder2 === undefined ? null : (
            <input
              className='search-input'
              type='text'
              placeholder={props.placeholder2}
              onChange={handleTextChange}
            />
          )}
          <button className='btn form-btn' type='submit'>
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
