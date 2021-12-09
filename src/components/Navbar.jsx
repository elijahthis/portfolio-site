import React, { useContext, useState } from "react";
import { NavContext } from "../Contexts/NavContext";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import "../css/main.css";

const NavBar = () => {
  const [checked, setChecked] = useState(false);
  const { ind, setTheme } = useContext(NavContext);
  const handleSwitch = () => {
    setTheme(`${!checked ? "dark" : "light"}`);
  };
  return (
    <header>
      <nav>
        <ul>
          <Link to="/">
            <li className={ind === 0 ? "current" : ""}>Home</li>
          </Link>
          <Link to="/work">
            <li className={ind === 1 ? "current" : ""}>Work</li>
          </Link>
          <Link to="/contact">
            <li className={ind === 2 ? "current" : ""}>Contact</li>
          </Link>
          <Link to="/interests">
            <li className={ind === 3 ? "current" : ""}>Interests</li>
          </Link>
        </ul>
        <span
          className={`toggle-switch${checked ? " checked" : ""}`}
          onClick={() => {
            setChecked(!checked);
            handleSwitch();
          }}
        >
          {/* <input type="checkbox" id="toggler" /> */}
        </span>
      </nav>
    </header>
  );
};

export default NavBar;
