import "./Home.scss";

import MainLayout from "../../components/Layout/MainLayout/MainLayout";
import Gallery from "../../components/Gallery/Gallery";

function Home() {
  return (
    <div className="home">
      <MainLayout>
        <Gallery />
      </MainLayout>
    </div>
  );
}

export default Home;
