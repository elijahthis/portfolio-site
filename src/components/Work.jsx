import React, { useEffect, useContext, useState } from "react";
import { NavContext } from "../Contexts/NavContext";
import { Link } from "react-router-dom";
import "../css/Work.css";
// import "../css/main.css";
import felixPortfolioPreview from "../images/felix-portfolio.png";
import NERCPreview from "../images/nerc-dashboard.png";
import ankoraPreview from "../images/ankora-test.png";
import devfinderPreview from "../images/devfinder-preview.png";
import LiveGistsPreview from "../images/Live-Gists-preview.png";
import PlanetsFactSitePreview from "../images/Planets-Fact-Site-preview.png";
import SimplenoteClonePreview from "../images/Simplenote-clone-prevew.png";
import htmlLogo from "../images/html-logo.png";
import cssLogo from "../images/css-logo.png";
import javascriptLogo from "../images/javascript-logo.png";
import pythonLogo from "../images/python-logo.png";
import djangoLogo from "../images/django-logo.svg";
import postgresqlLogo from "../images/postgresql-logo.png";
import reactLogo from "../images/react-logo.png";
import sassLogo from "../images/sass-logo.png";
import gitLogo from "../images/git-logo.png";
import typescriptLogo from "../images/ts-logo.png";
import nextjsLogo from "../images/next-black.svg";

