import "./Home.css";
import HeaderLayout from "../../components/Layout/HeaderLayout/HeaderLayout"
import FooterLayout from "../../components/Layout/FooterLayout/FooterLayout"
import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";

function App() {
  return (
    <HeaderLayout>
      <div className="main_container">
        <Banner />
        <Gallery />
      </div>
      <FooterLayout />
    </HeaderLayout>
  );
}

export default App;
