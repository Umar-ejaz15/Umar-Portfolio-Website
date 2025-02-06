import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLaptopCode, FaUserNinja, FaReact, FaJs } from "react-icons/fa";
import Buttons from "./Buttons";

const About = () => {
  return (
    <div className="px-2 bg-zinc-900 w-full h-[50%] flex justify-between hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-1000">
      <div className="flex flex-col lg:flex-row justify-between items-center w-full p-2 sm:p-4 gap-4 sm:gap-8">
        <div className="abt1 w-full lg:w-2/3 flex gap-4 sm:gap-8 lg:gap-16 flex-col">
          <div className="abttext text-sm sm:text-base lg:text-sm">
            
            <h1 className="text-white/60 flex items-center gap-2 flex-wrap">
              <span className="animate-wave">👋</span> 
              <span className="hover:text-blue-400 transition-all duration-300">Welcome to my digital space</span>
              <FaCode className="text-blue-400 animate-pulse" />
            </h1>
            <p className="my-2 sm:my-4 flex items-center gap-2 flex-wrap">
              <FaUserNinja className="text-green-400" />
              Hi, I'm <strong className="text-bold uppercase hover:text-blue-400 transition-colors">Umar Ejaz</strong>
              , a passionate software developer with a keen eye for creating engaging user experiences,
              smooth animations, and delightful micro interactions.
              <FaLaptopCode className="text-yellow-400 animate-bounce" />
            </p>
            <div className="flex items-center gap-2 mb-2 sm:mb-4 flex-wrap">
              <FaReact className="text-blue-400 animate-spin" />
              <FaJs className="text-yellow-400" />
              <span className="text-gray-300">Primary tech stack</span>
            </div>
            <p className="mb-4 sm:mb-6 hover:text-blue-300 transition-all duration-300 flex items-center gap-2 flex-wrap">
              <FaEnvelope className="text-red-400" />
              I'm always excited to collaborate on innovative projects or just engage in tech discussions.
              Let's create something amazing together!
            </p>
           
          </div>
          <Buttons />
        </div>
        <div className="abt2 w-2/3 sm:w-1/2 lg:w-1/3 transform hover:scale-105 transition-all duration-300">
          <img
            className="w-full h-full object-cover object-center rounded-full border-4 border-transparent hover:border-blue-400 transition-all duration-300 shadow-lg shadow-blue-400/20"
            src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png"
            alt="Umar Ejaz profile"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default About;