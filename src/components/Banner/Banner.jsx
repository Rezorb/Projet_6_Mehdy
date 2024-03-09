import React from "react";
import bannerImage from "../../assets/bannerTop.png";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
