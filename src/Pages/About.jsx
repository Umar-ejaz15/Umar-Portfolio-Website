import React from "react";
import Navbar from "../components/Navbar";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {Link} from "react-router-dom";
import {
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMongoose,
  SiGreensock,
  SiJavascript,
} from "react-icons/si";

const About = () => {
  return (
    <div className="bg-zinc-900 min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">About Me</h1>
        <div className="bg-zinc-800 rounded-lg shadow-lg p-6 sm:p-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Umar Ejaz</h2>
            <p className="text-lg sm:text-xl text-zinc-300 mb-4 sm:mb-6">
              Passionate MERN Stack Developer
            </p>
            <p className="text-sm sm:text-base text-zinc-400 mb-4 sm:mb-6">
              Hello! I'm a dedicated MERN stack developer with a passion for
              creating robust and scalable web applications. With expertise in
              MongoDB, Express.js, React, and Node.js, I bring ideas to life
              through clean, efficient code and intuitive user interfaces.
            </p>
          </div>
          <div className="mt-6 sm:mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">What I Offer</h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-zinc-300">
              <li>Full-stack web application development</li>
              <li>RESTful API design and implementation</li>
              <li>Database design and optimization</li>
              <li>
                Front-end development with React and modern CSS frameworks
              </li>
              <li>Back-end development with Node.js and Express</li>
              <li>Performance optimization and scalability solutions</li>
            </ul>
          </div>
          <div className="mt-6 sm:mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Technologies I Use</h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <FaHtml5 className="text-4xl sm:text-5xl text-orange-500" />
              <FaCss3Alt className="text-4xl sm:text-5xl text-blue-500" />
              <SiTailwindcss className="text-4xl sm:text-5xl text-cyan-300" />
              <SiJavascript className="text-4xl sm:text-5xl text-yellow-300" />
              <FaReact className="text-4xl sm:text-5xl text-cyan-400" />
              <FaNodeJs className="text-4xl sm:text-5xl text-green-500" />
              <SiExpress className="text-4xl sm:text-5xl text-white" />
              <SiMongodb className="text-4xl sm:text-5xl text-green-400" />
              <SiMongoose className="text-4xl sm:text-5xl text-red-400" />
              <SiGreensock className="text-4xl sm:text-5xl text-green-300" />
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center">
            <Link
              to="/contact"
            >
               <a
              href=""
              className="bg-zinc-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-zinc-600 transition duration-300"
            >
              Let's Work Together
            </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
