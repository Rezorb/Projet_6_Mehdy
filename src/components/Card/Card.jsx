import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${cover})` }}>
      <Link to={`/housing/${id}`}>
        <div className="card__title">{title}</div>
      </Link>
    </div>
  );
}

export default Card;
