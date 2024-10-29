import React from "react";
import "../src/App.css";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import HomePages from "./Pages/HomePages";
import About from "./Pages/About";
import LocomotiveScroll from "locomotive-scroll";
import MouseFollow from "./components/MouseFollow";
import Designs from "./Pages/Designs";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full h-full text-black ">
        <MouseFollow />
        <Navbar />
        {/* <AppRoutes /> */}
        <HomePages />
        <About />
        <Designs />
        <Projects />
        <Skills />
        <Contact />
        <Analytics />
      </div>
    </>
  );
};

export default App;
