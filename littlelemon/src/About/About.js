import React from "react";
import about1 from "../img/r1.JPG"; // Import your image
import about2 from "../img/r2.JPG"; // Import your image

import "./About.css";

const About = () => {
  return (
    <section className="about">
      <article className="aboutTextContainer">
        <div className="aboutText">
          <h1>Welcome to Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
            quam fuga odit repellat necessitatibus deleniti nesciunt hic, ipsam
            quidem numquam sapiente praesentium! Fugit voluptates consequuntur
            delectus adipisci sed ab nihil. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Id illo ipsum ad cum, amet repudiandae
            perferendis voluptas porro expedita voluptates quod eum pariatur
            repellat nesciunt cumque deserunt? Impedit, asperiores similique!
            <br></br>
            <br></br>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus eius neque libero sunt vel nihil error accusantium, eum
            non! Deserunt dolor autem sed? Alias unde repellat dolorum explicabo
            ipsa nihil?
          </p>
        </div>
      </article>
      <article class="aboutImages">
        <div className="aboutImg" id="about1">
          <img src={about1} alt="Mediterranean Food" />
        </div>
        <div className="aboutImg" id="about2">
          <img src={about2} alt="Mediterranean Food" />
        </div>
      </article>
    </section>
  );
};

export default About;
