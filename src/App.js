import React, { Suspense, lazy } from 'react';
import { Route, Switch } from "react-router-dom";

// Css
import './App.css';
import Index from "./routes/LandingPage/Index.js";

// Component
import NavBar from './components/NavBar'
import FloatingButton from './components/FloatingButton.js'
import SideBavBar from './components/SideNavBar'
import ErrorPage from './components/ErrorPage'
import LoadingPage from './components/LoadingPage'
import Footer from './components/Footer'

// Routes
// const Index = lazy(() => import('./routes/LandingPage/Index.js'));
const WebAppPage = lazy(() => import('./routes/Project/WebAppProject.js'));
const UiPage = lazy(() => import('./routes/Project/UiProject'));
const AboutPage = lazy(() => import('./routes/About/About'));
const ContactPage = lazy(() => import('./routes/Contact/Contact'));

// import WebAppPage from './routes/Project/WebAppProject.js'
// import UiPage from './routes/Project/UiProject'
// import AboutPage from './routes/About/About'
// import ContactPage from './routes/Contact/Contact'


function App() {

  return (
    <div className="App">
      <NavBar />
      <SideBavBar />
      <FloatingButton />
      <Suspense fallback={LoadingPage}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/web-app" component={WebAppPage} />
          <Route exact path="/ui-ux" component={UiPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </Suspense>

      <Footer />
    </div>
  );
}

export default App;
