import Index from "./component/Index.js";
import NavBar from './component/pages/NavBar'
import SideBavBar from './component/pages/SideNavBar'
import Footer from './component/pages/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBavBar/>
      <Index />
      <Footer />
    </div>
  );
}

export default App;
