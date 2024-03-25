import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mauivista from "./pages/Mauivista";
import Haikale from "./pages/Haikale";
import Listings from "./pages/Listings";
import Navbar from "./components/Navbar";
import "./styles/styles.css";
import Footer from "./components/Footer";
import WaveTransition from "./components/WaveTransition";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <WaveTransition>
              <Home />
            </WaveTransition>
          }
        ></Route>
        <Route
          path="/mauivista"
          element={
            <WaveTransition>
              <Mauivista />
            </WaveTransition>
          }
        ></Route>
        <Route
          path="/haikale"
          element={
            <WaveTransition>
              <Haikale />
            </WaveTransition>
          }
        ></Route>
        <Route
          path="/listings"
          element={
            <WaveTransition>
              <Listings />
            </WaveTransition>
          }
        ></Route>
        <Route
          path="*"
          element={
            <WaveTransition>
              <Home />
            </WaveTransition>
          }
        ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
