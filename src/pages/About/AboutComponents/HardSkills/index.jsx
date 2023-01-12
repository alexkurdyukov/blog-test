import { useState, useEffect } from "react";
const hardSkillsData = [
	{ skillName: "HTML", skillPercent: "90%", id: 0 },
	{ skillName: "CSS", skillPercent: "90%", id: 1 },
	{ skillName: "Figma", skillPercent: "65%", id: 2 },
	{ skillName: "JS", skillPercent: "85%", id: 3 },
	{ skillName: "React", skillPercent: "80%", id: 4 },
	{ skillName: "TS", skillPercent: "70%", id: 5 },
	{ skillName: "Redux", skillPercent: "75%", id: 6 },
];

const HardSkills = () => {
	const [flag, setFlag] = useState();
	useEffect(() => {
		return () => {
			setFlag(true);
		};
	}, []);
	return (
		<div className="hard-skills">
			{hardSkillsData.map((skill, index) => (
				<div key={index} className="hard-skill">
					<div className="hard-skill__description">
						<span className="hard-skill__name">{skill.skillName}</span>
						<span className="hard-skill__level">
							{parseInt(skill.skillPercent) >= 85 && (
								<span className="hard-skill__indicator">Advanced</span>
							)}
							{parseInt(skill.skillPercent) <= 25 && (
								<span className="hard-skill__indicator">Beginner</span>
							)}
							{parseInt(skill.skillPercent) > 25 &&
								parseInt(skill.skillPercent) < 85 && (
									<span className="hard-skill__indicator">Medium</span>
								)}
						</span>
					</div>
					<div className="hard-skill__container">
						<div
							style={{
								opacity: `${flag ? "1" : "0"}`,
								maxWidth: skill.skillPercent,
								animationDelay: `${index / 2.5}s`,
							}}
							className="hard-skill__innerline"
						></div>
					</div>
				</div>
			))}
		</div>
	);
};

export { HardSkills };
