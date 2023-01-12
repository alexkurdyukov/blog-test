import React, { useEffect } from "react";
import { useState } from "react";
import gitLogo from "../../assets/images/icon-github.svg";
import verselLogo from "../../assets/images/verselLogo.svg";

import Button from "../../components/Button";
import { Popup } from "../../components/Popup";
import { Project } from "../../components/Project";
import { useSelector } from "react-redux";
import { Checkbox } from "../../UI/Checkbox";

const filtersData = [
	{ technologyName: "HTML", id: 1 },
	{ technologyName: "CSS", id: 2 },
	{ technologyName: "SCSS", id: 3 },
	{ technologyName: "SCSS modules", id: 4 },
	{ technologyName: "Javascript", id: 5 },
	{ technologyName: "Typescript", id: 6 },
	{ technologyName: "React", id: 7 },
	{ technologyName: "Redux", id: 8 },
	{ technologyName: "ReduxToolKit", id: 9 },
];

const Projects = () => {
	const [projectOpen, setProjectOpen] = useState(false);
	const [cardIndex, setCardIndex] = useState(0);
	const [projectState, setProjectState] = useState({});
	const projectsData = useSelector((state) => state.data.data.projects);

	const [chosenTechnologies, setChosenTechnologies] = useState([]);

	useEffect(() => {
		console.log(chosenTechnologies);
	}, [chosenTechnologies]);

	const onChangeFunction = () => {
		setChosenTechnologies(...chosenTechnologies, filter.technologyName);
		console.log("работает");
	};
	return (
		<>
			<section className="projects">
				<div className="filters">
					<div className="filters__wrapper">
						{filtersData.map((element) => {
							return (
								<Checkbox
									onChangeFunction={onChangeFunction}
									setChosenTechnologies={setChosenTechnologies}
									chosenTechnologies={chosenTechnologies}
									element={element}
									key={element.id}
								/>
							);
						})}
					</div>
				</div>
				<div className="projects__wrapper wrapper">
					{projectsData &&
						projectsData.map((project) => (
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
