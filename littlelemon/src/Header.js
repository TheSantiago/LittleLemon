import React from "react";
import logo from "../public/assets/img/logo.jpg"; // Import your image
import Nav from "./Nav";

const Header = () => {
  return (
    <header style={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo}
        alt="Logo"
        style={{ width: "100px", height: "auto", marginRight: "10px" }}
      />
      <h1>Little Lemon Restaurant</h1>
      <Nav />
    </header>
  );
};

export default Header;
