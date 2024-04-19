import React from "react";
import "./Slideshow.scss";
import arrowPrev from "../../assets/Arrow_prev.png";
import arrowNext from "../../assets/Arrow_next.png";
import { useState } from "react";

function Slideshow({ images }) {
  const [currentImg, setCurrentImg] = useState(0);
  const length = images.length;

  const prevImage = () => {
    setCurrentImg(currentImg === 0 ? images.length - 1 : currentImg - 1);
  };

  const nextImage = () => {
    setCurrentImg(currentImg === images.length - 1 ? 0 : currentImg + 1);
  };

  return (
    <div className="slideshow_container">
      {images.map((image, index) => {
        return (
          <div key={index}>
            {index === currentImg && (
              <img className="slideshow_container_img" src={image} alt="housing" />
            )}
          </div>
        );
      })}

      {length > 1 && ( // Condition pour afficher le compteur et les flèches uniquement s'il y a plus d'une image
        <>
          <img
            src={arrowPrev}
            onClick={prevImage}
            className="prev__arrow"
            alt="Preview arrow"
          />
          <img
            src={arrowNext}
            onClick={nextImage}
            className="next__arrow"
            alt="Next arrow"
          />
        </>
      )}

      {length > 1 && ( // Condition pour afficher le compteur uniquement s'il y a plus d'une image
        <div className="slideshow_container_counter">
          <p>
            {currentImg + 1}/{length}
          </p>
        </div>
      )}
    </div>
  );
}

export default Slideshow;
