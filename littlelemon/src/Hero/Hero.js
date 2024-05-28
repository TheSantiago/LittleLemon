import React from "react";
import heroImg from "../img/hero.jpg"; // Import your image
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="heroTextContainer">
        <div className="heroText">
          <h1>Welcome to Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum
            sequi ipsam et adipisci quod quam earum iure unde, quibusdam
            officiis esse ab similique soluta, voluptatum voluptates fugit nam
            atque?
          </p>
        </div>
        <button className="actionButton">Reserve a Table</button>
      </div>
      <div className="heroImg">
        <img src={heroImg} alt="Mediterranean Food" />
      </div>
    </section>
  );
};

export default Hero;
