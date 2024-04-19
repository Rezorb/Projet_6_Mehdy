import React from "react";
import "./Housing.scss";
import Slideshow from "../../components/Slideshow/Slideshow";
import Title from "../../components/Title/Title";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";
import CardsData from "../../Data/CardsData.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Housing = () => {
  const { id } = useParams();
  const [housingData, setHousingData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundHousing = CardsData.find((house) => house.id === id);
    if (!foundHousing) {
      navigate("/404");
    } else {
      setHousingData(foundHousing);
    }
  }, [id, navigate]);

  if (!housingData) {
    return null;
  }

  return (
    <div className="body">
      <Header />
      <main className="main_container">
        <Slideshow images={housingData.pictures} />
        <section>
          <div className="housing_info">
            <div>
              <Title
                title={housingData.title}
                location={housingData.location}
              />
              <Tags
                tags_content={
                  <ul>
                    {housingData.tags.map((tags) => (
                      <li key={tags}>{tags}</li>
                    ))}
                  </ul>
                }
              />
            </div>
            <div className="housing_right">
              <Host
                name={housingData.host.name}
                picture={housingData.host.picture}
              />
              <Rating rating={housingData.rating} />
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
