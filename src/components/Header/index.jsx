import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { routesConstant } from "../../Routes/routes";

const headerData = [
	{ name: "intro", number: "01", id: 1, path: routesConstant.intro },
	{ name: "blog", number: "02", id: 2, path: routesConstant.blog },
	{ name: "portfolio", number: "03", id:3, path: routesConstant.portfolio },
	{ name: "about", number: "04", id:4, path: routesConstant.about },
	{ name: "contacts", number: "05", id:5, path: routesConstant.contacts },
];

const HeaderDesktop = ({ page, setPage }) => {
	return (
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
					<span className="nav__item-number">{item.number}</span>.{" "}
					<span className="nav__item-text">{item.name}</span>
				</NavLink>
			))}
		</nav>
	);
};

const HeaderMobile = () => {
	const [isOpen, setOpen] = useState(false);
	return (
		<>
			<div
				className={`overlay`}
			></div>
			<nav className={`header-mobile__menu ${isOpen ? "--active" : ""}`}>
				<div className="mobile-menu">
					{headerData.map((item) => (
						<NavLink
							to={item.path}
							className="mobile-menu__element"
							key={item.id}
						>
							<span className="mobile-menu__number">{item.id}</span>.{" "}
							<span className="mobile-menu__text">{item.name}</span>
						</NavLink>
					))}
				</div>
			</nav>
		</>
	);
};

const Header = ({ setPage, page }) => {
	const windowWidth = useWindowWidth();
	return (
		<div className="header">
			<div className="header__wrapper">
				{windowWidth && windowWidth > 1100 ? (
					<HeaderDesktop
						setPage={setPage}
						page={page}
					/>
				) : (
					<HeaderMobile
						setPage={setPage}
						page={page}
					/>
				)}
			</div>
		</div>
	);
};

export { Header };
