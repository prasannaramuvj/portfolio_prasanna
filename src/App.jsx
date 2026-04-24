import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Project from "./pages/Project";
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<About/>}  />
      <Route path="/projects" element= {<Project/>} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
