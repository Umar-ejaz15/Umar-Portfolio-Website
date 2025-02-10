import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "../App";
import Projects from "../components/Projects";

function ReactRout() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default ReactRout;
