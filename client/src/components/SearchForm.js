
const SearchForm = () => {

  return (
    <div className='search-form-container'>
      <form className='search-form'>
        <input
          className='search-input'
          type='text'
          placeholder='position'
        />
        <input
          className='search-input'
          type='text'
          placeholder='location'
        />
        <button className='button form-button' type='submit'>SEARCH</button>
      </form>
    </div>
  )

}

export default SearchForm;