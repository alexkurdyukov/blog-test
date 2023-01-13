export const scrollAvailable = () => {
	const layout = document.querySelector(".layout");
	layout.style.overflow = "scroll"
};
export const scrollNotAvailable = () => {
	const layout = document.querySelector(".layout");
	layout.style.overflow = "hidden"
};
