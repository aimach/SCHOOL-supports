import "./App.css";
import ArrayList from "./components/ArrayList";

const array = [
  {
    id: 1,
    name: "bulbasaur",
    type: "plant",
  },
  {
    id: 2,
    name: "pikachu",
    type: "electric",
  },
  {
    id: 3,
    name: "mew",
    type: "psy",
  },
  {
    id: 4,
    name: "carapuce",
    type: "water",
  },
  {
    id: 5,
    name: "taupiqueur",
    type: "ground",
  },
];

function App() {
  return (
    <div className="App">
      <ArrayList array={array} />
    </div>
  );
}

export default App;
