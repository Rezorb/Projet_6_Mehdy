import React, { useState, useRef, useEffect } from "react";
import "./Collapse.scss";
import Arrow from "../../assets/Arrow.png";

function Collapse({ title, content, titleStyle, borderStyle }) {
  const [isOpen, setIsOpen] = useState(false); // Gestion de l'état ouvert/fermé du contenu.
  const contentRef = useRef(null); // Ici j'ai ajouté un 'useRef' pour manipuler les propriétés CSS directement.

  // Const pour basculer l'état ouvert/fermé du Collapse.
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    // Ici on gère l'animation de la hauteur du contenu.
    if (!isOpen) {
      // Si le contenu est fermé, on calcule et applique la hauteur nécessaire pour montrer tl'ensemble du contenu.
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight + 30}px`; // J'aai utilisé scrollHeight pour récupérer la hauteur et j'ai ajouté de la marge pour un meilleur affichage.
    } else {
      setTimeout(() => { // Ajout du Timeout pour laisser la transition se faire et améliorer la fluidité.
        contentRef.current.style.maxHeight = "0";
      }, 500);
    }
  };

    // Const pour ajuster automatiquement la hauteur à l'ouverture & fermeture.
  useEffect(() => {
    // Soit on définit, soit on réinitialise la hauteur maximale lorsque isOpen change.
    contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight + 30}px` : "0";
  }, [isOpen]);

  return (
    <div className={`collapse ${isOpen ? "is-open" : ""}`} style={borderStyle}>
      <div className="collapse_header" onClick={toggleCollapse}>
        <span className="collapse_title" style={titleStyle}>{title}</span>
        <img className={isOpen ? "arrow arrow_down" : "arrow arrow_up"} src={Arrow} alt="Arrow icon" />
      </div>
      {/* Ajout de la ref 'contentRef' */}
      <div ref={contentRef} className={`collapse_content ${isOpen ? "expanded" : ""}`}>
        {content}
      </div>
    </div>
  );
}

export default Collapse;
