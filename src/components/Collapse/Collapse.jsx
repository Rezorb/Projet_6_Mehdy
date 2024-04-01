import React, { useState } from "react";
import "./Collapse.css";
import Arrow from "../../assets/Arrow.png";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCollapse}>
        <span className="collapse-title">{title}</span>
        <img
          className={isOpen ? "arrow arrow_down" : "arrow arrow_up"}
          src={Arrow}
          alt="Arrow icon"
        />
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;