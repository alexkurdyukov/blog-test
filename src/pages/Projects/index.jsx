import React, { useEffect } from "react";
import { useState } from "react";
import gitLogo from "../../assets/images/icon-github.svg";
import verselLogo from "../../assets/images/verselLogo.svg";

import Button from "../../components/Button";
import { Popup } from "../../components/Popup";
import { Project } from "../../components/Project";
import { useSelector } from "react-redux";

const Projects = () => {
	const [projectOpen, setProjectOpen] = useState(false);
	const [cardIndex, setCardIndex] = useState(0);
	const [projectState, setProjectState] = useState({});
	const projectsData = useSelector((state) => state.data.data.projects);
	console.log(projectsData);
	return (
		<>
			<section className="projects">
				<div className="projects__wrapper wrapper">
					{projectsData && projectsData.map((project) => (
						<Project
							key={project.id}
							project={project}
							setProjectOpen={setProjectOpen}
							setCardIndex={setCardIndex}
							setProjectState={setProjectState}
						/>
					))}
				</div>
			</section>
			{projectOpen && (
				<>
					<Popup setProjectOpen={setProjectOpen} projectState={projectState}>
						<div className="project-container">
							<h3 className="project-popup__header">
								<span className="project-popup__header-name">
									<span className="project-popup_green">
										const projectName{" "}
									</span>{" "}
									= '{projectState.name}'
								</span>
							</h3>
							<div className="project-popup__description">
								<span className="project-popup_green">
									const projectDescription ={" "}
								</span>
								{`'`}
								{projectState.modaleDescription}
								{`'`}
							</div>
							<div className="project-popup__image-container">
								<img
									src={projectState.previewBackground}
									className="project-popup__image"
								/>
							</div>
						</div>
						<div className="project-popup__technologies">
							<span className="project-popup_green">technologies</span>=[
							{projectState.technologies.map((tech, index) => (
								<div className="project-popup__technologies" key={index}>
									{index == projectState.technologies.length - 1 ? (
										<span>{tech}</span>
									) : (
										<span>{tech}, </span>
									)}
								</div>
							))}
							]
						</div>
						<div className="project-popup__buttons">
							<Button
								href={projectState.githubLink}
								linkType={true}
								className={`project-popup__button`}
							>
								<div className="project-popup__logo">
									<img src={gitLogo} />
								</div>
								<span className="project-popup__link">visit gitHub</span>
							</Button>
							<Button
								href={projectState.verselLink}
								linkType={true}
								className={`project-popup__button`}
							>
								<div className="project-popup__logo">
									<img src={verselLogo} />
								</div>
								<span className="project-popup__link">visit versel</span>
							</Button>
						</div>
					</Popup>
				</>
			)}
		</>
	);
};

export { Projects };
