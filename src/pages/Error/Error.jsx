import React from "react";
import "./Error.css";
import "../Home/Home.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="error_gap">
        <div className="header_container">
          <Header />
          <Navbar />
        </div>
        <div className="error">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <NavLink to="/">
            <h3>Retourner sur la page d’accueil</h3>
          </NavLink>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Error;
