import React, { useEffect, useState } from "react";

import PokemonCard from "../components/PokemonCard";

import styles from "./Pokemons.module.css"

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=40&offset=0")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div className={styles.container_cards}>
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon} />
      ))}
    </div>
  );
};

export default Pokemons;
