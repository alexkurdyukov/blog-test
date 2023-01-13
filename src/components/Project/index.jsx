import { scrollNotAvailable } from "../../utils/scrollBlock";
import { ReactComponent as FolderImage } from "../../assets/images/folder-image.svg";
import { ReactComponent as LinkImage } from "../../assets/images/link-image.svg";

const Project = ({project,setProjectOpen,setCardIndex,setProjectState}) => {
    return (
		<div
			className="project"
			onClick={() => {
				setProjectOpen(true);
				setCardIndex(project.id);
				setProjectState(project);
				scrollNotAvailable();
			}}
			key={project.id}
		>
			<div className="project__icons icons">
				<a href={project.verselLink} className="icons__folder" target="_blank" rel="noreferrer">
					<FolderImage />
				</a>
				<a href={project.githubLink} className="icons__link" target="_blank" rel="noreferrer">
					<LinkImage />
				</a>
			</div>
			<div className="project__content">
				<h3 className="project__header">{project.name}</h3>
				<p className="project__description">{project.description}</p>
			</div>

			<div className="project__technologies">
				{project.technologies.map((technology,index) => (
					<div className="technology" key={index}>
						{technology}
					</div>
				))}
			</div>
		</div>
	);
};

export {Project}