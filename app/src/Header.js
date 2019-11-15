import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="App">
      <Link to="/register">Register</Link>
      <h1>Just Kidding</h1>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Header;
