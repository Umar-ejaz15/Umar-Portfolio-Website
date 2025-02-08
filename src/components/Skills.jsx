import React from 'react'
import { FaDatabase, FaNodeJs, FaReact, FaGitAlt, FaCode, FaLaptopCode, FaGamepad, FaBook, FaGithub, FaFigma } from 'react-icons/fa'
import { SiExpress, SiTypescript, SiJavascript, SiMongodb, SiTailwindcss, SiBootstrap, SiRedux, SiPostman, SiNetlify, SiVercel, SiFramer, SiMongoose } from 'react-icons/si'

const Skills = () => {
  return (
    <div className="h-full px-4 py-6 bg-zinc-900 flex flex-col hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zinc-800">
      <h2 className="text-sm md:text-lg font-bold mb-6 text-white flex items-center gap-3">
        <FaCode className="text-blue-500 animate-pulse" />
        About Me
      </h2>
      <div className="space-y-2 flex-1">
        <div className="bg-zinc-800/50 p-4 rounded-lg">
          <p className="text-sm md:text-xs text-gray-300 hover:text-white transition-colors leading-relaxed">
            <FaLaptopCode className="inline-block mr-2 text-blue-400" />
            Hi, I'm Umar, a passionate Full Stack Developer from Pakistan with expertise in modern web technologies. I specialize in creating responsive, performant, and user-friendly applications using the MERN stack and latest frontend technologies.
          </p>
        </div>

        <div className="bg-zinc-800/50 p-4 rounded-lg">
          <h3 className="text-lg md:text-md font-semibold mb-6 text-white flex items-center gap-3">
            <FaNodeJs className="text-green-500 animate-bounce text-lg" />
            Technical Skills
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-2">
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiMongodb className="text-green-500 text-sm" />MongoDB
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiMongoose className="text-red-500 text-sm" />Mongoose
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiExpress className="text-white text-sm" />Express.js
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaReact className="text-blue-400 text-sm animate-spin-slow" />React
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaNodeJs className="text-green-500 text-sm" />Node.js
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiJavascript className="text-yellow-400 text-sm" />JavaScript
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiTailwindcss className="text-cyan-400 text-sm" />Tailwind CSS
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiBootstrap className="text-purple-500 text-sm" />Bootstrap
            </li>
          
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiFramer className="text-purple-400 text-sm" />Framer Motion
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiRedux className="text-purple-500 text-sm" />Redux Toolkit
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaGitAlt className="text-orange-500 text-sm" />Git
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaGithub className="text-white text-sm" />GitHub
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiNetlify className="text-cyan-400 text-sm" />Netlify
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiVercel className="text-white text-sm" />Vercel
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiPostman className="text-orange-500 text-sm" />Postman
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaFigma className="text-purple-400 text-sm" />Figma
            </li>
          </ul>
        </div>

        <div className="bg-zinc-800/50 p-4 rounded-lg mt-auto">
          <h3 className="text-lg md:text-sm font-semibold mb-4 text-white flex items-center gap-3">
            <FaGamepad className="text-purple-400 animate-bounce" />
            Passion & Expertise
          </h3>
          <div className="flex items-start gap-4 flex-wrap">
            <p className="text-sm md:text-xs text-gray-300 leading-relaxed hover:text-white transition-colors flex-1">
            {/* <FaBook className="text-green-400 text-2xl mt-1" /> */}
              I'm deeply passionate about crafting exceptional web experiences that combine stunning design with robust functionality. My expertise spans from creating smooth animations using GSAP and Framer Motion to building scalable backend systems with Node.js and MongoDB. I excel in developing responsive interfaces with Tailwind CSS and Bootstrap, implementing state management with Redux Toolkit, and ensuring seamless deployment through Netlify and Vercel. I'm constantly exploring new technologies and best practices to deliver innovative solutions that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills