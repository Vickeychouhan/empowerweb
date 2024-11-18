import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import LOGO from "./images/webtechlogo2.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        {/* Brand Logo */}
        <div className="brand">
          <img src={LOGO} alt="Aesthetic Design" className="design-image1" />
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/whatwedo1">Work</Link></li>
          
          {/* Solutions Dropdown */}
          <li className="dropdown">
            <Link to="/services" onClick={toggleDropdown}>Solutions</Link>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/services/web-development" onClick={closeMenu}>Web Development</Link></li>
                <li><Link to="/services/graphic-design" onClick={closeMenu}>Graphic Design</Link></li>
                <li><Link to="/services/content-writing" onClick={closeMenu}>Content Writing</Link></li>
                <li><Link to="/services/web-designing" onClick={closeMenu}>Web Designing</Link></li>
                <li><Link to="/services/seo-optimization" onClick={closeMenu}>SEO Optimization</Link></li>
                <li><Link to="/services/branding" onClick={closeMenu}>Branding</Link></li>
              </ul>
            )}
          </li>
          
          <li><Link to="/success-stories">Success Stories</Link></li>
        </ul>

        <div className="menu-container">
          {/* Contact Us Button */}
          <div className="contact-us-btn">
            <button onClick={() => (window.location.href = "/contactform")}>
              Contact Us
            </button>
          </div>

          {/* Hamburger Menu Icon */}
          <div className="menu-icon" onClick={toggleMenu}>
            <i className="fas fa-bars"></i> {/* FontAwesome icon */}
          </div>

          {menuOpen && (
            <div className="overlay" onClick={closeMenu}></div>
          )}

          {/* Mobile Slider Menu */}
          <div className={`slider-menu ${menuOpen ? "open" : ""}`}>
            <button className="close-icon" onClick={closeMenu}>✕</button>
            <ul>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
              <li><Link to="/works" onClick={closeMenu}>Our Work</Link></li>
              <li><Link to="/resources" onClick={closeMenu}>Get Started</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
