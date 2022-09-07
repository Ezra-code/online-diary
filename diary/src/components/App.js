import "./App.css";
import "./NavBar";
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>

    // <div>
    //   <NavBar />
    // </div>
  );
}

export default App;
