import './App.css';
import Jumbotron from "./components/Jumbotron/jumbotron"
import Input from "./components/Input/Input"
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
    name: "Brad Foytik",
    phone: "715-458-6221",
    email: "brad.foytik@gmail.com",
    DOB: "09-9-1992"
  }

]

function App() {
  return (
    <div className="App">
      <Jumbotron />
      <Input />
      <br></br>
      <List ED={ED} />
    </div>
  );
}

export default App;
