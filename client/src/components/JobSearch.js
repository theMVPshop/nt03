import SearchForm from './SearchForm';
import search from '../images/GREEN-search.png';

const JobSearch = () => {

  return (
    <SearchForm 
      icon={search} 
      alt='job search icon' 
      placeholder1='position' 
      placeholder2='location'
    />
  )

}

export default JobSearch;