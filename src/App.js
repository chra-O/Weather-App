import "./App.css";
import Home from "./commponent/Home";

import { Routes, Route } from "react-router-dom";
import About from "./commponent/About";
import Test from "./commponent/Test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
