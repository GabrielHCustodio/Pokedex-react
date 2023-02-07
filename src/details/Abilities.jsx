import React from "react";

import styles from "./Abilities.module.css"

const Abilities = ({ abilities }) => {
  return (
    <div>
      <p className={styles.abilities}>Habilidades: </p>
      {abilities.map((a) => (
        <ul>
          <li key={a.ability.slot} className={styles.name}>{a.ability.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default Abilities;
