import React, { Suspense } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./components/pages/Home"));
const Services = React.lazy(() => import("./components/pages/Services"));
const Products = React.lazy(() => import("./components/pages/Products"));
const SignUp = React.lazy(() => import("./components/pages/SignUp"));
const NotFound = React.lazy(() => import("./components/NotFound"));

function App() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/services" component={Services} />
					<Route path="/sign-up" component={SignUp} />
					<Route path="/products" component={Products} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</Suspense>
	);
}

export default App;
