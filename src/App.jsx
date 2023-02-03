import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Details from "./pages/Details";
import Pokemons from "./pages/Pokemons";

function App() {
  const handleOrdenation = (value) => {
    console.log(value);
  };

  const handleSearch = (value) => {
    console.log(value);
  };

  return (
    <div>
      <Router>
        <Header ordenation={handleOrdenation} search={handleSearch} />
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
