import React from "react";
import { FaSpinner, FaBriefcase, FaProjectDiagram, FaGithub, FaLinkedin, FaFileAlt, FaLaptopCode, FaUserTie, FaCode, FaDatabase, FaServer, FaMobileAlt } from "react-icons/fa";

const Side = () => {
  const opencv = ()=>{
    window.open("../../Umar Ejaz Resume.pdf","_blank")
  }
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="p-3 font-bold bg-zinc-900 w-full h-auto items-center flex gap-3 justify-between hover:border-[2px] hover:border-white text-center text-xl sm:text-2xl border-[2px] border-transparent rounded-lg transition-all duration-300 cursor-pointer hover:bg-zinc-800">
        <FaLaptopCode className="text-emerald-500 text-xl" />
        <span className="text-sm"> Portfolio Projects</span>
      </div>
      <div className="p-4 sm:p-3 bg-zinc-900 w-full h-full flex flex-col gap-5 sm:gap-7 hover:border-[2px] hover:border-white text-center items-center text-xl sm:text-2xl border-[2px] border-transparent rounded-lg transition-all duration-300 hover:bg-zinc-800">
        <div className="flex items-center justify-between w-full">
          <FaUserTie className="text-indigo-500 text-2xl" />
          <h1 className="flex items-center text-lg gap-2">
            <span className="text-sm" >Available for Opportunities</span>
          </h1>
          <FaSpinner className="animate-spin text-emerald-500 w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div className="w-full space-y-5">
          <div>
            <h1 className="text-left text-lg sm:text-sm font-bold text-white/90 mb-3 flex items-center gap-2 ">
              <FaBriefcase className="text-amber-500" />
              Professional Overview
            </h1>
            <div className="text-left text-sm sm:text-base text-white/80 space-y-3">
              <p className="flex items-center gap-2 text-xs">
                <FaCode className="text-blue-500 flex-shrink-0" />
                Full Stack Developer specializing in MERN stack with expertise in building responsive and dynamic web applications
              </p>
              <p className="flex items-center gap-2 text-xs">
                <FaDatabase className="text-green-500 flex-shrink-0" />
                Proficient in MongoDB, Express.js, React.js, and Node.js with experience in database design and management
              </p>
              <p className="flex items-center gap-2 text-xs">
                <FaServer className="text-purple-500 flex-shrink-0" />
                Implemented real-time features using Socket.io and built secure authentication systems
              </p>
              <p className="flex items-center gap-2 text-xs">
                <FaMobileAlt className="text-orange-500 flex-shrink-0" />
                Created responsive and interactive UIs using modern technologies like GSAP and Framer Motion
              </p>
              <p className="flex items-center gap-2 text-xs">
                <FaProjectDiagram className="text-red-500 flex-shrink-0" />
                Currently pursuing B.S. in Data Science, combining development skills with data analysis capabilities
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="http://github.com/umar-ejaz15/" target="_blank" className="flex items-center gap-2 text-xs bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition-all duration-300 hover:scale-105">
              <FaGithub className="text-white hover:text-gray-300" />
              <span className="text-sm">View GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/umar-ejaz-6734402b1/" target="_blank" className="flex items-center gap-2 text-xs bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition-all duration-300 hover:scale-105">
              <FaLinkedin className="text-blue-400 hover:text-blue-300" />
              <span className="text-sm">Connect on LinkedIn</span>
            </a>
            <a onClick={()=>opencv()} className="flex items-center gap-2 text-xs bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition-all duration-300 hover:scale-105">
              <FaFileAlt className="text-emerald-400 hover:text-emerald-300" />
              <span className="text-sm">Download CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;