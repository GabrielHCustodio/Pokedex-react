import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

import Abilities from "../details/Abilities";
import Stats from "../details/Stats";
import Type from "../details/Type";

import styles from "./Details.module.css";
import "../styleBg/Bg.css";

const Details = () => {
  const params = useParams();
  const history = useNavigate();

  const [name, setName] = useState([]);
  const [abilities, setAbilities] = useState([]);
  const [image, setImage] = useState([]);
  const [type, setType] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setName(data.name);
        setAbilities(data.abilities);
        setImage(data.sprites.front_default);
        setType(data.types[0].type.name);
        setStats(data.stats);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCloseClick = () => {
    history("/");
  };

  return (
    <div className={`${styles.container_details} ${[type]}`}>
      <div className={styles.header_details}>
        <h1 className={styles.name}>{name}</h1>
        <button onClick={handleCloseClick}>
          <CgClose />
        </button>
      </div>

      <div className={styles.container_info}>
        <div className={styles.container_image}>
          <img src={image} alt="name" />
        </div>

        <div className={styles.container_data}>
          <Stats stats={stats} />
          <Abilities abilities={abilities} />
          <Type type={type} />
        </div>
      </div>
    </div>
  );
};

export default Details;
