import { motion } from "framer-motion";
import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  const openResume = () => {
    window.open("../../Umar Ejaz Resume.pdf", "_blank");
  };
  return (
    <nav className="bg-zinc-900 mb-2 rounded-md px-6 p-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/">Umar Ejaz</Link>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <motion.button
            onClick={openResume}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 text-sm bg-zinc-800 px-5 py-2.5 rounded-lg hover:bg-zinc-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <FaFileAlt className="text-emerald-400 hover:text-emerald-300" />
            <span>Download CV</span>
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
