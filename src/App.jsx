import React from "react";
import "../src/App.css";
import { Analytics } from "@vercel/analytics/react";
import LocomotiveScroll from "locomotive-scroll";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
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
      <div className="w-full min-h-screen py-2 px-4 sm:px-6 md:px-8 lg:px-20 text-white bg-zinc-950">
      <Analytics/>
        <MouseFollow />
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:w-[75%]">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3">
              <About />
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full">
                <Contact />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full">
                <Works />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full sm:col-span-2 md:col-span-1">
                <Side />
              </motion.div>
            </div>
          </div>
          <div className="w-full mt-3 lg:mt-0 lg:w-[25%]">
            <div className="flex flex-col gap-3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Skills />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Certificate />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;