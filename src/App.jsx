import React, { useEffect, useState } from "react";

import Pokemon from "./components/Pokemon"

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
    .then(response => response.json())
    .then(data => {
      setPokemons(data.results)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  return ( 
  <div>
    <h1>Pokedex</h1>
    <div>
    {pokemons.map((pokemon) => (
      <Pokemon pokemon={pokemon} key={pokemon}/>
    ))}
    </div>
  </div>
  );
}

export default App;
