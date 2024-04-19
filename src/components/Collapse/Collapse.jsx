import React, { useState } from "react";
import "./Collapse.scss";
import Arrow from "../../assets/Arrow.png";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse_header" onClick={toggleCollapse}>
        <span className="collapse_title">{title}</span>
        <img
          className={isOpen ? "arrow arrow_down" : "arrow arrow_up"}
          src={Arrow}
          alt="Arrow icon"
        />
      </div>
      {isOpen && <div className="collapse_content">{content}</div>}
    </div>
  );
}

export default Collapse;