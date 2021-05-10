import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./styles.css";
import "@fontsource/open-sans";
import "@fontsource/fira-sans/400.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="container">
        <div className="content">{children}</div>
      </main>
      <div className="container">
        <hr className="delimiter" />
      </div>
      <Footer />
    </>
  );
}
