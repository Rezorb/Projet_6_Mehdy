import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

// On ajoute `housing` comme prop pour recevoir les données du logement.
function Card({ housing }) {
  return (
    <div className="card">
      <Link to={`/housing/${housing.id}`}>
        <div className="card__title">{housing.title}</div>
      </Link>
    </div>
  );
}

export default Card;
