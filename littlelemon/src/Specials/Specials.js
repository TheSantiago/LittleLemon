import React from "react";
import card1 from "../img/card1.jpg"; // Import your image
import card2 from "../img/card2.JPG"; // Import your image
import card3 from "../img/card3.jpg"; // Import your image

import "./Specials.css";

const Specials = () => {
  return (
    <section className="Specials">
      <article class="specialsHead">
        <h1>Specials</h1>
        <button className="actionButton">Online Menu</button>
      </article>
      <article class="specialsCards">
        <div class="specialCard">
          <div class="cardImgContainer">
            <img src={card1} alt="" class="cardImg" />
          </div>
          <div class="cardTextContainer">
            <div class="cardTitlePrice">
              <h2>Greek Salad</h2>
              <h3>$12.99</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              optio reiciendis molestias quasi unde inventore earum, dicta sit,
              corrupti, sunt illo.
            </p>
            <div class="specialAction">
              <p>Order a Delivery</p>
              <span>➜</span>
            </div>
          </div>
        </div>
        <div class="specialCard">
          <div class="cardImgContainer">
            <img src={card2} alt="" class="cardImg" />
          </div>
          <div class="cardTextContainer">
            <div class="cardTitlePrice">
              <h2>Bruschetta</h2>
              <h3>$8.99</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              optio reiciendis molestias quasi unde inventore earum, dicta sit,
              corrupti, sunt illo.
            </p>
            <div class="specialAction">
              <p>Order a Delivery</p>
              <span>➜</span>
            </div>
          </div>
        </div>
        <div class="specialCard">
          <div class="cardImgContainer">
            <img src={card3} alt="" class="cardImg" />
          </div>
          <div class="cardTextContainer">
            <div class="cardTitlePrice">
              <h2>Lemon Cake</h2>
              <h3>$9.99</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              optio reiciendis molestias quasi unde inventore earum, dicta sit,
              corrupti, sunt illo.
            </p>
            <div class="specialAction">
              <p>Order a Delivery</p>
              <span>➜</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Specials;
