

import {Slider} from '../../../../components/Slider/index.jsx'



const Biography = () => {
	return (
		<div className="biography">
			<Slider />
			<div className="biography-container">
				<h3 className="biography_orange">Hi everybody!</h3> My name is{" "}
				<span className="biography_green">Alexey Kurdyukov</span>, I am a
				frontend developer. I like to write code using Typescript, React and
				Redux. I like to learn something new. I always strive for personal and
				professional growth. Right now i'm interesting in node.js and next.js.
				My stack of technologies:
				<span className="biography_violet">React</span>,{" "}
				<span className="biography_violet">SASS</span>,{" "}
				<span className="biography_violet">TypeScript</span>,{" "}
				<span className="biography_violet">Redux</span>.
				<div className="biography__letter">
					Thanks for watching. I will be glad to anyfeedback
				</div>
			</div>
		</div>
	);
};

export { Biography };
