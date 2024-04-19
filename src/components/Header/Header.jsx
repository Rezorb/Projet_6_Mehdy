import React from "react";
import "./Header.scss";
import logo from "../../assets/Logo_header.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="header_container">
      <div>
        <img src={logo} alt="Logo Kasa" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
