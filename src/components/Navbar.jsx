import { motion } from "framer-motion";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const openResume = () => {
    window.open("../../Umar Ejaz Resume.pdf", "_blank");
  };
  return (
    <nav className="h-full px-5 py-4 mb-5 bg-white flex flex-col hover:border-[1px] hover:border-blue-600 dark:hover:border-white border-[1px] border-transparent rounded-lg transition-all duration-300  dark:bg-[#18181B] ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#1E293B] dark:text-[#F8FAFC] font-bold text-xl">
          <Link to="/">Umar Ejaz</Link>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <ThemeToggle />
          <motion.button
            onClick={openResume}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-sm dark:bg-[#a855f7] dark:hover:bg-[#a855f7] bg-blue-600 hover:bg-blue-700 text-[#fffff] px-5 py-2.5 rounded-lg hover:border-[#475569] hover:border-[#475569]/20 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <FaFileAlt className="text-[#fffff] " />
            <span>Download CV</span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
