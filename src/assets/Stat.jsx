import React from "react";
import { styles } from "../styles/styles";

export default function Stat({ label, value, color, capitalize }) {
  return (
    <div className={styles.statCard}>
      <p className={`${styles.statValue} ${color} ${capitalize ? "capitalize" : ""}`}>
        {value}
      </p>
      <p className={styles.statLabel}>{label}</p>
    </div>
  );
}
