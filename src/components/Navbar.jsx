import React, { useContext, useState, useEffect } from "react";
import { NavContext } from "../Contexts/NavContext";
import "../css/NavBar.css";
import "../css/main.css";

const NavBar = () => {
    const [checked, setChecked] = useState(false);
    const { ind, setTheme } = useContext(NavContext);
    const handleSwitch = () => {
        setTheme(`${!checked ? "light" : "dark"}`);
        localStorage.setItem("theme", !checked ? "light" : "dark");
    };

    useEffect(() => {
        localStorage.getItem("theme") === "light" && setChecked(true);
    }, [setChecked]);

    return (
        <header>
            <nav>
                <ul>
                    <a href="#Home">
                        <li className={ind === 0 ? "current" : ""}>Home</li>
                    </a>
                    <a href="#Work">
                        <li className={ind === 1 ? "current" : ""}>Work</li>
                    </a>
                    <a href="#Contact">
                        <li className={ind === 2 ? "current" : ""}>Contact</li>
                    </a>
                    <a href="#Interests">
                        <li className={ind === 3 ? "current" : ""}>
                            Interests
                        </li>
                    </a>
                </ul>
                <span
                    className={`toggle-switch${checked ? " checked" : ""}`}
                    onClick={() => {
                        setChecked(!checked);
                        handleSwitch();
                    }}
                ></span>
            </nav>
        </header>
    );
};

export default NavBar;
