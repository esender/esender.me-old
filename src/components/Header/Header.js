import React from "react";
import { Link } from "gatsby";
import * as styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.name}>Marat Abdulin</Link>
      <nav>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <Link to="/">Homepage</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/resume/">Résumé</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
