import React from "react";
import { Link } from "gatsby";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <div className="name">Marat Abdulin</div>
      <nav>
        <ul className="navigation-list">
          <li className="navigation-item">
            <Link to="/">Homepage</Link>
          </li>
          <li className="navigation-item">
            <Link to="/resume">Résumé</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
