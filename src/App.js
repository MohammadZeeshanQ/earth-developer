import Index from "./component/Index.js";
import NavBar from './component/pages/NavBar'
import SideBavBar from './component/pages/SideNavBar'
import AboutPage from './component/pages/section/About'
import ContactPage from './component/pages/section/Contact'
import ErrorPage from './component/pages/ErrorPage'
import Footer from './component/pages/Footer'
import {
  Route,
  Switch,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBavBar/>

      <Switch>
          <Route exact path="/earth-developer/" component={Index} />
          <Route exact path="/earth-developer/about" component={AboutPage} />
          <Route exact path="/earth-developer/contact" component={ContactPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>

    <Footer />
    </div>
  );
}

export default App;
