import Index from "./component/Index.js";
import NavBar from './component/pages/NavBar'
import SideBavBar from './component/pages/SideNavBar'
import ContactPage from './component/pages/section/contact'
import ErrorPage from './component/pages/ErrorPage'
import Footer from './component/pages/Footer'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBavBar/>

    <Router>
      <Switch>
          <Route exact path="/earth-developer/" component={Index} />
          <Route exact path="/earth-developer/blog" component={Index} />
          <Route exact path="/earth-developer/contact" component={ContactPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
    </Router>

    <Footer />
    </div>
  );
}

export default App;
