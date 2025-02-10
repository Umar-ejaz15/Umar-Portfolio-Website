import React from "react";
import { FaSpinner, FaBriefcase, FaProjectDiagram, FaGithub, FaLinkedin, FaFileAlt, FaLaptopCode, FaUserTie, FaCode, FaDatabase, FaServer, FaMobileAlt, FaGraduationCap, FaTools, FaUsers, FaClock } from "react-icons/fa";

const Side = () => {
  const openResume = () => {
    window.open("../../Umar Ejaz Resume.pdf", "_blank");
  }

  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="p-4 font-bold bg-zinc-900 w-full h-auto items-center flex gap-3 justify-between hover:border-[2px] hover:border-white text-center text-xl sm:text-2xl border-[2px] border-transparent rounded-lg transition-all duration-300 cursor-pointer hover:bg-zinc-800 hover:scale-[1.02]">
        <FaLaptopCode className="text-emerald-500 text-2xl" />
        <span className="text-lg font-semibold">Portfolio Projects</span>
      </div>
      <div className="p-5 sm:p-4 bg-zinc-900 w-full h-full flex flex-col gap-6 sm:gap-8 hover:border-[2px] hover:border-white text-center items-center text-xl sm:text-2xl border-[2px] border-transparent rounded-lg transition-all duration-300  shadow-lg">
        <div className="flex items-center justify-between w-full">
          <FaUserTie className="text-indigo-500 text-3xl" />
          <h1 className="flex items-center text-lg gap-2 font-semibold">
            <span>Available for Opportunities</span>
          </h1>
          <FaSpinner className="animate-spin text-emerald-500 w-7 h-7 sm:w-8 sm:h-8" />
        </div>
        <div className="w-full space-y-6">
          <div>
            <h1 className="text-left text-lg sm:text-xl font-bold text-white/90 mb-4 flex items-center gap-3">
              <FaBriefcase className="text-amber-500 text-2xl" />
              Professional Overview
            </h1>
            <div className="text-left text-sm sm:text-base text-white/80 space-y-4">
              <p className="flex items-center gap-3 text-md hover:text-white transition-colors duration-300">
                <FaCode className="text-blue-500 flex-shrink-0 text-xl" />
                Full Stack Developer specializing in MERN stack with 3+ years of experience in building scalable web applications and microservices
              </p>
              <p className="flex items-center gap-3 text-md hover:text-white transition-colors duration-300">
                <FaDatabase className="text-green-500 flex-shrink-0 text-xl" />
                Advanced proficiency in MongoDB, Express.js, React.js, and Node.js with experience in SQL databases and AWS cloud services
              </p>
              <p className="flex items-center gap-3 text-md hover:text-white transition-colors duration-300">
                <FaServer className="text-purple-500 flex-shrink-0 text-xl" />
                Implemented real-time features using Socket.io, WebSockets, and built secure authentication systems with JWT and OAuth
              </p>
              <p className="flex items-center gap-3 text-md hover:text-white transition-colors duration-300">
                <FaMobileAlt className="text-orange-500 flex-shrink-0 text-xl" />
                Expertise in modern frontend technologies including Next.js, TypeScript, Tailwind CSS, GSAP, and Framer Motion
              </p>
             
              <p className="flex items-center gap-3 text-md hover:text-white transition-colors duration-300">
                <FaClock className="text-cyan-500 flex-shrink-0 text-xl" />
                Successfully delivered 10+ commercial projects with focus on performance optimization and user experience
              </p>
              <p className="flex items-center gap-3 text-md hover:text-white transition-colors duration-300">
                <FaGraduationCap className="text-red-500 flex-shrink-0 text-xl" />
                Currently pursuing B.S. in Data Science with focus on machine learning and data analytics, maintaining a 3.8 GPA
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            <button 
              onClick={openResume} 
              className="flex items-center gap-2 text-sm bg-zinc-800 px-5 py-2.5 rounded-lg hover:bg-zinc-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FaFileAlt className="text-emerald-400 hover:text-emerald-300" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Side;