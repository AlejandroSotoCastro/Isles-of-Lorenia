// src/components/Backgrounds.js
import React from "react";

const Backgrounds = ({ backgrounds }) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {backgrounds.map((background, index) => (
        <div className="col" key={index}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{background.name}</h5>
              <p className="card-text">{background.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Backgrounds;
