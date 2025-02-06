import React from "react";
import { FaSpinner, FaBriefcase, FaProjectDiagram, FaGithub, FaLinkedin, FaCode, FaDownload } from "react-icons/fa";

const Side = () => {
  const opencv = ()=>{
    window.open("../../Umar Ejaz Resume.pdf","_blank")
      
  }
  return (
  
    <div className="flex flex-col gap-4 h-full">
      <div className="p-2 font-bold bg-zinc-900 w-full h-auto items-center flex gap-2 justify-center hover:border-[2px] hover:border-white text-center text-xl sm:text-2xl border-[2px] border-transparent rounded-lg transition-all duration-300 cursor-pointer">
        <FaProjectDiagram className="text-blue-500" />
        <span>Projects</span>
      </div>
      <div className="p-4 sm:p-2 bg-zinc-900 w-full h-full flex flex-col  gap-5 sm:gap-7 hover:border-[2px] hover:border-white text-center items-center text-xl sm:text-2xl border-[2px] border-transparent rounded-lg transition-all duration-300">
        <div className="flex items-center justify-between w-full">
            <FaCode className="text-purple-500" />
          <h1 className="flex items-center text-lg gap-2">
            <span>Currently Active</span>
          </h1>
          <FaSpinner className="animate-spin text-green-500 w-6 h-6 sm:w-8 sm:h-8" />
        </div>
        <div className="w-full space-y-4">
          <div>
            <h1 className="text-left text-lg sm:text-xl text-white/80 mb-2 flex items-center gap-2">
              <FaBriefcase className="text-yellow-500" />
              Professional Status
            </h1>
            <p className="text-left text-sm sm:text-base text-white/70">
              Full Stack Developer | Open to Opportunities
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="http://github.com/umar-ejaz15/" target="_blank" className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition-all duration-300">
              <FaGithub className="text-white" />
              <span className="text-sm">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/umar-ejaz-6734402b1/" target="_blank" className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition-all duration-300">
              <FaLinkedin className="text-blue-400" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a onClick={()=>opencv()} className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700 transition-all duration-300">
              <FaDownload className="text-green-400" />
              <span className="text-sm">Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;