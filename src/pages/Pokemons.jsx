import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import PokemonCard from "../components/PokemonCard";
import SearchPokemonCard from "../components/SearchPokemonCard";

import styles from "./Pokemons.module.css";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState([]);
  const [name, setName] = useState("");

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

  async function handleSearch(value) {
    setName(value);

    await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchPokemon({
          name: data.name,
          image: data.sprites.front_default,
          type: data.types[0].type.name,
        });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Header ordenation={handleOrdenation} search={handleSearch} />
      <div className={styles.container_cards}>
        {name === "" &&
          pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        {name !== "" && (
          <SearchPokemonCard pokemon={searchPokemon} key={searchPokemon.id} />
        )}
      </div>
    </div>
  );
};

export default Pokemons;
