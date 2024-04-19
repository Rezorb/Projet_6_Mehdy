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
    <section className="slideshow_container">
      {images.map((image, index) => {
        return (
          <div key={index}>
            {index === currentImg && (
              <img
                className="slideshow_container_img"
                src={image}
                alt="housing"
              />
            )}
          </div>
        );
      })}

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
