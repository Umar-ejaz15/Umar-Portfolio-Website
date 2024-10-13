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
    <div className="bg-white min-h-screen text-black">
      <Navbar />
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-3xl text-pink-600 uppercase sm:text-4xl font-bold text-center mb-6 sm:mb-8">About Me</h1>
        <div className="bg-white text-black rounded-lg shadow-2xl p-6 sm:p-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Umar Ejaz</h2>
            <p className="text-lg font-medium uppercase sm:text-xl text-red-600 mb-4 sm:mb-6">
              Passionate 
              <span className="text-blue-600" >   MERN</span> Stack Developer
            </p>
            <p className="text-sm sm:text-base text-zinc-800 mb-4 sm:mb-6">
              Hello! I'm a dedicated MERN stack developer with a passion for
              creating robust and scalable web applications. With expertise in
              MongoDB, Express.js, React, and Node.js, I bring ideas to life
              through clean, efficient code and intuitive user interfaces.
            </p>
          </div>
          <div className="mt-6 sm:mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">What I Offer</h3>
            <ul className="list-disc list-inside text-sm sm:text-base text-zinc-600">
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
              <FaHtml5 className="text-4xl sm:text-5xl text-orange-600" />
              <FaCss3Alt className="text-4xl sm:text-5xl text-blue-600" />
              <SiTailwindcss className="text-4xl sm:text-5xl text-cyan-600" />
              <SiJavascript className="text-4xl sm:text-5xl text-yellow-600" />
              <FaReact className="text-4xl sm:text-5xl text-cyan-600" />
              <FaNodeJs className="text-4xl sm:text-5xl text-green-600" />
              <SiExpress className="text-4xl sm:text-5xl text-zinc-600" />
              <SiMongodb className="text-4xl sm:text-5xl text-green-600" />
              <SiMongoose className="text-4xl sm:text-5xl text-red-600" />
              <SiGreensock className="text-4xl sm:text-5xl text-green-600" />
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
