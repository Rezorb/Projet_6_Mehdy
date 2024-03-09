import logo from "../../assets/Logo.png";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header_logo">
        {" "}
        <NavLink to='/'><img src={logo} alt="Logo Kasa" /></NavLink>
      </div>
    </header>
  );
}

export default Header;
