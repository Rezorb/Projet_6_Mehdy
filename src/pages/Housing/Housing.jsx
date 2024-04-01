import React from "react";
import "./Housing.css";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Slideshow from "../../components/Slideshow/Slideshow";
import Footer from "../../components/Footer/Footer";
import Title from "../../components/Title/Title";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";
import CardsData from "../../Data/CardsData.json";
import Error from "../../pages/Error/Error";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Housing = () => {
  const { id } = useParams();
  const [housingData, setHousingData] = useState(null);

  useEffect(() => {
    const foundHousing = CardsData.find((house) => house.id === id);

    setHousingData(foundHousing);
  }, [id]);

  if (!housingData) {
    return <Error />;
  }

  //   return (
  //     <div>
  //       <h1>{housingData.title}</h1>
  //       {/* autres informations */}
  //     </div>
  //   );
  // };

  return (
    <div className="body">
      <div className="header_container">
        <Header />
        <Navbar />
      </div>
      <main className="main_container">
        <Slideshow />
        <section>
          <div className="housing_info">
            <div>
              <Title title={housingData.title} />
              <Tags 
              tags_content={<ul>{housingData.tags.map(tags => <li key={tags}>{tags}</li>)}</ul>} 
              />
            </div>
            <div className="housing_right">
              <Host
                name={housingData.host.name}
                picture={housingData.host.picture}
              />
              <Rating />
            </div>
          </div>
          <div className="housing_collapse">
            <Collapse title="Description" content={housingData.description} />
            <Collapse
              title="Équipements"
              content={housingData.equipments.map((equipment, index) => (
                <div key={index}>{equipment}</div>
              ))}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Housing;