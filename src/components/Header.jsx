import React from "react";

import styles from "./Header.module.css";

const Header = ({ ordenation, search }) => {
  const handleOrdenation = (e) => {
    e.preventDefault();
    const value = e.target.value;
    ordenation(value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      search(e.target.value);
    }
  };

  return (
    <header className={styles.header}>
      <h1>Pokedex</h1>

      <div className={styles.actions}>
        <div className={styles.ordenation}>
          <select name="" id="" onChange={handleOrdenation}>
            <option value="" disabled>
              Ordenar pokemons...
            </option>
            <option value="1">De A - Z</option>
            <option value="2">De Z - A</option>
          </select>
        </div>

        <div className={styles.search}>
          <input
            type="text"
            placeholder="Pesquisar pokemon..."
            onKeyUp={handleSearch}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
