import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";

import styles from "./Pokemons.module.css";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOrdenation = (value) => {
    console.log(value);
  };

  const handleSearch = (value) => {
    console.log(value);
  };

  return (
    <div>
      <Header ordenation={handleOrdenation} search={handleSearch} />
      <div className={styles.container_cards}>
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
