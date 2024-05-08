import logo from "../../assets/Logo_footer.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img
        src={logo}
        alt="Kasa - agence de location d'appartements entre particuliers"
      />
      <p className="footer_2020">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
