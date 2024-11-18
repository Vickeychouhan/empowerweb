import React, { useState } from "react";
import "./what_we_do1.css";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import SHOPIFY from "./images/shopify01.jfif";
import ECOMMERCE from "./images/ecommerce1.png";
import ENVIRONMENT from "./images/freeenvironment.jpg";
import ContactHome from "./Contact-home";
import Footer from "./Footer";

const testimonials = [
  {
    text: "Collaborating with the Rompweb team was an incredible experience. They transformed my outdated logo and website into something truly remarkable. Their work was exceptional from start to finish.",
    author: "Junaid Ismail",
    role: "JunaidIsmail, Studio",
    image: "https://via.placeholder.com/50",
  },
  {
    text: "The design work by Rompweb was top-notch, and they delivered everything on time. My business has seen a significant increase in traffic since launching the new site!",
    author: "Alex Johnson",
    role: "Owner, Tech Innovations",
    image: "https://via.placeholder.com/50",
  },
  {
    text: "Rompweb exceeded my expectations! Their attention to detail and creativity brought my vision to life. I couldn't be happier with the results.",
    author: "Sarah Lee",
    role: "Marketing Director, GreenEarth",
    image: "https://via.placeholder.com/50",
  },
];

const Whatwedo1 = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <section className="hero">
        <h1>Searching for advice from an expert?</h1>
        <p>Book a consultation with our team.</p>
        <span>
          <button className="consultation-btn">Book a Consultation</button>
        </span>
        <span>
          <button className="consultation-btn2">Get Help</button>
        </span>
      </section>

      <section className="success-stories">
        <div className="button-like-1">
          <h2>Success Stories</h2>
        </div>
        <div className="story-container">
          <div className="story-card">
            <img src={SHOPIFY} alt="SynergySphere Co-working Space Website" />
            <div className="story-header">
              <p className="shopify-design">SHOPIFY WEBSITE</p>
              <h3 className="shopify-design-1">
                SynergySphere: Coworking Space Custom Build Website
              </h3>
            </div>
            <div className="story-description">
              <p className="story-description-1">
                Explore the dynamic and visually stunning website designed by
                our agency for Synergy Sphere, a cutting-edge co-working space.
              </p>
            </div>
          </div>

          <div className="story-card">
            <img src={ECOMMERCE} alt="TechGadget Ecommerce Website" />
            <div className="story-header">
              <p className="ecommerce-design">ECOMMERCE SOLUTION</p>
              <h3 className="ecommerce-design-1">
                TechGadget: Custom Ecommerce Platform Development
              </h3>
            </div>
            <div className="story-description">
              <p>
                Discover how we developed a robust ecommerce platform for
                TechGadget, revolutionizing their online sales approach.
              </p>
            </div>
          </div>

          <div className="story-card">
            <img src={ENVIRONMENT} alt="GreenEarth Website" />
            <div className="story-header">
              <p className="non-profit-design">NON-PROFIT WEBSITE</p>
              <h3 className="non-profit-design-1">
                GreenEarth: Environmental Awareness Website Development
              </h3>
            </div>
            <div className="story-description">
              <p>
                Learn how we created a user-friendly website for GreenEarth,
                aimed at raising environmental awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-container">
        <div className="testimonial-content">
          <div className="profile-pic">
            <img
              src={testimonials[currentTestimonialIndex].image}
              alt="Profile"
            />
          </div>
          <p className="testimonial-text">
            {testimonials[currentTestimonialIndex].text}
          </p>
          <p className="author">
            {testimonials[currentTestimonialIndex].author}
            <br />
            <span>{testimonials[currentTestimonialIndex].role}</span>
          </p>
        </div>
        <div className="reviews">
          <p>Reviewed on</p>

          <div className="review-details">
            <FaFacebook
              size="2em"
              style={{ color: "#1877F2", marginRight: "10px" }}
            />
            <p>2 Reviews</p>
            <FaGoogle
              size="2em"
              style={{
                color: "#DB4437",
                marginLeft: "20px",
                marginRight: "10px",
              }}
            />
            <p>5 Customer Reviews</p>

            {/* Wrap buttons in a container if needed */}
            <div className="button-container">
              <button className="arrow-button" onClick={prevTestimonial}>
                &lt;
              </button>
              <button className="arrow-button" onClick={nextTestimonial}>
                &gt;
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactHome />
      <Footer />
    </div>
  );
};

export default Whatwedo1;
