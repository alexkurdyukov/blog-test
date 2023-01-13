import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { routesConstant } from "../../Routes/routes";
import { scrollAvailable, scrollNotAvailable } from "../../utils/scrollBlock";
import { ReactComponent as HeaderLogo } from "../../assets/images/header-logo.svg";
import resumeSrc from "../../assets/docs/Resume.pdf";

const headerData = [
	{ name: "intro", number: "01", id: 1, path: routesConstant.intro },
	{ name: "blog", number: "02", id: 2, path: routesConstant.blog },
	{ name: "portfolio", number: "03", id: 3, path: routesConstant.portfolio },
	{ name: "about", number: "04", id: 4, path: routesConstant.about },
	{ name: "contacts", number: "05", id: 5, path: routesConstant.contacts },
];

const HeaderDesktop = ({ page, setPage, setIsLoading }) => {
	return (
		<>
			<div className="header__logo-container">
				<HeaderLogo />
			</div>
			<nav className={`header__nav nav`}>
				{headerData.map((item) => (
					<NavLink
						to={item.path}
						className={`nav__item ${item.name === page ? "--active" : ""}`}
						key={item.id}
						onClick={() => {
							setPage(item.name);
						}}
					>
						<span className="nav__item-number">{item.id}</span>.{" "}
						<span className="nav__item-text">{item.name}</span>
					</NavLink>
				))}
			</nav>

			<a className="resume resume__button" download="" href={resumeSrc}>
				<span className="resume__text">Resume</span>
			</a>
		</>
	);
};

const HeaderMobile = ({ setPage, setIsLoading }) => {
	const [isOpen, setOpen] = useState(false);
	const [overlayIsOpen, setOverlayOpen] = useState(false);
	return (
		<>
			<div
				className={`overlay ${overlayIsOpen ? "--active" : ""}`}
				onClick={() => {
					setOverlayOpen(false);
					setOpen(false);
					scrollAvailable();
				}}
			></div>
			<div className={`header-mobile__menu ${isOpen ? "--active" : ""}`}>
				<div className="mobile-menu">
					{headerData.map((item) => (
						<NavLink
							to={item.path}
							onClick={() => {
								setPage(item.name);
								setOpen(!isOpen);
								setOverlayOpen(!overlayIsOpen);
								scrollAvailable();
							}}
							className="mobile-menu__element"
							key={item.id}
						>
							<span className="mobile-menu__number">{item.id}</span>.{" "}
							<span className="mobile-menu__text">{item.name}</span>
						</NavLink>
					))}
				</div>
			</div>
			<div
				className="header-mobile__logo"
			>
				<HeaderLogo />
			</div>
			<div
				onClick={() => {
					setOpen(!isOpen);
					setOverlayOpen(!overlayIsOpen);
					scrollNotAvailable();
				}}
				className={`burger burger__container ${isOpen ? "--active" : ""}`}
			>
				<div className="burger__wrapper">
					<div className="burger_top"></div>
					<div className="burger_middle"></div>
					<div className="burger_bottom"></div>
				</div>
			</div>
		</>
	);
};

const Header = ({ setPage, page, setIsLoading }) => {
	const windowWidth = useWindowWidth();
	return (
		<div className="header">
			<div className="header__wrapper">
				{windowWidth && windowWidth > 1200 ? (
					<HeaderDesktop
						setPage={setPage}
						page={page}
						setIsLoading={setIsLoading}
					/>
				) : (
					<HeaderMobile
						setPage={setPage}
						page={page}
						setIsLoading={setIsLoading}
					/>
				)}
			</div>
		</div>
	);
};

export { Header };
