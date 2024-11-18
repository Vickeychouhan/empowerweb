import React from 'react';
import './Solutions.css';

const Solutions = () => {
  return (
    <section id="services">
      <div className="container">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="service-item">
            <i className="fas fa-code"></i>
            <h3>Web Development</h3>
            <p>We create responsive and visually appealing websites that elevate your brand.</p>
          </div>
          <div className="service-item">
            <i className="fas fa-paint-brush"></i>
            <h3>Graphic Design</h3>
            <p>Our designs are creative, modern, and tailored to make your brand stand out.</p>
          </div>
          <div className="service-item">
            <i className="fas fa-pen-nib"></i> {/* Updated icon */}
            <h3>Content Writing</h3>
            <p>High-quality content to engage and inform your target audience.</p>
          </div>
        </div>
        <div className="grid">
          <div className="service-item">
            <i className="fas fa-search"></i>
            <h3>SEO Optimization</h3>
            <p>Boost your website’s visibility with our expert SEO services.</p>
          </div>
          <div className="service-item">
            <i className="fas fa-laptop-code"></i> {/* Updated icon */}
            <h3>Web Designing</h3>
            <p>Crafting beautiful and user-friendly designs to enhance user experience.</p>
          </div>
          <div className="service-item">
            <i className="fas fa-bullhorn"></i> {/* Updated icon */}
            <h3>Branding</h3>
            <p>Building strong brand identities that resonate with your audience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
