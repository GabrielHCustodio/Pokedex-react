import React from "react";

import styles from "./Type.module.css"

const Type = ({ type }) => {
  return (
    <div className={styles.type}>
      <p>
        <span>Tipo: </span> {type}
      </p>
    </div>
  );
};

export default Type;
