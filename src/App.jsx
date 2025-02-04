import React from "react";
import "../src/App.css";
import { Analytics } from "@vercel/analytics/react";
import LocomotiveScroll from "locomotive-scroll";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>Umar - MERN Stack Developer | Portfolio</title>
        <meta name="description" content="I'm Umar, a MERN Stack Developer specializing in MongoDB, Express.js, React.js, and Node.js development." />
        <meta name="keywords" content="MERN stack, web developer, MongoDB, Express.js, React.js, Node.js, full stack developer, JavaScript" />
        <meta name="author" content="Umar" />
        <meta property="og:title" content="Umar - MERN Stack Developer" />
        <meta property="og:description" content="I'm Umar, a MERN Stack Developer specializing in MongoDB, Express.js, React.js, and Node.js development." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Umar - MERN Stack Developer" />
        <meta name="twitter:description" content="I'm Umar, a MERN Stack Developer specializing in MongoDB, Express.js, React.js, and Node.js development." />
        <link rel="canonical" href="https://your-website-url.com" />
      </Helmet>
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