import React from "react";

import styles from "./Stats.module.css"

const Stats = ({ stats }) => {
  return (
    <div>
      <p className={styles.stats}>Estatísticas: </p>
      {stats.map((s) => (
        <div>
          <p className={styles.name}>{s.stat.name}</p>
          <div className={styles.progress}>
            <div
              className={styles.progress_bar}
              style={{ width: s.base_stat + "%" }}
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={s.base_stat}
            ></div>
            <p>{s.base_stat}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
