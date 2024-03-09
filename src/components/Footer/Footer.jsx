import logo from "../../assets/footer.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer_logo">
        {" "}
        <img src={logo} alt="Footer kasa" />
      </div>
    </footer>
  );
}

export default Footer;