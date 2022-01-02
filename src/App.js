import "./App.css";
import Home from "./commponent/Home";
import { Routes, Route } from "react-router-dom";
import Iraq from "./commponent/Iraq";
import United from "./commponent/United";

function App() {
  return (
    <div className="App">
      {/* this is Router to create our route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Iraq" element={<Iraq />} />
        <Route path="/United" element={<United />} />
      </Routes>
    </div>
  );
}

export default App;
