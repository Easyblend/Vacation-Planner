import "./App.css";
import HomePage from "./Homepage";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import CardDetails from "./CardDetail";
import About from "./AboutComponent";
import Creator from "./CreatorComponent";
import Data from "./Database";

import AllCard from "./AllCardComponent";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Creator">Creator</Link>
          </li>
        </ul>
        <Link to="/" className="logo-link">
          <img src="LOGO1.png" alt="logo" className="logo" />
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/creator" element={<Creator />} />
        <Route path="/all-card" element={<AllCard Data={Data} />} />
        <Route path="/carddetail/:name" element={<CardDetails Data={Data} />} />
      </Routes>
    </>
  );
}

export const SandwitchMenu = () => {
  return <div>App</div>;
};

export default App;
