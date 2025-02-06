import React from 'react'
import { FaDatabase, FaNodeJs, FaReact, FaAws, FaGitAlt, FaCode, FaLaptopCode, FaGamepad, FaBook } from 'react-icons/fa'
import { SiExpress, SiTypescript, SiGraphql, SiJavascript, SiMongodb } from 'react-icons/si'

const Skills = () => {
  return (
    <div className="h-full px-4 py-6 bg-zinc-900 flex flex-col hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zinc-800">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-white flex items-center gap-3">
        <FaCode className="text-blue-500 animate-pulse" />
        About Me
      </h2>
      <div className="space-y-2 flex-1">
        <div className="bg-zinc-800/50 p-4 rounded-lg">
          <p className="text-sm md:text-xs text-gray-300 hover:text-white transition-colors leading-relaxed">
            <FaLaptopCode className="inline-block mr-2 text-blue-400" />
            Hi, I'm Umar, a MERN stack developer from Pakistan specializing in full-stack web development.
          </p>
        </div>

        <div className="bg-zinc-800/50 p-4 rounded-lg">
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-white flex items-center gap-3">
            <FaNodeJs className="text-green-500 animate-bounce" />
            Technical Skills
          </h3>
          <ul className="grid grid-rows-2 md:rows-rows-3 lg:grid-rows-4 gap-2">
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiMongodb className="text-green-500 text-xl" />MongoDB
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiExpress className="text-white text-xl" />Express.js
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaReact className="text-blue-400 text-xl animate-spin-slow" />React
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaNodeJs className="text-green-500 text-xl" />Node.js
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiJavascript className="text-yellow-400 text-xl" />JavaScript
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiTypescript className="text-blue-500 text-xl" />TypeScript
            </li>
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaDatabase className="text-purple-500 text-xl" />REST APIs
            </li>
            {/* <li className="text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiGraphql className="text-pink-500 text-xl" />GraphQL
            </li> */}
            <li className="text-sm text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaGitAlt className="text-orange-500 text-xl" />Git
            </li>
            {/* <li className="text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaAws className="text-yellow-500 text-xl" />AWS
            </li> */}
          </ul>
        </div>

        <div className="bg-zinc-800/50 p-4 rounded-lg mt-auto">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-white flex items-center gap-3">
            <FaGamepad className="text-purple-400 animate-bounce" />
            Interests & Hobbies
          </h3>
          <div className="flex items-start gap-4 flex-wrap">
            <FaBook className="text-green-400 text-2xl mt-1" />
            <p className="text-sm md:text-sm text-gray-300 leading-relaxed hover:text-white transition-colors flex-1">
              Beyond coding, I'm passionate about building scalable web applications and solving complex problems. I enjoy working with databases, optimizing performance, and implementing secure authentication systems. In my free time, I contribute to open-source projects and stay updated with the latest web development trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills