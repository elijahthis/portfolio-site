import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import "../css/Work.css";
// import "../css/main.css";
import felixPortfolioPreview from "../images/felix-portfolio.png";
import NERCPreview from "../images/nerc-dashboard.png";
import ankoraPreview from "../images/ankora-test.png";
import devfinderPreview from "../images/devfinder-preview.png";
import LiveGistsPreview from "../images/Live-Gists-preview.png";
import PlanetsFactSitePreview from "../images/Planets-Fact-Site-preview.png";
import SimplenoteClonePreview from "../images/Simplenote-clone-prevew.png";
import TinyFacesPreview from "../images/tiny-faces-nft-preview.png";
import htmlLogo from "../images/html-logo.png";
import cssLogo from "../images/css-logo.png";
import javascriptLogo from "../images/javascript-logo.png";
import pythonLogo from "../images/python-logo.png";
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
            title: "TinyFaces NFT",
            description: "A landing page created for an NFT platform",
            previewImage: TinyFacesPreview,
            link: "https://tiny-faces-nft.netlify.app/",
            repo: "https://github.com/elijahthis/tiny-faces-nft",
            tools: ["React JS", "Sass", "GSAP"],
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
            description:
                "An 8-page fact site for all planets in our solar system.",
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
        ["Next.js", nextjsLogo],
        ["HTML5", htmlLogo],
        ["CSS", cssLogo],
        ["Tailwind CSS", cssLogo],
        ["EmotionJS", cssLogo],
        ["Python", pythonLogo],
        ["Sass", sassLogo],
        ["GSAP", sassLogo],
        ["PostgreSQL", postgresqlLogo],
        ["Version Control (Git)", gitLogo],
        ["Ant design", gitLogo],
        ["Unit Testing (Jest)"],
        ["Search Engine Optimization (SEO)"],
        ["Material UI (MUI)"],
    ];

    return (
        <>
            <div className="my-work" id="Work" name="Work">
                <Rotate bottom left duration={700}>
                    <h2>My work</h2>
                </Rotate>

                <div>
                    <div className="work-items">
                        {previousWork.map((workitem, ind) => (
                            <Zoom right delay={700 + 500 * ind} key={ind}>
                                <div>
                                    <div className="img-wrapper">
                                        <img
                                            src={workitem.previewImage}
                                            alt=""
                                            className=""
                                        />
                                        <div></div>
                                    </div>
                                    <h3>{workitem.title}</h3>
                                    <p>{workitem.description}</p>
                                </div>
                            </Zoom>
                        ))}
                    </div>
                    <Zoom right>
                        <div className="skills" id="skills">
                            <ul className="skills-list">
                                {skills.map((skill, ind) => (
                                    <li key={ind}>{skills[ind][0]}</li>
                                ))}
                            </ul>
                        </div>
                    </Zoom>

                    <Link to="#contact">
                        <div className="nav-arrow">
                            <svg
                                width="6"
                                height="8"
                                style={{ transform: "scale(3)" }}
                            >
                                <path fill="none" d="M1 0l4 4-4 4" />
                            </svg>
                            <div className="dot"></div>
                        </div>
                    </Link>
                </div>
                <div className="mobile-work">
                    {previousWork.map((workitem, ind) => (
                        <Zoom right delay={700} key={ind}>
                            <div>
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
                                    <a
                                        href={workitem.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className="button view">
                                            View live
                                        </span>
                                    </a>
                                    <a
                                        href={workitem.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <span className="button view">
                                            View repo
                                        </span>
                                    </a>
                                </div>
                                <hr />
                            </div>
                        </Zoom>
                    ))}
                    <Zoom right>
                        <div className="skills">
                            <h3>Skills</h3>
                            <div className="skills-main">
                                <ul>
                                    {skills.map((skill, ind) => (
                                        <li key={ind}>{skills[ind][0]}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Zoom>
                    <Link to="/contact">
                        <div className="nav-arrow">
                            <svg
                                width="6"
                                height="8"
                                style={{ transform: "scale(3)" }}
                            >
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
