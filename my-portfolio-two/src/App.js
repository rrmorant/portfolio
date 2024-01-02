import React from "react";
// import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./header";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";

const App = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/portfolio" element={<Portfolio />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
