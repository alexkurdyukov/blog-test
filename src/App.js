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

const App = () => {
	const [page, setPage] = useState("intro");
	const [isLoading, setIsLoading] = useState(true);
	const windowWidth = useWindowWidth();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchDataAsync());
	}, []);
	const loadingFlag = useSelector((state) => state.data.loading);
	console.log(loadingFlag)
	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		});
	}, []);
	return (
		<>
			{isLoading && loadingFlag? (
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
