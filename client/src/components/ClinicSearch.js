import React from 'react';
import SearchFormLg from './SearchFormLg';
import clinic from '../images/GREEN-clinic-search.png';

const ClinicSearch = () => {
  return (
    <SearchFormLg
      icon={clinic}
      alt='clinic search icon'
      placeholder1='location'
    />
  );
};

export default ClinicSearch;
