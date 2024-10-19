import React from "react";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Rick and Morty app</h1>
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/personajes">Characters</a>
          </li>
          <li>
            <a href="/acerca">About Us</a>
          </li>
          <li>
            <a href="contacto">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
