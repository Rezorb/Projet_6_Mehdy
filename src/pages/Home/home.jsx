import "./Home.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";

function App() {
  return (
    <>
      <div className="app">
        <div className="header_container">
          <Header />
          <Navbar />
        </div>
        <div className="main_container">
          <Banner />
          <Gallery />
        </div>
        <div className="footer_container">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
