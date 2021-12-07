import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import "../css/main.css";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/work">
            <li>Work</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/interests">
            <li>Interests</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
