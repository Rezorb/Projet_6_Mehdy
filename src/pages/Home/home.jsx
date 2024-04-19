import "./Home.scss";
import Header from "../../components/Header/Header";
import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";

function Home() {
  return (
    <div className="home">
      <Header/>
      <MainLayout>
        <Gallery />
      </MainLayout>
      <Footer/>
      </div>
  );
}

export default Home;
