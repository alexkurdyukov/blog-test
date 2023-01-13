import React from "react";

const Loader = () => {
	return (
		<div className="loader">
			<span className="loader__text glitch-loader">Loading</span>
			<div className="loader__circle">
				<div className="circle__inner"></div>
			</div>
		</div>
	);
};

export {Loader}
