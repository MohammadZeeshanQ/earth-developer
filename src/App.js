import React, { Suspense } from 'react';
import Index from "./component/Index.js";
import NavBar from './component/pages/shared/NavBar'
import FloatingButton from './component/pages/shared/FloatingButton.js'
import ProjectPage from './routes/Project.js'
import SideBavBar from './component/pages/SideNavBar'
import AboutPage from './component/pages/section/About'
import ContactPage from './component/pages/section/Contact'
import ErrorPage from './component/pages/shared/ErrorPage'
import LoadingPage from './component/pages/shared/LoadingPage'
import Footer from './component/pages/shared/Footer'

import { Route, Switch } from "react-router-dom";
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
