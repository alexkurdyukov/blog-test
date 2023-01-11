import { useState } from "react";
import { scrollNotAvailable } from "../../utils/scrollBlock";

const Project = ({project}) => {
    return (
		<div
			className="project"
			onClick={() => {
				setProjectOpen(true);
				setCardIndex(index);
				setProjectState(project);
				scrollNotAvailable();
			}}
			key={index}
		>
			<div className="project__icons icons">
				<a href={project.verselLink} className="icons__folder" target="_blank">
					<FolderImage />
				</a>
				<a href={project.githubLink} className="icons__link" target="_blank">
					<LinkImage />
				</a>
			</div>
			<div className="project__content">
				<h3 className="project__header">{project.name}</h3>
				<p className="project__description">{project.description}</p>
			</div>

			<div className="project__technologies">
				{project.technologies.map((technology, index) => (
					<div className="technology" key={index}>
						{technology}
					</div>
				))}
			</div>
		</div>
	);
};

export {Project}