import './App.css';
import Jumbotron from "./components/Jumbotron/jumbotron"
import SearchForm from "./components/SearchForm/SearchForm"
import List from "./components/List/List"

const ED = [
  {
    id: 1,
    name: "Casey Morgan",
    phone: "715-651-4130",
    email: "caseyjeanmorgan@gmail.com",
    DOB: "02-23-1989"
  },
  {
    id: 2,
    name: "Barb Morgan",
    phone: "715-296-0089",
    email: "barb.morgan@gmail.com",
    DOB: "12-08-1952"
  },
  {
    id: 3,
    name: "Lucas Morgan",
    phone: "123-456-7890",
    email: "luke.morgan@gmail.com",
    DOB: "01-22-1987"
  },
  {
    id: 4,
    name: "Harry Morgan",
    phone: "715-296-0017",
    email: "harry.morgan@gmail.com",
    DOB: "10-26-1964"
  }

]

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <SearchForm />
      <br></br>
      <List ED={ED} />
    </div>
  );
}

export default App;
