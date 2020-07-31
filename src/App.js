import React from 'react';
import SearchNames from './components/SearchNames/SearchNames'
import NameList from './components/NameList'
import dataset from './dataset'
import { generatePath } from "react-router";
import styled from '@emotion/styled'

const AppWrapper = styled.div`
width: 40%;
border: solid white;
margin:auto;
padding: 0 2rem;
margin-top: 2rem;
`

function App(props) {
  const initialSearch = props.match.params?.query || ''
  const [query, setQuery] = React.useState(initialSearch);

  function updateURL() {
    props.history.push({
      pathname: generatePath(props.match.path, { query: query })
    });
  }

  return (
    <AppWrapper>
      <h2>Find your name! 🔎</h2>
      <SearchNames setQuery={setQuery} query={query} updateURL={updateURL} />
      <NameList names={dataset} query={query} />
    </AppWrapper>
  )

}

export default App;
