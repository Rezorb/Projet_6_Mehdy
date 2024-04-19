import React from "react";
import "./Error.css";
import "../Home/Home.scss";
import HeaderLayout from "../../components/Layout/HeaderLayout/HeaderLayout";
import FooterLayout from "../../components/Layout/FooterLayout/FooterLayout";
import { NavLink } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="error_gap">
      <HeaderLayout />
        <div className="error">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas.</h2>
          <NavLink to="/">
            <h3>Retourner sur la page d’accueil</h3>
          </NavLink>
        </div>
        <FooterLayout />
      </div>
    </>
  );
}

export default Error;
