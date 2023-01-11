import React, { useState } from "react";
import { Socials } from ".//components/Socials/index.jsx";
import { Header } from "./components/Header/index";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { Projects } from "../src/pages/Projects/index.jsx";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";
import "./assets/scss/index.scss";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { routesConstant } from "./Routes/routes.js";

const App = () => {
	const [page, setPage] = useState("intro");
	const windowWidth = useWindowWidth();
	return (
		<BrowserRouter>
			<div className="layout">
				<Header page={page} setPage={setPage} />
				<Routes>
					<Route path={routesConstant.blog} element={<Blog />} />
					<Route path={routesConstant.portfolio} element={<Projects />} />
					<Route path={routesConstant.about} element={<About />} />
					<Route
						path="*"
						element={<Navigate to={routesConstant.blog} replace />}
					/>
				</Routes>
			</div>
			{windowWidth && windowWidth > 1650 && <Socials />}
		</BrowserRouter>
	);
};

export default App;
