import React from "react";

const devData = [
	{
		id: 3,
		company: "vast-media",
		description:
			"Engaged in cross-browser adaptive layout of landing pages and multi-page sites for all resolutions and devices. Added animations and UI component logic. Performed refactoring of the filtering and sorting system by several categories and filters. The result of the work was a significant acceleration of the site.Optimized the application, which significantly reduced the speed of the initialloading of the site. Engaged in the creation of a tool for generating pdf, wrote templates for its generation. Developed a tool for creating, saving, editing, adding/deleting elements and deleting the lists themselves, with the ability to filter by different categories, and add various elements. Worked with the role model of accounts (demo/promo/full). Redesigned the system in whichan unauthorized user did not have access to the functionality. We had to redo thismodel to the demo/full access type, which allowed us to attract more interested parties.I was engaged in the addition of internalization, which improved the availability of the resource forusers from different countries",
	},
	{
		id: 2,
		company: "individual entrepreneurship, freelance",
		description:
			"I was engaged in layout of landing pages based on layouts from figma with a task of simple logic (popups, burger menus, etc), set up adaptive layout, made small orders with animations",
	},
	{
		id: 1,
		company: "self-learning",
		description:
			"I use react,css,javascript. I have developed some react apps as PET projects",
	},
];

const Dev = () => {
	return (
		<div className="dev">
			<div className="dev__wrapper wrapper">
				{devData.map((e, index) => (
					<div className="dev__item" key={index}>
						<h4 className="dev__time">{e.time}</h4>
						<span className="dev__company">company: {e.company}</span>
						<p className="dev__description">{e.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export { Dev };
