import SearchForm from './SearchForm';
import clinic from '../images/GREEN-clinic-search.png';

const ClinicSearch = () => {

  return (
    <SearchForm 
      icon={clinic} 
      alt='clinic search icon'
      placeholder1='location'
    />
  )

}

export default ClinicSearch;