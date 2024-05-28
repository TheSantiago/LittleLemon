import React from "react";
import logo from "../img/logo.jpg"; // Import your image
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <img src={logo} className="logoImg" alt="Logo" />
      <ul
        style={{ display: "flex", listStyleType: "none", padding: 0 }}
        className="tabs"
      >
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
        <li>
          <a href="/order">Order</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
