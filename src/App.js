import './App.css';
import Jumbotron from "./components/Jumbotron/jumbotron"
import SearchForm from "./components/SearchForm/SearchForm"
import List from "./components/List/List"


function App() {
  
  const someFunction = () => {
    console.log('Hey');
  }

  return (
    <div className="App">
      <Jumbotron />
      <SearchForm handleInputChange={someFunction} />
      <br></br>
      <List filterString={''} />
    </div>
  );
}

export default App;


