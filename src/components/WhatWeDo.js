import React from "react";
import "./WhatWeDo.css";
import yourImage from "./images/what-we-do-image.webp";

const WhatWeDo = () => {
  return (
    <section className="what-we-do">
      <div className="button-like">
        <h2>What We Do</h2>
      </div>
      <div className="content-container1">
        <div className="text-section">
          <h2>We provide innovative solutions that enhance your business performance.</h2>
          <h2>Our dedicated team works tirelessly to deliver results that exceed expectations.</h2>
        </div>
        <div className="design-section">
          <img src={yourImage} alt="Aesthetic Design" className="design-image" />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
