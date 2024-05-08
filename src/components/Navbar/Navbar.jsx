import React from "react";
import "./Navbar.scss";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const currentPage = useLocation("");

  return (
    <nav className="navbar">
      <Link to="/" className={currentPage.pathname === "/" ? "active" : ""}>
        Accueil
      </Link>
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
