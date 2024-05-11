import React from "react";
import "./Slideshow.scss";
import arrowPrev from "../../assets/Arrow_prev.png";
import arrowNext from "../../assets/Arrow_next.png";
import { useState } from "react";

function Slideshow({ images }) {
  // Const -> pour récupérer l'index de l'image actuelle //
  const [currentImg, setCurrentImg] = useState(0);
  const length = images.length;

  // Const -> Pour passer à l'image précédente //
  const prevImage = () => {
    setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
  };

  // Const -> Pour passer à l'image suivante //
  const nextImage = () => {
    setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
  };

  return (
    <section className="slideshow_container">
      {/* On affiche l'image actuelle */}
      <div>
        <img
          className="slideshow_container_img"
          src={images[currentImg]}
          alt="housing"
        />
      </div>
      {/* Les flêches sont affichées uniquement s'il y a plus d'une image */}
      {length > 1 && (
        <>
          <img
            src={arrowPrev}
            onClick={prevImage}
            className="slideshow_container_arrow slideshow_container_arrow_prev"
            alt="Preview arrow"
          />
          <img
            src={arrowNext}
            onClick={nextImage}
            className="slideshow_container_arrow slideshow_container_arrow_next"
            alt="Next arrow"
          />
        </>
      )}
      {/* On indique la position de l'image courante */}
      {length > 1 && (
        <div className="slideshow_container_counter">
          <p>
            {currentImg + 1}/{length}
          </p>
        </div>
      )}
    </section>
  );
}

export default Slideshow;
