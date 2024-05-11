import React from "react";
import "./Gallery.scss";
import Card from "../Card/Card.jsx";
import CardsData from "../../Data/CardsData.json";

function Gallery() {
  return (
    <div className="gallery">
      {/* Itération avec '.map()' sur CardsData pour créer une Card pour chaque élément */}
      {CardsData.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          cover={item.cover}
        />
      ))}
    </div>
  );
}

export default Gallery;
