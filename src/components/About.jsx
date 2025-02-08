import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLaptopCode, FaUserNinja, FaReact, FaJs, FaDatabase, FaServer, FaBrain } from "react-icons/fa";
import Buttons from "./Buttons";
import Roboava from "./Roboava";

const About = () => {
  return (
    <div className="px-2 bg-zinc-900 w-full h-[50%] flex justify-between hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-1000">
      <div className="flex relative flex-col lg:flex-row justify-between items-center w-full p-2 sm:p-4 gap-4 sm:gap-8">
        <div className="abt1 w-full lg:w-2/3 flex gap-4 sm:gap-8 lg:gap-16 flex-col">
          <div className="abttext text-xs">
            <h1 className="text-white/60 flex items-center gap-2 flex-wrap">
              <span className="animate-wave">👋</span> 
              <span className="hover:text-blue-400 transition-all duration-300">Stop Struggling. Start Building.</span>
              <FaCode className="text-blue-400 animate-pulse" />
            </h1>
            <p className="my-2  sm:my-4 flex items-center gap-2 flex-wrap">
              <FaUserNinja className="text-green-400" />
              Hi, I'm <strong className="text-bold uppercase hover:text-blue-400 transition-colors">Umar Ejaz</strong>
              , a MERN stack developer who transforms complex business requirements into scalable, efficient web applications. 
              I help businesses and startups stop guessing about their technical solutions and start delivering robust, 
              user-centric applications that drive real results.
              <FaLaptopCode className="text-yellow-400 animate-bounce" />
            </p>
            <div className="flex items-center gap-2 mb-2 sm:mb-4 flex-wrap">
              <FaReact className="text-blue-400 animate-spin" />
              <FaJs className="text-yellow-400" />
              <FaDatabase className="text-purple-400" />
              <FaServer className="text-green-400" />
              <span className="text-gray-300">Full-stack development expertise</span>
            </div>
            <p className="mb-2 sm:mb-4 flex items-center gap-2 flex-wrap text-gray-300">
              <FaBrain className="text-pink-400 animate-pulse" />
              I don't just write code – I create impact. From responsive front-end interfaces to robust backend systems,
              I craft powerful, performance-driven solutions that turn user requirements into successful digital experiences.
              Whether it's an e-commerce platform, social network, or enterprise application, I build systems that scale.
            </p>
          </div>
          <Buttons />
        </div>
        <div className="w-full h-4/5  md:h-4/5 md:w-auto md:absolute md:right-0 md:bottom-0 ">
          <Roboava />
        </div>
      </div>
    </div>
  );
};

export default About;