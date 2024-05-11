import React from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const currentPage = useLocation("");

  return (
    <nav className="navbar">
      {/* Lien vers la page 'home' */}
      <Link to="/" className={currentPage.pathname === "/" ? "active" : ""}>
        Accueil
      </Link>
      {/* Lien vers la page 'about' */}
      <Link
        to="/about"
        className={currentPage.pathname === "/about" ? "active" : ""}
      >
        A propos
      </Link>
    </nav>
  );
}

export default Navbar;
