import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact />
				</Switch>
			</Router>
		</>
	);
}

export default App;
