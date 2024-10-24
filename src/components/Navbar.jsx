import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const moveVariants = {
    initial: { x: 0, y: 0 },
    hover: {
      x: 0,
      y: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <div className="w-full selection:bg-purple-500 selection:text-purple top-0 shadow-2xl relative">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.h1
              initial="initial"
              whileHover="hover"
              variants={moveVariants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black"
            >
              DEV
            </motion.h1>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none z-50 relative"
            >
              <svg
                className="h-6 w-6 md:h-8 md:w-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <div
            className={`${
              isOpen ? "flex" : "hidden"
            } lg:flex fixed lg:relative inset-0 bg-white lg:bg-transparent flex-col lg:flex-row items-center lg:justify-end w-full h-screen lg:h-auto space-y-8 md:space-y-10 lg:space-y-0 lg:space-x-6 xl:space-x-8 transition-all duration-300 ease-in-out z-40`}
          >
            <motion.a
              initial="initial"
              whileHover="hover"
              variants={moveVariants}
              href="#home"
              className="w-full lg:w-auto text-center text-2xl sm:text-3xl md:text-4xl lg:text-base text-black hover:text-zinc-700"
              onClick={() => setIsOpen(false)}
            >
              Home
            </motion.a>
            <motion.a
              initial="initial"
              whileHover="hover"
              variants={moveVariants}
              href="#about"
              className="w-full lg:w-auto text-center text-2xl sm:text-3xl md:text-4xl lg:text-base text-black hover:text-zinc-700"
              onClick={() => setIsOpen(false)}
            >
              About
            </motion.a>
            <motion.a
              initial="initial"
              whileHover="hover"
              variants={moveVariants}
              href="#projects"
              className="w-full lg:w-auto text-center text-2xl sm:text-3xl md:text-4xl lg:text-base text-black hover:text-zinc-700"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </motion.a>
            <motion.a
              initial="initial"
              whileHover="hover"
              variants={moveVariants}
              href="#contact"
              className="w-full lg:w-auto text-center text-2xl sm:text-3xl md:text-4xl lg:text-base text-black hover:text-zinc-700"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </motion.a>
            <motion.a
              initial="initial"
              whileHover="hover"
              variants={moveVariants}
              href="../../public/Umar Ejaz Resume.pdf"
              className="w-full lg:w-auto text-center text-2xl sm:text-3xl md:text-4xl lg:text-base px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </motion.a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;