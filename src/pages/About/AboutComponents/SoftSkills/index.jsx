const softSkillData = [
	{ name: `Time management`, id: 1 },
	{ name: `Self-motivation`, id: 2 },
	{ name: `Active communication`, id: 3 },
	{ name: `Negotiation`, id: 4 },
	{ name: `Conflict resolution`, id: 5 },
	{ name: `Ability to lead`, id: 6 },
	{ name: `Teamwork`, id: 7 },
];

const SoftSkills = () => {
	return (
		<div className="soft-skills">
			{softSkillData.map((softSkill) => (
				<div
					style={{ animationDelay: `${softSkill.id / 2.5}s` }}
					key={softSkill.id}
					className="soft-skill"
				>
					{softSkill.name}
				</div>
			))}
		</div>
	);
};

export { SoftSkills };
