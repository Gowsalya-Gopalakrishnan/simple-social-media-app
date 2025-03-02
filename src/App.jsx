import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signup from "./components/features/Signup";
import Login from "./components/features/Login";
import Navbar from "./components/features/Navbar";

const App = () => {
	return (
		<>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
};

export default App;