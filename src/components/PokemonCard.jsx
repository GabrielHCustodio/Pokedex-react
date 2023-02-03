import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./PokemonCard.module.css";

const PokemonCard = ({ pokemon }) => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [type, setType] = useState();

  const history = useNavigate()

  useEffect(() => {
    fetch(`${pokemon.url}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setImage(data.sprites.front_default);
        setType(data.types[0].type.name);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClickPokemon = () => {
    history(`/details/${name}`)
  }

  return (
    <div className={`${styles.card} ${styles[type]}`} onClick={handleClickPokemon}>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default PokemonCard;
