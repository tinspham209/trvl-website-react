import React, { Suspense } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./components/pages/Home"));

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
			</Router>
		</Suspense>
	);
}

export default App;
