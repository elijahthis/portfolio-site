import React, { useEffect, useContext } from "react";
import { NavContext } from "../Contexts/NavContext";
import "../css/Interests.css";
import HP3 from "../images/HP-prisoner-of-azkaban.jpg";
import HP4 from "../images/HP-goblet-of-fire.jpg";
import HP6 from "../images/HP-half-blood-prince.jpg";
import HP7 from "../images/HP-deathly-hallows.jpg";
import WK1 from "../images/wk-1.png";
import Percy2 from "../images/percy2.jpg";
import Percy3 from "../images/percy3.webp";
import Percy4 from "../images/percy4.png";
import Percy5 from "../images/percy5.png";
import MV1 from "../images/dark-knight.png";
import MV2 from "../images/iron-man.png";
import MV3 from "../images/the-shining.png";
import MV4 from "../images/got.png";
import MV5 from "../images/big-bang-theory.png";
import MV6 from "../images/originals.png";

const Interests = () => {
  const { setInd } = useContext(NavContext);
  useEffect(() => {
    setInd(3);
  });

  const bookList = [Percy4, HP3, HP4, Percy2, Percy3, HP6, Percy5, HP7, WK1];
  const movieList = [MV1, MV2, MV3, MV4, MV5, MV6, MV1];

  return (
    <>
      <section className="interests-section">
        <h2>My Interests</h2>
        <div className="interests-grid">
          {/* <div>I like to solve coding challenges.</div> */}
          <div className="coding"></div>
          <div>
            read novels.
            <div className="phantom-books">
              {bookList.map((book) => (
                <img src={book} alt="books" />
              ))}
            </div>
          </div>
          <div>listen to music.</div>
          {/* <div>NOT dance.</div> */}
          <div className="n-dance"></div>
          <div>
            watch movies and TV series (mainly horror).
            <div className="phantom-movies">
              {movieList.map((movie) => (
                <img src={movie} alt="movies" />
              ))}
            </div>
          </div>
          <div className="sleep">sleep.</div>
        </div>
      </section>
    </>
  );
};

export default Interests;
