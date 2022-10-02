// import logo from './logo.svg';
import './App.css';
// import Consoledata from './gg';
import Navbar from "./Components/navbar"
import Navbar2 from './Components/navbar2';
// import Cart  from './pages/cart';
import Home from "./pages/Home"
import Footer from './Components/Footer';
import Footer2 from './Components/Footer2';
import AllTRoutes from './Allroutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />
      <AllTRoutes />
      <Footer />
    </div>
  );
}

export default App;
