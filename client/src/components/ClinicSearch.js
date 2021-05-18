import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import clinic from '../images/GREEN-clinic-search.png';

const ClinicSearch = ({setClinicSearch}) => {
  const [search, setSearch] = useState("")

  const history = useHistory();

  const handleTextChange = (e) => {
    let txt = e.target.value
    setSearch(txt)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClinicSearch(search)
    history.push('/clinic-results')
  };

  return (
    <div className='search-form-container'>
      <div className='search-form'>
        <img className='search-form-icon' src={clinic} alt='clinic search icon' />
        <form className='search-form' onSubmit={handleSubmit}>
          <input
            className='search-input'
            type='text'
            placeholder='location'
            onChange={handleTextChange}
          />
          <button className='btn form-btn' type='submit'>
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
}


//   return (
//     <SearchForm
//       icon={clinic}
//       alt='clinic search icon'
//       placeholder1='location'
//     />
//   );
// };

export default ClinicSearch
