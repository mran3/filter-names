import React from 'react';
import './App.css';

function App(props){
  const initialSearch = props.match?.query || ''
  console.log(initialSearch)
  const [query, setQuery] = React.useState(initialSearch);

  const DATASET = ['Aayla Secura', 'Adi Gallia', 'Admiral Dodd Rancit', 'Admiral Firmus Piett', 'Admiral Gial Ackbar', 'Admiral Ozzel' ]; 


  return (
    <>
      <SearchNames setQuery = {setQuery} query={query}/>
      <SimpleList names = {DATASET} query={query} />
    </>
  )


}

function SearchNames(props) {

  function handleChange(e) {
    props.setQuery(e.target.value)
  }
  
  function handleSubmit(e) {
    console.log('update URL')
    e.preventDefault()
  }

  const placeholder = props.query ? props.query : 'Enter your query.'

  return (
    <form onSubmit = {handleSubmit}>
      <input type="text"
        placeholder={placeholder}
        onKeyUp={handleChange}/>
    </form>
  )
}

function SimpleList(props) {
  const names = props.names;
  const upperCaseQuery = props.query.toUpperCase()
  const listItems = names.map((name, id) => {
    const condition = name.toUpperCase().includes(upperCaseQuery) || upperCaseQuery === ''
    
    if(condition) {
      return <li key={id}>{name}</li>    
    }

  }
                             );

  return (<ul>{listItems}</ul>)
}

export default App;
