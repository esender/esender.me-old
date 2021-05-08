import React from "react";
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <div className="name">Marat Abdulin</div>
      <nav>
        <ul className="navigation-list">
          <li className="navigation-item">
            <a href="/">Homepage</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
