import "./App.css";
import "./NavBar";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Compose from "./Compose";
import Events from "./Eventlist";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="compose" element={<Compose />} />
        <Route path="events/:id" element={<Events />} />
      </Routes>
    </BrowserRouter>

    // <div>
    //   <NavBar />
    // </div>
  );
}

export default App;
