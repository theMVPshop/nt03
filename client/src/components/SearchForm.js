import React from 'react';
const SearchForm = (props) => {
  const handleTextChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='search-form-container'>
<<<<<<< HEAD
      <img className='search-form-icon' src={props.icon} alt={props.alt} />
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          className='search-input'
          type='text'
          placeholder={props.placeholder1}
          onChange={handleTextChange}
        />
        {props.placeholder2 === undefined ? null : (
=======
      <div className='search-form'>
        <img className='search-form-icon' src={props.icon} alt={props.alt} />
        <form className='search-form' onSubmit={handleSubmit}>
          <input
            className='search-input'
            type='text'
            placeholder={props.placeholder1}
            onChange={handleTextChange}
          />
          {props.placeholder2 === undefined ? null :
>>>>>>> b1a7d4758f6e8f639002654cc267cb15d03c355b
          <input
            className='search-input'
            type='text'
            placeholder={props.placeholder2}
            onChange={handleTextChange}
          />
<<<<<<< HEAD
        )}
        <button className='button form-button' type='submit'>
          SEARCH
        </button>
      </form>
=======
          }
          <button className='btn form-btn' type='submit'>SEARCH</button>
        </form>
      </div>
>>>>>>> b1a7d4758f6e8f639002654cc267cb15d03c355b
    </div>
  );
};

export default SearchForm;
