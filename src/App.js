import React, { useState } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron/jumbotron"
import SearchForm from "./components/SearchForm/SearchForm"
import List from "./components/List/List"


function App() {

  const [searchString, setSearchString] = useState('');
  const someFunction = (e) => {
    setSearchString(e.target.value);
  }

  return (<div className="App">
    <Jumbotron />
    <SearchForm handleInputChange={someFunction} />
    <br></br>
    <List filterString={searchString} />
  </div>
  );
}

export default App;


