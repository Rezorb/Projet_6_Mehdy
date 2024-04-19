import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
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
