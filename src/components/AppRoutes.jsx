import React from "react";
import HomePages from "../Pages/HomePages";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import Contact from "../Pages/Contact";
import ShowProject from "../Pages/ShowProject";

import { Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/showproject/:id" element={<ShowProject />} />
    </Routes>
  );
};

export default AppRoutes;