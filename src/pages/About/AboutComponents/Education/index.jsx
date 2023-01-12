import diplomaSrc from "../../../../assets/docs/Diploma.pdf";
import attestatSrc from "../../../../assets/docs/Attestat.pdf";
import Button from "../../../../components/Button/index.jsx";
const educationData = [
	{
		name: `School certificate`,
		time: `2006 - 2017`,
		institution: `Gimnasium №5 Sergiev-Posad`,
		type: "Inform-Math class",
		inProgress: false,
		downloadLink: diplomaSrc,
	},
	{
		name: `Bachelor diploma`,
		time: `2017-2021`,
		institution: `Moscow Power Engeenering Institute`,
		type: `Electrical Power Systems and Networks`,
		inProgress: false,
		downloadLink: attestatSrc,
	},
	{
		name: `Master's diploma`,
		time: `2021-2023 `,
		institution: `Moscow Power Engeenering Institute`,
		type: `Engineering in electric power industry`,
		inProgress: true,
		downloadLink: ``,
	},
];

const Education = () => {
	return (
		<div className="education">
			<ul className="education-list">
				{educationData.map((diploma, index) => (
					<li className="education-list__item" key={index}>
						<div className="education__link-container">
							<span className="education__header">{diploma.name}</span>
							<div className="education__institution">
								{diploma.institution}({diploma.time})
							</div>
							<div className="education__description">{diploma.type}</div>
							<Button className={"education__button"}>
								<a download="" href={diploma.downloadLink}>
									download
								</a>
							</Button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export { Education };
