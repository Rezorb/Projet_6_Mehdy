import logo from "../../assets/Logo.png";
import "./Logo.css";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <header>
      <div className="header_logo">
        {" "}
        <NavLink to='/'><img src={logo} alt="Logo Kasa" /></NavLink>
      </div>
    </header>
  );
}

export default Logo;
