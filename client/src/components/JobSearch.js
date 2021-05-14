import React from 'react';
import SearchFormLg from './SearchFormLg';
import search from '../images/GREEN-search.png';

const JobSearch = () => {
  return (
    <SearchFormLg
      icon={search}
      alt='job search icon'
      placeholder1='position'
      placeholder2='location'
    />
  );
};

export default JobSearch;
