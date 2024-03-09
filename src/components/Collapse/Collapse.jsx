import React, { useState } from "react";
import './Collapse.css';

function Collapse() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggleCollapse}>
        <span className="collapse-title">Description</span>
        <span className="collapse-icon">{isOpen ? '<' : '>'}</span>
      </div>
      {isOpen && (
        <div className="collapse-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum quaerat ipsa praesentium iusto voluptatem laboriosam, sssss amet dicta iure necessitatibus rem, quas numquam officia omnis quam ducimus nulla. Fuga!
        </div>
      )}
    </div>
  );
}

export default Collapse;
