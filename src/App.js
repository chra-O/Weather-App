import "./App.css";
import Home from "./commponent/Home";

import { Routes, Route } from "react-router-dom";
import About from "./commponent/About";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
