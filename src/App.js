import Index from "./component/Index.js";
import NavBar from './component/pages/NavBar'
import Footer from './component/pages/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Index />
      <Footer />
    </div>
  );
}

export default App;
