import "./App.css";
import "./NavBar";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Compose from "./Compose";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="compose" element={<Compose/>}/>
      </Routes>
    </BrowserRouter>

    // <div>
    //   <NavBar />
    // </div>
  );
}

export default App;
