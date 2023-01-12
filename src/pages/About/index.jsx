import React from "react";
import { useState } from "react";

import HobbieLogo from "../../assets/images/hobbie.svg";
import BiographyLogo from "../../assets/images/biography.svg";
import EducationLogo from "../../assets/images/education.svg";
import DevLogo from "../../assets/images/devLogo.svg";
import SoftSkillsLogo from "../../assets/images/softSkills.svg";
import HardSkillsLogo from "../../assets/images/hardSkills.svg";

import { Dev } from "../../pages/About/AboutComponents/Dev/index.jsx";
import { Education } from "../../pages/About/AboutComponents/Education/index.jsx";
import { Hobbies } from "../../pages/About/AboutComponents/Hobbies/index.jsx";
import { HardSkills } from "../../pages/About/AboutComponents/HardSkills/index.jsx";
import { SoftSkills } from "../../pages/About/AboutComponents/SoftSkills/index.jsx";
import { Biography } from "./AboutComponents/Biography";

const infoData = [
	{ name: "education", imageLink: EducationLogo },
	{ name: "hobbies", imageLink: HobbieLogo },
	{ name: "biography", imageLink: BiographyLogo },
	{ name: "hard-skills", imageLink: HardSkillsLogo },
	{ name: "soft-skills", imageLink: SoftSkillsLogo },
	{ name: "dev", imageLink: DevLogo },
];

const About = () => {
	const [aboutPage, setAboutPage] = useState("education");
	return (
		<section className="about">
			<div className="about__wrapper wrapper">
				<div className="info">
					<h3 className="info__header">Information</h3>
					<div className="info__navigation">
						{infoData.map((point, index) => (
							<div
								key={index}
								className={`info-point ${
									aboutPage == point.name ? "--active" : ""
								}`}
								onClick={() => {
									setAboutPage(point.name);
								}}
							>
								<div className="info-point__image-container">
									<img src={point.imageLink} />
								</div>
								<h3 className="info-point__name">{point.name}</h3>
							</div>
						))}
					</div>
				</div>
				<div className="info-content">
					<h2 className="info__title">My {aboutPage}</h2>
					{aboutPage == "education" && <Education />}
					{aboutPage == "hobbies" && <Hobbies />}
					{aboutPage == "biography" && <Biography />}
					{aboutPage == "hard-skills" && <HardSkills />}
					{aboutPage == "soft-skills" && <SoftSkills />}
					{aboutPage == "dev" && <Dev />}
				</div>
			</div>
		</section>
	);
};

export { About };
