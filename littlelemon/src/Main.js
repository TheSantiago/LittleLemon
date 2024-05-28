import React from "react";
import Hero from "./Hero/Hero";
import Specials from "./Specials/Specials";
import Testimonials from "./Testimonials/Testimonials";
import About from "./About/About";

const Main = () => {
  return (
    <div>
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </div>
  );
};

export default Main;
