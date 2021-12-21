import React, { useEffect, useContext } from "react";
import { NavContext } from "../Contexts/NavContext";
import { Link } from "react-router-dom";
import "../css/Interests.css";
import HP3 from "../images/HP-prisoner-of-azkaban.jpg";
import MV5 from "../images/big-bang-theory.png";
import cKay from "../images/ckay.jpg";
import nDance from "../images/not-dance.png";
import zzz from "../images/zzz.gif";
import codingImage from "../images/code.jpg";

const Interests = () => {
  const { setInd } = useContext(NavContext);
  useEffect(() => {
    setInd(3);
  });

  return (
    <>
      <section className="interests-section">
        <h2>I like to...</h2>
        <div className="interests-grid">
          <div className="coding">
            <div className="img-wrap">
              <img src={codingImage} alt="coding" />
            </div>
            <div className="interest">solve coding challenges.</div>
          </div>
          <div>
            <div className="interest">read novels.</div>
            <div className="img-wrap">
              <img src={HP3} alt="reading" />
            </div>
          </div>
          <div>
            <div className="img-wrap">
              <img src={cKay} alt="beautiful music" />
            </div>
            <div className="interest">listen to music.</div>
          </div>
          <div>
            <div className="interest">NOT dance.</div>
            <div className="img-wrap">
              <img src={nDance} alt="dance" />
            </div>
          </div>
          <div>
            <div className="img-wrap">
              <img src={MV5} alt="movies" />
            </div>
            <div className="interest">
              watch movies and TV series (mainly horror).
            </div>
          </div>
          <div className="sleep">
            <div className="interest">sleep.</div>
            <div className="img-wrap">
              <img src={zzz} alt="sleeping" />
            </div>
          </div>
        </div>
        <div className="interests-flex">
          <div className="coding">
            <div className="img-wrap">
              <img src={codingImage} alt="coding" />
            </div>
            <div className="interest">solve coding challenges.</div>
          </div>
          <div>
            <div className="interest">read novels.</div>
            <div className="img-wrap">
              <img
                src={HP3}
                style={{ maxWidth: "100%", maxHeight: "500%" }}
                alt="reading"
              />
            </div>
          </div>
          <div>
            <div className="img-wrap">
              <img src={cKay} alt="beautiful music" />
            </div>
            <div className="interest">listen to music.</div>
          </div>
          <div>
            <div className="interest">NOT dance.</div>
            <div className="img-wrap">
              <img src={nDance} alt="dance" />
            </div>
          </div>
          <div>
            <div className="img-wrap">
              <img
                src={MV5}
                style={{ maxWidth: "100%", maxHeight: "500%" }}
                alt="movies"
              />
            </div>
            <div className="interest">
              watch movies and TV series (mainly horror).
            </div>
          </div>
          <div className="sleep">
            <div className="interest">
              <span style={{ visibility: "hidden" }}>Tight</span>
              <span>sleep.</span>
            </div>
            <div className="img-wrap">
              <img src={zzz} alt="sleeping" />
            </div>
          </div>
        </div>
        <Link to="/">
          <div className="nav-arrow">
            <svg width="6" height="8" style={{ transform: "scale(3)" }}>
              <path fill="none" d="M1 0l4 4-4 4" />
            </svg>
            <div className="dot"></div>
          </div>
        </Link>
      </section>
    </>
  );
};

export default Interests;
