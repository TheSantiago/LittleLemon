import React from "react";

import Nav from "./Nav/Nav";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Nav />
    </header>
  );
};

export default Header;
