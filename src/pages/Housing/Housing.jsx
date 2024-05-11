import React from "react";
import "./Housing.scss";
import Slideshow from "../../components/Slideshow/Slideshow";
import Title from "../../components/Title/Title";
import Tags from "../../components/Tags/Tags";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";
import CardsData from "../../Data/CardsData.json";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Housing = () => {
  const { id } = useParams(); // Extraction de l'id du logement depuis l'URL.
  const [housingData, setHousingData] = useState(null); // Const pour stocker les données du logement actuel.
  const navigate = useNavigate(); // Const pour la navigation.

  useEffect(() => {
    const foundHousing = CardsData.find((house) => house.id === id); // On recherche logement correspondant à l'id.
    if (!foundHousing) {
      navigate("/404"); // Redirection vers la page 404 si le logement n'est pas trouvé.
    } else {
      setHousingData(foundHousing); // On met à jour l'état avec les données trouvées.
    }
  }, [id, navigate]);

  if (!housingData) {
    return null;
  }

  return (
    <div className="body">
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
            <Collapse
              title="Description"
              content={housingData.description}
              titleStyle={{ fontSize: "18px" }}
              borderStyle={{ borderRadius: "10px" }}
            />
            <Collapse
              title="Équipements"
              content={housingData.equipments.map((equipment, index) => (
                <div key={index}>{equipment}</div>
              ))}
              titleStyle={{ fontSize: "18px" }}
              borderStyle={{ borderRadius: "10px" }}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Housing;
