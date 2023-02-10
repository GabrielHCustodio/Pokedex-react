import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./PokemonCard.module.css";
import "../styleBg/Bg.css";

const SearchPokemonCard = ({ pokemon }) => {
  const history = useNavigate();

  const handleClickPokemon = () => {
    history(`/details/${pokemon.name}`);
  };

  return (
    <div className={`${styles.card} ${[pokemon.type]}`} onClick={handleClickPokemon}>
      <img src={pokemon.image} alt={pokemon.name} />
      <p className={styles.name}>{pokemon.name}</p>
    </div>
  );
};

export default SearchPokemonCard;
