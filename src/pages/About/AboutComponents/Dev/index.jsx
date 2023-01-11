import React from "react";

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
