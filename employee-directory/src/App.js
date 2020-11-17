import './App.css';
import Jumbotron from "./components/Jumbotron/jumbotron"
import Input from "./components/Input/Input"
import List from "./components/List/List"


function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Input />
      <br></br>
      <List />
    </div>
  );
}

export default App;
