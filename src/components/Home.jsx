import React from "react";
import "../css/Home.css";
// import "../css/main.css";

const Home = () => {
  return (
    <main>
      <div className="big-div">
        <h3 className="my-1">My name is...</h3>
        <h1 className="my-2">Elijah</h1>
        <p>I'm a Full-Stack Web Developer</p>
        <p className="button">Let's make magic!</p>
      </div>
      <div className="about-div">
        <div>
          <p className="about-text">Based in Lagos, Nigeria</p>
        </div><div>
          <p className="about-text">Excellent Collaborator.</p>
        </div>
        <div>
          <p className="about-text">
            Passionate about creating the best web experience possible. Works
            with various web frameworks and technologies to achieve this.
          </p>
        </div>
        
        <div>
          <p className="about-text">
            Works on freelance and open-source projects in his spare time.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
