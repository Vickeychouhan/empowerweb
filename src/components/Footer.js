import React from 'react';
import './Footer.css'; // Make sure to create a CSS file for styling
import LOGO from "./images/webtechlogo2.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Solutions Section */}
        <div className="footer-section">
          <h3>Solutions</h3>
          <ul>
            <li>Web Design</li>
            <li>App Design</li>
            <li>Branding</li>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Digital Marketing</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/works">Our Works</a></li>
            <li>About Empower Webtech</li>
            <li>Our Blogs</li>
            <li>Contact Us</li>
            <li>Book a consultation</li>
            <li>Get a quote</li>
          </ul>
        </div>

        {/* Book Consultation Button */}
        <div className="footer-section consultation">
          <img src={LOGO} alt="Consultation Logo" className="consultation-logo" />
          <button className="consultation-button">Book a consultation</button>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="address">
          <p>5 Brayford Square, London, E1 0SG</p>
          <p>T: +44 20 8144 9888</p>
          <p>E: mail@empowerweb.com</p>
        </div>

        <div className="social-icons">
          <a href="/telegram">Telegram</a>
          <a href="/whatsapp">WhatsApp</a>
          <a href="/instagram">Instagram</a>
        </div>

        <div className="policies">
          <p>© 2024 Empower Webtech LTD</p>
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
