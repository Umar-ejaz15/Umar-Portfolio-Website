import React, { useState, useEffect, useRef, useMemo } from "react";
import Navbar from "../components/Navbar";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { FaCode, FaServer, FaPaintBrush, FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { log } from "three/webgpu";

const HomePages = () => {
  const roles = useMemo(
    () => [
      { title: "Frontend Developer", icon: <FaCode /> },
      { title: "Backend Developer", icon: <FaServer /> },
      { title: "Web Designer", icon: <FaPaintBrush /> },
      { title: "React Developer", icon: <FaReact /> },
    ],
    []
  );

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const containerRef = useRef(null);

  const { scrollX } = useScroll({
    container: containerRef,
  });

  const x = useTransform(scrollX, [0, 100], [0, -100]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const roleDescription = useMemo(
    () => [
      "As a Frontend Developer, I specialize in creating intuitive and responsive user interfaces using modern web technologies.",
      "As a Backend Developer, I focus on building robust server-side applications and APIs to power complex web systems.",
      "As a Web Designer, I combine creativity and technical skills to craft visually appealing and user-friendly websites.",
      "As a React Developer, I leverage the power of React to build dynamic and efficient single-page applications.",
    ],
    []
  );

  const getMyCV = async () => {
    try {
      const response = await fetch(
        "https://umarmernstack.vercel.app/Umar%20Ejaz%20Resume.pdf"
      );

      // Check if the request was successful
      if (!response.ok) {
        throw new Error("Failed to fetch the CV");
      }

      // Create a blob from the response
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      // Create a link element, set its download attribute, and click it to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "Umar Ejaz Resume.pdf"); // Set the download attribute
      document.body.appendChild(link);
      link.click(); // Programmatically click the link
      document.body.removeChild(link); // Remove the link after download
    } catch (error) {
      console.error("Error downloading the CV:", error);
    }
  };

  return (
    <>
      <div
        className="bg-white text-black min-w-full min-h-screen shadow-2xl overflow-hidden"
        ref={containerRef}
      >
        <Navbar />
        <motion.div
          className="container mx-auto px-4 py-8 sm:py-16 flex flex-col items-center justify-center  overflow-hidden"
          style={{ x }}
        >
          <div className="text-center ">
            <h1 className="text-4xl e sm:text-6xl md:text-8xl font-bold mb-4">
              Hi, I'm <span className=" font-black text-rose-600 ">Umar</span>
            </h1>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentRoleIndex}
                className="text-xl sm:text-2xl mb-2 flex items-center justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="mr-2">{roles[currentRoleIndex].icon}</span>
                <h2 className="text-2xl sm:text-3xl">
                  {roles[currentRoleIndex].title}
                </h2>
              </motion.div>
            </AnimatePresence>
            <p className="mt-4 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              {roleDescription[currentRoleIndex]}
            </p>
            <div>
              <Link to="/projects" className="mt-4">
                <button className=" px-10 py-3 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg text-white mt-4  hover:text-white hover:from-violet-700 hover:to-blue-700  ">
                  <a href="">View My Projects</a>
                </button>
              </Link>
              <p className="m-2">or</p>

              <button
                className="px-10 py-3 bg-gradient-to-r from-violet-600 to-blue-600 rounded-lg text-white hover:text-white hover:from-blue-700 hover:to-violet-700"
                onClick={getMyCV}
              >
                <a
                  href="https://umarmernstack.vercel.app/Umar%20Ejaz%20Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download My CV
                </a>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HomePages;
