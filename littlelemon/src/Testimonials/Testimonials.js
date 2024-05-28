import React from "react";
import a1 from "../img/a1.jpg"; // Import your image
import a2 from "../img/a2.jpg"; // Import your image
import a3 from "../img/a3.jpg"; // Import your image
import a4 from "../img/a4.jpg"; // Import your image
import ratings from "../img/stars.png"; // Import your image

import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="Testimonials">
      <article class="testimonialsHead">
        <h1>Testimonials</h1>
      </article>
      <article class="testimonialsCards">
        <div class="testimonialCard">
          <div class="ratings">
            <img src={ratings} alt="Ratings" />
          </div>
          <div class="imgCardContainer">
            <img src={a1} alt="Avatar" />
          </div>
          <h2>Diego M.</h2>
          <p>"Great Website"</p>
        </div>
        <div class="testimonialCard">
          <div class="ratings">
            <img src={ratings} alt="Ratings" />
          </div>
          <div class="imgCardContainer">
            <img src={a2} alt="Avatar" />
          </div>
          <h2>Sophie B.</h2>
          <p>"Love the ambiance!"</p>
        </div>
        <div class="testimonialCard">
          <div class="ratings">
            <img src={ratings} alt="Ratings" />
          </div>
          <div class="imgCardContainer">
            <img src={a3} alt="Avatar" />
          </div>
          <h2>Joseph T.</h2>
          <p>"The food is amazing"</p>
        </div>
        <div class="testimonialCard">
          <div class="ratings">
            <img src={ratings} alt="Ratings" />
          </div>
          <div class="imgCardContainer">
            <img src={a4} alt="Avatar" />
          </div>
          <h2>Scott W.</h2>
          <p>"Absolutely worth it!"</p>
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
