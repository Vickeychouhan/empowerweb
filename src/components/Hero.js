import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Welcome to EmpowerWeb</h1>
      <p>Helping your business grow with modern technologies</p>
      <span><button className="consultation-btn">Book a Consultation</button></span>
      <span><button className="consultation-btn2">Get Help</button></span>
    </section>
  );
};

export default Hero;
