import GameIcon from "../../../../assets/images/gamingIcon.svg";
import GymIcon from "../../../../assets/images/GymIcon.svg";
import CampingIcon from "../../../../assets/images/CampingIcon.svg";
import BoxingIcon from "../../../../assets/images/BoxingIcon.svg";
import MeditationIcon from "../../../../assets/images/MeditationIcon.svg";
import DrawingIcon from "../../../../assets/images/DrawingIcon.svg";

const hobbiesData = [
	{ name: "Gaming", imageLink: GameIcon, id: 0 },
	{ name: "Gym", imageLink: GymIcon, id: 1 },
	{ name: "Adventure", imageLink: CampingIcon, id: 2 },
	{ name: "Boxing", imageLink: BoxingIcon, id: 3 },
	{ name: "Meditation", imageLink: MeditationIcon, id: 4 },
	{ name: "Drawing", imageLink: DrawingIcon, id: 5 },
];

const Hobbies = () => {
	return (
		<ul className="hobbies">
			{hobbiesData.map((hobbie, index) => (
				<li
					key={hobbie.id}
					className="hobbie"
					style={{ animationDelay: `${index / 2.5}s` }}
				>
					<div className="hobbie__image-container">
						<img className="hobbie__image" src={hobbie.imageLink} />
					</div>
					<span className="hobbie__name">{hobbie.name}</span>
				</li>
			))}
		</ul>
	);
};

export { Hobbies };
