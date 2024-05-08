import React from "react";
import RedStar from "../../assets/RedStar.png";
import GrayStar from "../../assets/GrayStar.png";
import "./Rating.scss";

function Rating({ rating }) {
  // Convertir la note en un nombre entier
  const ratingInt = parseInt(rating, 10);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <img
            key={index}
            src={ratingValue <= ratingInt ? RedStar : GrayStar}
            alt={ratingValue <= ratingInt ? "red star" : "gray star"}
            className="star"
          />
        );
      })}
    </div>
  );
}

export default Rating;
