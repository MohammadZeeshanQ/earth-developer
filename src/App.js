import React, { Suspense, useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

// Component
import NavBar from "./components/NavigationBar";
import FloatingButton from "./components/FloatingButton.js";
import SideBavBar from "./components/SideNavBar";
import ErrorPage from "./components/ErrorPage";
import LoadingPage from "./components/LoadingPage";
import Footer from "./components/Footer";

// Routes
import Index from "./routes/LandingPage/Index.js";
import PortfolioPage from "./routes/Portfolio/Index.js";
import AboutPage from "./routes/About/Index";
import ContactPage from "./routes/Contact/ContactPage";

// Css
import "./App.css";

function App() {
	const [nightMode, setNightMode] = useState(false);

	// styled components
	const Container = styled.div`
		position: relative;
		background-color: ${nightMode ? "var(--darkBg)" : "var(--lightBg)"};
	`;

	return (
		<Container>
			<NavBar nightMode={nightMode} setNightMode={setNightMode} />
			<SideBavBar />
			<FloatingButton nightMode={nightMode} />
			<Suspense fallback={LoadingPage}>
				<Switch>
					<Route exact path='/'>
						<Index nightMode={nightMode} />
					</Route>
					<Route exact path='/portfolio'>
						<PortfolioPage nightMode={nightMode} />
					</Route>
					<Route exact path='/about'>
						<AboutPage nightMode={nightMode} />
					</Route>
					<Route path='/contact'>
						<ContactPage nightMode={nightMode} />
					</Route>
					<Route path='*' component={ErrorPage} />
				</Switch>
			</Suspense>
			<Footer nightMode={nightMode} />
		</Container>
	);
}

export default App;
