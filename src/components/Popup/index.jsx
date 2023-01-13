import React from "react";
import { scrollAvailable } from "../../utils/scrollBlock";

const Popup = ({ children, setProjectOpen }) => {
	return (
		<>
			<div className="popup">
				<div className="project-popup wrapper">{children}</div>
			</div>
			<div
				onClick={() => {
					setProjectOpen(false);
					scrollAvailable();
				}}
				className="popup__overlay"
			></div>
		</>
	);
};

export { Popup };
