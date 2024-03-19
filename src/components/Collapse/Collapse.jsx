import React, { useState } from "react";
import "./Collapse.css";
import vector from "../../assets/Vector.png";

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
          className={isOpen ? "vector vector_down" : "vector vector_up"}
          src={vector}
          alt="Arrow"
        ></img>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
