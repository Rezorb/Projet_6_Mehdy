import React from "react";
import "./Banner.scss";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Banner() {
  const [aboutPage, setAboutPage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setAboutPage(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={aboutPage ? "banner_about" : "banner"}>
      {!aboutPage && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  );
}

export default Banner;
