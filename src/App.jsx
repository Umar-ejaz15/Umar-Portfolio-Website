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
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Certificate from "./components/Certificate";
import ClientReviews from "./components/Reviews";
import Projects from "./components/Projects";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Helmet>
        <title>Umar - MERN Stack Developer | Portfolio</title>
        <meta
          name="description"
          content="I'm Umar, a MERN Stack Developer specializing in MongoDB, Express.js, React.js, and Node.js development."
        />
        <meta
          name="keywords"
          content="MERN stack, web developer, MongoDB, Express.js, React.js, Node.js, full stack developer, JavaScript"
        />
        <meta name="author" content="Umar" />
        <meta property="og:title" content="Umar - MERN Stack Developer" />
        <meta
          property="og:description"
          content="I'm Umar, a MERN Stack Developer specializing in MongoDB, Express.js, React.js, and Node.js development."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Umar - MERN Stack Developer" />
        <meta
          name="twitter:description"
          content="I'm Umar, a MERN Stack Developer specializing in MongoDB, Express.js, React.js, and Node.js development."
        />
        <link rel="canonical" href="https://your-website-url.com" />
      </Helmet>

      <div className="w-full min-h-screen py-2 px-4 sm:px-6 md:px-8 lg:px-10 text-white bg-zinc-950">
        <Analytics />
        <MouseFollow />
        <Navbar />
        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-2 h-full overflow-hidden">
          {/* Left Section */}
          <div className="w-full ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <About />
            </motion.div>

            {/* Row with Works, Contact, and Side */}
            <div className="flex flex-col  lg:flex-row gap-2 mt-2">
              {/* Works Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full lg:w-1/2"
              >
                <Works />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-full lg:w-1/2  "
              >
                <Side />
              </motion.div>

              {/* Side Section */}
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full mt-2"
        >
          <Projects />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full mt-2"
        >
          <Skills />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full mt-2"
        >
          <ClientReviews />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-full"
        >
          <Contact />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full mt-2"
        >
          <Certificate />
        </motion.div>
      </div>
    </>
  );
};

export default App;
