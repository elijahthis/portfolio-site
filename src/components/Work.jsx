import React from "react";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import Rotate from "react-reveal/Rotate";
import "../css/Work.css";
// import "../css/main.css";
import felixPortfolioPreview from "../images/felix-portfolio.png";
import tasksMePreview from "../images/tasks-me-preview.png";
import devfinderPreview from "../images/devfinder-preview.png";
import veditorPreview from "../images/veditor-preview.png";
import LiveGistsPreview from "../images/Live-Gists-preview.png";
import TinyFacesPreview from "../images/tiny-faces-nft-preview.png";
import AfricExpayPreview from "../images/africexpay-preview.png";
import KardinalPreview from "../images/kardinal-preview.png";
import KnightVenturesPreview from "../images/knight-ventures-preview.png";
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
			title: "Knight Ventures",
			description:
				"Knight Ventures is a Pan Africa Digital Accelerator providing a platform to connect startups, mentors and Investors. We have a mission to develop 100 high-growth tech enabled startups to scale and success.",
			previewImage: KnightVenturesPreview,
			link: "https://www.knight.ventures/",
			repo: undefined,
			// tools: ["React JS", "CSS"],
		},
		{
			title: "Kardinal",
			description:
				"An all-in-one platform for booking and managing flights, transportation and other employee experiences",
			previewImage: KardinalPreview,
			link: "https://gokardinal.com/",
			repo: undefined,
			// tools: ["React JS", "CSS"],
		},
		// {
		// 	title: "AfricExpay",
		// 	description:
		// 		"A fintech solution that provides an easier, cheaper way of paying vendors ",
		// 	previewImage: AfricExpayPreview,
		// 	link: "https://africexpay.com/",
		// 	repo: undefined,
		// 	// tools: ["React JS", "CSS"],
		// },
		{
			title: "Live-Gists",
			description:
				"Live-Gists is an online realtime code collaboration,sharing and social media platform. It supports realtime pair coding with a role based system for editing and viewing. Share code snippets with the click of a button, like others gists, chat with other users and receive notifications on activities and messages through an always online push server, view feed and posts of other users you are following all in one platform.",
			previewImage: LiveGistsPreview,
			link: "https://live-gists.netlify.app/",
			repo: "https://github.com/Regedit-msc/writty_client",
			// tools: ["React JS", "CSS"],
		},
		{
			title: "Tasks Me",
			description:
				"One-stop calendar to keep track of all your tasks and events",
			previewImage: tasksMePreview,
			link: "https://tasks-me.netlify.app",
			repo: "https://github.com/elijahthis/tasks-me",
			// tools: ["React JS", "Sass"],
		},
		{
			title: "veditor",
			description: "veditor is an online realtime video-editing application.",
			previewImage: veditorPreview,
			link: "https://vedit-or.netlify.app/",
			repo: "https://github.com/elijahthis/veditor",
			// tools: ["React JS", "CSS"],
		},
		// {
		// 	title: "devfinder",
		// 	description:
		// 		"devfinder is a simple app that helps developers find each other using their GitHub usernames. You type in the username and it shows you basic information about the dev. This app uses the GitHub API. It was made with React JS and SASS. Enjoy...and don't forget to check out the light mode!",
		// 	previewImage: devfinderPreview,
		// 	link: "https://elijahthis-devfinder.netlify.app/",
		// 	repo: "https://github.com/elijahthis/devfinder",
		// 	// tools: ["React JS", "CSS"],
		// },
		// {
		// 	title: "Felix Oyeleke Portfolio",
		// 	description:
		// 		"A portfolio website created for Felix Oyeleke, a hydrographic surveyor",
		// 	previewImage: felixPortfolioPreview,
		// 	link: "https://felixoyeleke.com/",
		// 	repo: "https://github.com/elijahthis/felix-oyeleke-portfolio",
		// 	// tools: ["Next JS", "Sass"],
		// },
		{
			title: "TinyFaces NFT",
			description: "A landing page created for an NFT platform",
			previewImage: TinyFacesPreview,
			link: "https://tiny-faces-nft.netlify.app/",
			repo: "https://github.com/elijahthis/tiny-faces-nft",
			// tools: ["React JS", "Sass", "GSAP"],
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
									<a
										href={workitem.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<div className="img-wrapper">
											<img src={workitem.previewImage} alt="" className="" />
											<div></div>
										</div>
									</a>
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

					{/* <Link to="#contact">
						<div className="nav-arrow">
							<svg width="6" height="8" style={{ transform: "scale(3)" }}>
								<path fill="none" d="M1 0l4 4-4 4" />
							</svg>
							<div className="dot"></div>
						</div>
					</Link> */}
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
								{/* <div className="tools">
                                    {workitem.tools.map((tool, i) => (
                                        <p key={i}>{tool}</p>
                                    ))}
                                </div> */}
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
					{/* <Link to="/contact">
						<div className="nav-arrow">
							<svg width="6" height="8" style={{ transform: "scale(3)" }}>
								<path fill="none" d="M1 0l4 4-4 4" />
							</svg>
							<div className="dot"></div>
						</div>
					</Link> */}
				</div>
			</div>
		</>
	);
};

export default Work;
