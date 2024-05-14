import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul style={{ display: "flex", listStyleType: "none", padding: 0 }}>
        <li style={{ marginRight: "20px" }}>
          <a href="/">Home</a>
        </li>
        <li style={{ marginRight: "20px" }}>
          <a href="/about">About</a>
        </li>
        <li style={{ marginRight: "20px" }}>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/reservations">Reservations</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
