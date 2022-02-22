import { Link } from "react-router-dom";
import "../css/404.css";

const Error404 = () => {
  return (
    <section className="error-section">
      <div>
        <p>Lost?</p>
        <p>No worries! Elijah's here to help.</p>
        <Link to="/">
          <span className="btn">
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
            <div>Let's go Home.</div>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Error404;
