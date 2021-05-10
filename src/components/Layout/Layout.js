import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as styles from "./styles.module.css";
import "@fontsource/open-sans";
import "@fontsource/fira-sans/400.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.content}>{children}</div>
      </main>
      <div className={styles.container}>
        <hr className={styles.delimiter} />
      </div>
      <Footer />
    </>
  );
}
