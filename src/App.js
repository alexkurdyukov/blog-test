import React, { useEffect, useState } from "react";
import { Socials } from ".//components/Socials/index.jsx";
import { Header } from "./components/Header/index";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { Projects } from "../src/pages/Projects/index.jsx";
import { Contacts } from "../src/pages/Contacts";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";
import { Intro } from "./pages/Intro";
import { Loader } from "./components/Loader";
import "./assets/scss/index.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import { routesConstant } from "./Routes/routes.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAsync } from "./store/asyncActions/fetchAsyncData.js";
import { Redirect } from "react-router-dom";

const App = () => {
	useEffect(() => {
		dispatch(fetchDataAsync());
	}, []);

	const [page, setPage] = useState("intro");
	const [isLoading, setIsLoading] = useState(true);

	const windowWidth = useWindowWidth();
	const dispatch = useDispatch();

	const loadingFlag = useSelector((state) => state.data.loading);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			{isLoading && !loadingFlag ? (
				<Loader />
			) : (
				<>
					<div className="layout">
						<Header page={page} setPage={setPage} />
						<Routes>
							<Route path={routesConstant.intro} element={<Intro />} />
							<Route path={routesConstant.blog} element={<Blog />} />
							<Route path={routesConstant.portfolio} element={<Projects />} />
							<Route path={routesConstant.about} element={<About />} />
							<Route path={routesConstant.contacts} element={<Contacts />} />
							<Route
								path="*"
								element={<Navigate to={routesConstant.intro} replace />}
							/>
						</Routes>
					</div>
					{windowWidth && windowWidth > 1650 && <Socials />}
				</>
			)}
		</>
	);
};

export default App;
