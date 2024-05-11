import React from "react";
import "./Banner.scss";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Banner() {
  // Const pour déterminer si la page 'About' est la page courante.
  const [aboutPage, setAboutPage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    // On vérifie si l'URL est '/about' puis on met à jour l'état.
    if (location.pathname === "/about") {
      setAboutPage(true);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className={aboutPage ? "banner_about" : "banner"}>
      {/* Affichage du titre uniquement si ce n'est pas la page 'About' */}
      {!aboutPage && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  );
}

export default Banner;
