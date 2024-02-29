import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Mauivista from './pages/Mauivista';
import Haikale from './pages/Haikale';
import Listings from './pages/Listings';
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Home></Home>}></Route>
        <Route path = "/mauivista" element = {<Mauivista></Mauivista>}></Route>
        <Route path = "/haikale" element = {<Haikale></Haikale>}></Route>
        <Route path = "/listings" element = {<Listings></Listings>}></Route>
        <Route path = "*" element = {<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
