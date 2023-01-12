import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import secondPhoto from "../../assets/images/mainPhoto2.jpg";
import thirdPhoto from "../../assets/images/mainPhoto3.jpg";
import fourthPhoto from "../../assets/images/mainPhoto4.jpg";
import fifthPhoto from "../../assets/images/mainPhoto5.jpg";
import sixthPhoto from "../../assets/images/mainPhoto6.jpg";
import seventhPhoto from "../../assets/images/mainPhoto7.jpg";

const photoData = [
	secondPhoto,
	thirdPhoto,
	fourthPhoto,
	fifthPhoto,
	sixthPhoto,
	seventhPhoto,
];

const Slider = () => {
	const [sliderRef] = useKeenSlider(
		{
			loop: true,
		},
		[
			(slider) => {
				let timeout;
				let mouseOver = false;
				function clearNextTimeout() {
					clearTimeout(timeout);
				}
				function nextTimeout() {
					clearTimeout(timeout);
					if (mouseOver) return;
					timeout = setTimeout(() => {
						slider.next();
					}, 2000);
				}
				slider.on("created", () => {
					slider.container.addEventListener("mouseover", () => {
						mouseOver = true;
						clearNextTimeout();
					});
					slider.container.addEventListener("mouseout", () => {
						mouseOver = false;
						nextTimeout();
					});
					nextTimeout();
				});
				slider.on("dragStarted", clearNextTimeout);
				slider.on("animationEnded", nextTimeout);
				slider.on("updated", nextTimeout);
			},
		]
	);
	return (
		<>
			<div className="navigation-wrapper">
				<div ref={sliderRef} className="keen-slider slider-box">
					{photoData.map((photo, index) => (
						<div
							key={index}
							className={`keen-slider__slide number-slide${index + 1}`}
						>
							<img className="slider__image" src={photo} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export { Slider };
