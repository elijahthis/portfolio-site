import React, { useEffect, useContext } from "react";
import { NavContext } from "../Contexts/NavContext";
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
              <img src={codingImage} />
            </div>
            <div className="interest">solve coding challenges.</div>
          </div>
          <div>
            <div className="interest">read novels.</div>
            <div className="img-wrap">
              <img src={HP3} />
            </div>
          </div>
          <div>
            <div className="img-wrap">
              <img src={cKay} />
            </div>
            <div className="interest">listen to music.</div>
          </div>
          <div>
            <div className="interest">NOT dance.</div>
            <div className="img-wrap">
              <img src={nDance} style={{ transform: "translateY(-25%)" }} />
            </div>
          </div>
          <div>
            <div className="img-wrap">
              <img src={MV5} />
            </div>
            <div className="interest">
              watch movies and TV series (mainly horror).
            </div>
          </div>
          <div className="sleep">
            <div className="interest">sleep.</div>
            <div className="img-wrap">
              <img src={zzz} style={{ transform: "translateY(-50%)" }} />
            </div>
          </div>
        </div>
        <div className="interests-flex">
          <div className="coding">
            <div className="img-wrap">
              <img src={codingImage} />
            </div>
            <div className="interest">solve coding challenges.</div>
          </div>
          <div>
            <div className="interest">read novels.</div>
            <div className="img-wrap">
              <img src={HP3} style={{ maxWidth: "100%", maxHeight: "500%" }} />
            </div>
          </div>
          <div>
            <div className="img-wrap">
              <img src={cKay} />
            </div>
            <div className="interest">listen to music.</div>
          </div>
          <div>
            <div className="interest">NOT dance.</div>
            <div className="img-wrap">
              <img src={nDance} />
            </div>
          </div>
          <div>
            <div className="img-wrap">
              <img src={MV5} style={{ maxWidth: "100%", maxHeight: "500%" }} />
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
              <img src={zzz} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Interests;
