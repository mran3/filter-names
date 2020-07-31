import React from 'react';
import './App.css';
import SearchNames from './components/SearchNames'
import NameList from './components/NameList'
import dataset from './dataset'
import { generatePath } from "react-router";


function App(props) {
  const initialSearch = props.match.params?.query || ''
  const [query, setQuery] = React.useState(initialSearch);

  function updateURL() {
    props.history.push({
      pathname: generatePath(props.match.path, { query: query })
    });
  }

  return (
    <div className="wrapper">
      <SearchNames setQuery={setQuery} query={query} updateURL={updateURL} />
      <NameList names={dataset} query={query} />
    </div>
  )

}

export default App;
