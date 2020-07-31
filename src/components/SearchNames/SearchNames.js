import React from 'react';
import {SearchNameForm, SearchNameInput, SearchNameSubmit} from './SearchNamesStyles'

function SearchNames(props) {

    const placeholder = props.query ? props.query : 'Enter your query.'
    
    function handleChange(e) {
      props.setQuery(e.target.value)
      e.preventDefault()
    }
  
    function handleSubmit(e) {
      console.log('update URL')
      props.updateURL()
      e.preventDefault()
    }
  
    return (
      <SearchNameForm onSubmit={handleSubmit}>
        <SearchNameInput type="text"
          placeholder={placeholder}
          onKeyUp={handleChange}
        />
        <SearchNameSubmit type="submit" value="Go!" />
      </SearchNameForm>
    )
  }

  export default SearchNames