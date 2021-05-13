
const SearchForm = (props) => {

  const handleTextChange = (e) => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='search-form-container'>
      <div className='search-form'>
        <img className='search-form-icon' src={props.icon} alt={props.alt} />
        <form className='search-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              className='search-input'
              type='text'
              placeholder={props.placeholder1}
              onChange={handleTextChange}
            />
          </div>
          {props.placeholder2 === undefined ? null :
            <div className='form-group'>
              <input
                className='search-input'
                type='text'
                placeholder={props.placeholder2}
                onChange={handleTextChange}
              />
            </div>
          }
          <div className='form-group button-box'>
            <button className='btn form-btn' type='submit'>SEARCH</button>
          </div>
        </form>
      </div>
    </div>
  )

}

export default SearchForm;