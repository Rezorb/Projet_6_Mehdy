import React from "react";
import RedStar from "../../assets/RedStar.png";
import GrayStar from "../../assets/GrayStar.png";
import "./Rating.css";

function Rating({ rating }) {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <img
            key={index}
            src={ratingValue <= rating ? RedStar : GrayStar}
            alt="star"
            className="stars"
          />
        );
      })}
    </div>
  );
}

export default Rating;
