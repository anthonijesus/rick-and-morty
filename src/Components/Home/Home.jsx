import React from "react";
import styles from "./Home.module.scss";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Main from "../Main/Main.jsx";
import Aside from "../Aside/Aside.jsx";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />

      <Main />

      <Aside />
      <Footer />
    </div>
  );
};

export default Home;
