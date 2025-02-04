import React from "react";
import "../src/App.css";
import { Analytics } from "@vercel/analytics/react";
import LocomotiveScroll from "locomotive-scroll";
import MouseFollow from "./components/MouseFollow";
import About from "./components/About";
import Contact from "./components/Contact";
import Works from "./components/Works";
import Side from "./components/Side";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="w-full min-h-screen px-8 text-white bg-zinc-800">
        <MouseFollow />
        <div className="flex flex-col lg:flex-row gap-1">
          <div className="w-full lg:w-4/5">
            <div className="mb-1">
              <About />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              <div className="w-full">
                <Contact />
              </div>
              <div className="w-full">
                <Works />
              </div>
              <div className="w-full">
                <Side />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-1 lg:w-1/5">
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;