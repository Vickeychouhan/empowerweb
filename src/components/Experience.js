import React from 'react';
import './Experience.css'; // Assuming you will have CSS in a separate file

const Experience = () => {
  return (
    <div className="stats-section">
      <div className="stat">
        <h2>05</h2>
        <span>Years</span>
        <span>Designing & Developing</span>
      </div>
      <div className="stat">
        <h2>90%</h2>
        <span>Customers</span>
        <span>Recommends Rompweb</span>
      </div>
      <div className="stat">
        <h2>100+</h2>
        <span>Projects</span>
        <span>Successfully Completed</span>
      </div>
      <div className="stat">
        <h2>30</h2>
        <span>Mins</span>
        <span>Average Answer Time</span>
      </div>
    </div>
  );
};

export default Experience;
