import "./App.css";
import Home from "./assets/pages/Home";
import BeerPage from "./assets/pages/BeerPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers/:id" element={<BeerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
