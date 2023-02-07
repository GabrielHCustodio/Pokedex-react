import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Details from "./pages/Details";
import Pokemons from "./pages/Pokemons";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
