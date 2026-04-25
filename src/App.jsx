import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Project from "./pages/Project";
import Home from "./pages/Home";
import Myskill from "./pages/Myskill";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/myskills" element={<Myskill />} />
        <Route path="/experience" element={<Experience />} />

      </Routes>
    </>
  );
}

export default App;
