import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

// Component
import NavBar from "./components/NavBar";
import FloatingButton from "./components/FloatingButton.js";
import SideBavBar from "./components/SideNavBar";
import ErrorPage from "./components/ErrorPage";
import LoadingPage from "./components/LoadingPage";
import Footer from "./components/Footer";

// Routes
import Index from "./routes/LandingPage/Index.js";
import PortfolioPage from "./routes/Portfolio/Index.js";
import AboutPage from "./routes/About/About";
import ContactPage from "./routes/Contact/Contact";

// Css
import "./App.css";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<SideBavBar />
			<FloatingButton />
			<Suspense fallback={LoadingPage}>
				<Switch>
					<Route exact path='/' component={Index} />
					<Route exact path='/portfolio' component={PortfolioPage} />
					<Route exact path='/about' component={AboutPage} />
					<Route path='/contact' component={ContactPage} />
					<Route path='*' component={ErrorPage} />
				</Switch>
			</Suspense>

			<Footer />
		</div>
	);
}

export default App;
