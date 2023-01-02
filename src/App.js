import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavContext } from "./Contexts/NavContext";
import Navbar from "./components/Navbar";
import Error404 from "./pages/404";
import Index from "./pages";
import "./css/main.css";
import "./App.css";

const App = () => {
	const [ind, setInd] = useState(0);
	const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

	return (
		<>
			<BrowserRouter>
				<div className={`App ${theme}`}>
					<div style={{ minHeight: "100vh" }}>
						<NavContext.Provider value={{ ind, setInd, theme, setTheme }}>
							<Navbar />
							<Routes>
								<Route path="/">
									<Route index element={<Index />} path="/" />
									<Route element={<Error404 />} path="*" />
								</Route>
							</Routes>
						</NavContext.Provider>
					</div>
				</div>
			</BrowserRouter>
		</>
	);
};

export default App;
