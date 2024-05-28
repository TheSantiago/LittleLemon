import React from "react";
import "./Footer.css";
import logo from "../img/logo.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="footerImg">
        <img src={logo} alt="Logo" />
      </div>
      <div className="footerSection">
        <h2>Navigation</h2>
        <div className="footerList">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Menu</a>
          <a href="/">Reservations</a>
          <a href="/">Order</a>
          <a href="/">Login</a>
        </div>
      </div>
      <div className="footerSection">
        <h2>Social Media</h2>
        <div className="footerList">
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Tik Tok</a>
          <a href="/">X</a>
        </div>
      </div>
      <div className="footerSection">
        <h2>Contact</h2>
        <div className="footerList">
          <p>&copy; 2024 Little Lemon Restaurant</p>
          <p>123 Main Street, City, State, Zip</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>
      </div>
      {/* <p>&copy; 2024 Little Lemon Restaurant</p>
      <p>123 Main Street, City, State, Zip</p>
      <p>Phone: 123-456-7890 | Email: info@littlelemon.com</p> */}
    </footer>
  );
};

export default Footer;
