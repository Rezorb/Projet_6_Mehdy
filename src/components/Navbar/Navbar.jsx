import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
        <div>Accueil</div>
      </Link>
      <Link to="/about">
        <div>A propos</div>
      </Link>
    </nav>
  );
}

export default Navbar;
