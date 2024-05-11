import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

// On définit les props nécessaires : id, title, et cover.
function Card({ id, title, cover }) {
  return (
    // Redirection vers la page du logement spécifique à l'id.
    <Link
      to={`/housing/${id}`}
      className="card"
      style={{ backgroundImage: `url(${cover})` }}
    >
      <div className="card_title">{title}</div>
    </Link>
  );
}

export default Card;
