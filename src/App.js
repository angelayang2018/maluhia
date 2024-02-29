import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Mauivista from './pages/Mauivista';
import Haikale from './pages/Haikale';
import Listings from './pages/Listings';
import Navbar from './components/Navbar';
import "./styles/styles.css";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/mauivista" element = {<Mauivista></Mauivista>}></Route>
        <Route path = "/haikale" element = {<Haikale></Haikale>}></Route>
        <Route path = "/listings" element = {<Listings></Listings>}></Route>
        <Route path = "*" element = {<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
