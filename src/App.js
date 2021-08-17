import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";

// Component
import NavBar from './component/NavBar'
import FloatingButton from './component/FloatingButton.js'
import SideBavBar from './component/SideNavBar'
import ErrorPage from './component/ErrorPage'
import LoadingPage from './component/LoadingPage'
import Footer from './component/Footer'

// Routes
import Index from "./routes/LandingPage/Index.js";
import ProjectPage from './routes/Project/Project.js'
import AboutPage from './routes/About/About'
import ContactPage from './routes/Contact/Contact'

// Css
import './App.css';


function App() {

  return (
    <div className="App">
      <NavBar />
      <SideBavBar />
      <FloatingButton />
      <Suspense fallback={LoadingPage}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/project" component={ProjectPage} />
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
