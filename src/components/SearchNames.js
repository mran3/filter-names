import React from 'react';

function SearchNames(props) {

    function handleChange(e) {
      props.setQuery(e.target.value)
    }
  
    function handleSubmit(e) {
      console.log('update URL')
      props.updateURL()
      e.preventDefault()
    }
  
    const placeholder = props.query ? props.query : 'Enter your query.'
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder={placeholder}
          onKeyUp={handleChange}
        />
        <input type="submit" value="Go!" />
      </form>
    )
  }

  export default SearchNames