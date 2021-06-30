import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import clinic from '../../images/GREEN-clinic-search.png';

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
    <div className='lg-search-form-container'>
      <div className='lg-search-form'>
        <img className='lg-search-form-icon' src={clinic} alt='clinic search icon' />
        <form className='lg-search-form' onSubmit={handleSubmit}>
          <input
            className='lg-search-input'
            type='text'
            placeholder='Enter a state (i.e. TX) or zip code'
            onChange={handleTextChange}
          />
          <button className='btn lg-btn' type='submit'>
            SEARCH FOR CLINICS
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
