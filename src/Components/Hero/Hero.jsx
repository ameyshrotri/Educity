import React from "react";
import "./Hero.css";
import arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure better education for a better World</h1>
        <p>
          Are you ready to elevate your academic experience? Look no further!
          Educity is designed with you in mind, providing everything a student
          needs to succeed and thrive.
        </p>
        <button className="btn">
          Explore more <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
