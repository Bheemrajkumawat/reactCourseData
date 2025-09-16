import React, { useState } from "react";
import "../DynamicAccordion in react19/Accordion.css";
function Accordiondata({ curElem, onToggle, isActive }) {
  const { question, answer } = curElem;

  return (
    <>
      <div className="accordion-item">
        <div className="accordion-header flex justify-between">
          {question}
          <button onClick={onToggle} className={isActive ? "active-btn" : ""}>
            {isActive ? (
              <img src="public/close.png " alt="img" className="w-10" />
            ) : (
              <img src="down-arrow.png" alt="img" className="w-10" />
            )}
          </button>
        </div>
        <div className="accordion-content">{isActive && answer}</div>
      </div>
    </>
  );
}

export default Accordiondata;
