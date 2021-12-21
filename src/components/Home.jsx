import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavContext } from "../Contexts/NavContext";
import "../css/Home.css";
import "../css/main.css";

const Home = () => {
  const { setInd } = useContext(NavContext);
  useEffect(() => {
    setInd(0);
  });

  return (
    <>
      <main>
        <div className="big-div">
          <h3 className="my-1">My name is...</h3>
          <h1 className="my-2">Elijah</h1>
          <p>I'm a Full-Stack Web Developer</p>
          <Link to="/contact" id="magic">
            <p className="button">
              <span>Let's make magic!</span>
              <div id="arr">
                <svg
                  x="0px"
                  y="0px"
                  viewBox="0 0 1000 1000"
                  enableBackground="new 0 0 1000 1000"
                  xmlSpace="preserve"
                >
                  <g>
                    <g transform="matrix(1 0 0 -1 0 1008)">
                      <path d="M756.2,741.8L990,508L756.2,274.2l-27,27L918.1,490H10v36h908.1L729.3,714.8L756.2,741.8z" />
                    </g>
                  </g>
                </svg>
              </div>
            </p>
          </Link>
        </div>
        <div className="about-div">
          <div>
            <p className="about-text">
              <span>Based in Lagos, Nigeria</span>
            </p>
          </div>
          <div>
            <p className="about-text">
              <span>Excellent Collaborator.</span>
            </p>
          </div>
          <div>
            <p className="about-text">
              <span>
                Passionate about creating the best web experience possible.
                Works with various web frameworks and technologies to achieve
                this.
              </span>
            </p>
          </div>

          <div>
            <p className="about-text">
              <span>
                Works on freelance and open-source projects in his spare time.
              </span>
            </p>
          </div>
        </div>
        <Link to="/work">
          <div className="nav-arrow">
            <svg width="6" height="8" style={{ transform: "scale(3)" }}>
              <path fill="none" d="M1 0l4 4-4 4" />
            </svg>

            <div className="dot"></div>
          </div>
        </Link>
      </main>
    </>
  );
};

export default Home;
