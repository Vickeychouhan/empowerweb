import React from "react";
import "./SuccessStories.css";
import SHOPIFY from "./images/shopify01.jfif";
import ECOMMERCE from "./images/ecommerce1.png";
import ENVIRONMENT from "./images/freeenvironment.jpg";

const SuccessStories = () => {
  return (
    <section className="success-stories">
      <div className="button-like-1">
      <h2>Success Stories</h2>
      </div>
      <div className="story-container">
        <div className="story-card">
          <img src={SHOPIFY} alt="SynergySphere Co-working Space Website" />
          <div className="story-header">
            <p className="shopify-design">SHOPIFY WEBSITE</p>
            <h3 className="shopify-design-1">SynergySphere: Coworking Space Custom Build Website</h3>
          </div>
          <div className="story-description">
            <p className="story-description-1">
              Explore the dynamic and visually stunning website designed by our
              agency for Synergy Sphere, a cutting-edge co-working space.
            </p>
            {/* <p>
              Built with precision using Bootstrap, the website seamlessly
              combines functionality with aesthetics.
            </p> */}
          </div>
        </div>

        <div className="story-card">
          <img src={ECOMMERCE} alt="TechGadget Ecommerce Website" />
          <div className="story-header">
            <p className="ecommerce-design">ECOMMERCE SOLUTION</p>
            <h3 className="ecommerce-design-1">TechGadget: Custom Ecommerce Platform Development</h3>
          </div>
          <div className="story-description">
            <p>
              Discover how we developed a robust ecommerce platform for
              TechGadget, revolutionizing their online sales approach.
            </p>
            {/* <p>
              Our team used the latest technology to ensure a seamless shopping
              experience.
            </p> */}
          </div>
        </div>

        <div className="story-card">
          <img src={ENVIRONMENT} alt="GreenEarth Website" />
          <div className="story-header">
            <p className="non-profit-design">NON-PROFIT WEBSITE</p>
            <h3 className="non-profit-design-1">GreenEarth: Environmental Awareness Website Development</h3>
          </div>
          <div className="story-description">
            <p>
              Learn how we created a user-friendly website for GreenEarth, aimed
              at raising environmental awareness.
            </p>
            {/* <p>
              This website serves as a hub for information, events, and
              donations.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
