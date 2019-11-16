import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/register" className="link">
        Register
      </Link>
      <h1 className="title">Just Kidding</h1>
      <Link to="/login" className="link">
        Login
      </Link>
    </header>
  );
}

export default Header;