const Work = () => {
  const previousWork = [
    {
      title: "Live-Gists",
      description:
        "Live-Gists is an online realtime code collaboration,sharing and social media platform. It supports realtime pair coding with a role based system for editing and viewing. Share code snippets with the click of a button, like others gists, chat with other users and receive notifications on activities and messages through an always online push server, view feed and posts of other users you are following all in one platform.",
      previewImage: LiveGistsPreview,
      link: "https://live-gists.netlify.app/",
      repo: "https://github.com/Regedit-msc/writty_client",
      tools: ["React JS", "CSS"],
    },
    {
      title: "Felix Oyeleke Portfolio",
      description:
        "A portfolio website created for Felix Oyeleke, a hydrographic surveyor",
      previewImage: felixPortfolioPreview,
      link: "https://felixoyeleke.com/",
      repo: "https://github.com/elijahthis/felix-oyeleke-portfolio",
      tools: ["Next JS", "Sass"],
    },
    {
      title: "NERC Dashboard",
      description:
        "Dashboard to manage mytos and discos for the National Electricity Regulatory Commission (NERC). Passcode: 700000",
      previewImage: NERCPreview,
      link: "https://nerc-dashboard-mine.netlify.app/",
      repo: "https://github.com/elijahthis/nerc-dashboard-mine",
      tools: ["React JS", "Sass", "API"],
    },
    {
      title: "Ankora Scheduler",
      description:
        "A calendar dashboard implemented as a test for Ankora Health. It manages appointments and schedules of nurses and patients.",
      previewImage: ankoraPreview,
      link: "https://elijahthis-ankora-test.netlify.app",
      repo: "https://github.com/elijahthis/ankora-test",
      tools: ["React JS", "Sass"],
    },
    {
      title: "devfinder",
      description:
        "devfinder is a simple app that helps developers find each other using their GitHub usernames. You type in the username and it shows you basic information about the dev. This app uses the GitHub API. It was made with React JS and SASS. Enjoy...and don't forget to check out the light mode!",
      previewImage: devfinderPreview,
      link: "https://elijahthis-devfinder.netlify.app/",
      repo: "https://github.com/elijahthis/devfinder",
      tools: ["React JS", "CSS", "API"],
    },
    {
      title: "Planets Fact Site",
      description: "An 8-page fact site for all planets in our solar system.",
      previewImage: PlanetsFactSitePreview,
      link: "https://elijahthis-planet-fact-site.netlify.app/",
      repo: "https://github.com/elijahthis/planets-fact-site",
      tools: ["React JS", "Sass"],
    },
    {
      title: "Simplenote Clone",
      description: [
        "Simplenote is a website that allows you to pen down ideas as notes online and access them whenever you want. This is a clone of that website.",
        <br key={1} />,
        "UI credit: ",
        <a
          href="https://app.simplenote.com"
          target="_blank"
          rel="noreferrer"
          key={2}
        >
          https://app.simplenote.com
        </a>,
      ],
      previewImage: SimplenoteClonePreview,
      link: "https://elijahthis-simplenoteclone.netlify.app/",
      repo: "https://github.com/elijahthis/simplenote-clone",
      tools: ["React JS", "Sass"],
    },
  ];
  const skills = [
    ["JavaScript", javascriptLogo],
    ["TypeScript", typescriptLogo],
    ["React JS", reactLogo],
    ["Next JS", nextjsLogo],
    ["HTML", htmlLogo],
    ["CSS", cssLogo],
    ["Python", pythonLogo],
    ["Django", djangoLogo],
    ["Sass", sassLogo],
    ["PostgreSQL", postgresqlLogo],
    ["Version Control (Git)", gitLogo],
  ];

  const [sliderInd, setSliderInd] = useState(0);
  const { setInd } = useContext(NavContext);
  const handleSlide = (ev) => {
    if (ev.currentTarget.id === "arrow_right") {
      setSliderInd((sliderInd + 1) % previousWork.length);
    } else {
      setSliderInd((sliderInd - 1 + previousWork.length) % previousWork.length);
    }
  };

  const arrows = [
    <svg
      enableBackground="new 0 0 96 96"
      height="96px"
      id="arrow_left"
      version="1.1"
      viewBox="0 0 96 96"
      width="96px"
      xmlSpace="preserve"
      onClick={handleSlide}
    >
      <path d="M12,52h62.344L52.888,73.456c-1.562,1.562-1.562,4.095-0.001,5.656c1.562,1.562,4.096,1.562,5.658,0l28.283-28.284l0,0  c0.186-0.186,0.352-0.391,0.498-0.609c0.067-0.101,0.114-0.21,0.172-0.315c0.066-0.124,0.142-0.242,0.195-0.373  c0.057-0.135,0.089-0.275,0.129-0.415c0.033-0.111,0.076-0.217,0.099-0.331C87.973,48.525,88,48.263,88,48l0,0  c0-0.003-0.001-0.006-0.001-0.009c-0.001-0.259-0.027-0.519-0.078-0.774c-0.024-0.12-0.069-0.231-0.104-0.349  c-0.039-0.133-0.069-0.268-0.123-0.397c-0.058-0.139-0.136-0.265-0.208-0.396c-0.054-0.098-0.097-0.198-0.159-0.292  c-0.146-0.221-0.314-0.427-0.501-0.614L58.544,16.888c-1.562-1.562-4.095-1.562-5.657-0.001c-1.562,1.562-1.562,4.095,0,5.658  L74.343,44L12,44c-2.209,0-4,1.791-4,4C8,50.209,9.791,52,12,52z" />
    </svg>,
    <svg
      enableBackground="new 0 0 96 96"
      height="96px"
      id="arrow_right"
      version="1.1"
      viewBox="0 0 96 96"
      width="96px"
      xmlSpace="preserve"
      onClick={handleSlide}
    >
      <path d="M12,52h62.344L52.888,73.456c-1.562,1.562-1.562,4.095-0.001,5.656c1.562,1.562,4.096,1.562,5.658,0l28.283-28.284l0,0  c0.186-0.186,0.352-0.391,0.498-0.609c0.067-0.101,0.114-0.21,0.172-0.315c0.066-0.124,0.142-0.242,0.195-0.373  c0.057-0.135,0.089-0.275,0.129-0.415c0.033-0.111,0.076-0.217,0.099-0.331C87.973,48.525,88,48.263,88,48l0,0  c0-0.003-0.001-0.006-0.001-0.009c-0.001-0.259-0.027-0.519-0.078-0.774c-0.024-0.12-0.069-0.231-0.104-0.349  c-0.039-0.133-0.069-0.268-0.123-0.397c-0.058-0.139-0.136-0.265-0.208-0.396c-0.054-0.098-0.097-0.198-0.159-0.292  c-0.146-0.221-0.314-0.427-0.501-0.614L58.544,16.888c-1.562-1.562-4.095-1.562-5.657-0.001c-1.562,1.562-1.562,4.095,0,5.658  L74.343,44L12,44c-2.209,0-4,1.791-4,4C8,50.209,9.791,52,12,52z" />
    </svg>,
  ];

  useEffect(() => {
    const slide = setInterval(() => {
      setSliderInd((sliderInd) => (sliderInd + 1) % previousWork.length);
    }, 7000);
    setInd(1);
    return () => clearInterval(slide);
  });

  return (
    <>
      <div className="my-work">
        <h2>My work</h2>

        <div className="banner-wrapper">
          <div className="banner">
            <img
              src={previousWork[sliderInd].previewImage}
              className="front-image"
              alt="job preview"
            />
            <div className="left-shutter"></div>
            <div className="right-shutter"></div>
            <div className="info">
              <h3>{previousWork[sliderInd].title}</h3>
              <p>{previousWork[sliderInd].description}</p>
              <div className="tools">
                {previousWork[sliderInd].tools.map((tool, ind) => (
                  <p key={ind}>{tool}</p>
                ))}
              </div>
              <div className="buttons">
                <a
                  href={previousWork[sliderInd].link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="button view">View live</span>
                </a>
                <a
                  href={previousWork[sliderInd].repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="button view">View repo</span>
                </a>
              </div>
            </div>
          </div>
          <div className="slider-arrows">
            {arrows[0]}
            {arrows[1]}
          </div>
          <div className="slider-navigation">
            {previousWork.map((workitem, key) => (
              <span
                key={key}
                className={sliderInd === key ? "focus" : ""}
                onClick={() => setSliderInd(key)}
              ></span>
            ))}
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-main">
              {skills.map((skill, ind) => (
                <img src={skill[1]} alt={skill[0]} key={ind} />
              ))}
            </div>
          </div>

          <Link to="/contact">
            <div className="nav-arrow">
              <svg width="6" height="8" style={{ transform: "scale(3)" }}>
                <path fill="none" d="M1 0l4 4-4 4" />
              </svg>
              <div className="dot"></div>
            </div>
          </Link>
        </div>
        <div className="mobile-work">
          {previousWork.map((workitem, ind) => (
            <div key={ind}>
              <div className="img-border">
                <img
                  src={workitem.previewImage}
                  className="front-image"
                  alt="job preview"
                />
              </div>
              <h3>{workitem.title}</h3>
              <p>{workitem.description}</p>
              <div className="tools">
                {workitem.tools.map((tool, i) => (
                  <p key={i}>{tool}</p>
                ))}
              </div>
              <div className="buttons">
                <a href={workitem.link} target="_blank" rel="noreferrer">
                  <span className="button view">View live</span>
                </a>
                <a href={workitem.repo} target="_blank" rel="noreferrer">
                  <span className="button view">View repo</span>
                </a>
              </div>
              <hr />
            </div>
          ))}
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-main">
              {skills.map((skill, ind) => (
                <img src={skill[1]} alt={skill[0]} key={ind} />
              ))}
            </div>
          </div>
          <Link to="/contact">
            <div className="nav-arrow">
              <svg width="6" height="8" style={{ transform: "scale(3)" }}>
                <path fill="none" d="M1 0l4 4-4 4" />
              </svg>
              <div className="dot"></div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Work;
