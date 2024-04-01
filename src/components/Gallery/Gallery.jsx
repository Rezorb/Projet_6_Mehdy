import React from "react";
import "./Gallery.css";
import Card from "../Card/Card.jsx";
import cardsData from "../../Data/CardsData.json";

function Gallery() {
  return (
    <div className="gallery">
      {cardsData.map((housing) => (
        <Card key={housing.id} housing={housing} />
      ))}
    </div>
  );
}

export default Gallery;
