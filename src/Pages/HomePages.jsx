import React, { useState, useEffect, useRef, useMemo } from "react";
import Navbar from "../components/Navbar";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { FaCode, FaServer, FaPaintBrush, FaReact } from "react-icons/fa";
import Buttons from "../components/Buttons";
import { Link } from "react-router-dom";

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

  return (
    <>
      <div
        className="bg-zinc-900 text-white min-w-full min-h-screen overflow-hidden"
        ref={containerRef}
      >
        <Navbar />
        <motion.div
          className="container mx-auto px-4 py-8 sm:py-16 flex flex-col items-center justify-center overflow-hidden"
          style={{ x }}
        >
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
              Hi, I'm Umar
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

            <Link to="/projects" className="mt-4">
              <Buttons txt="view my projects" />
            </Link>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default HomePages;