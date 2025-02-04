import React from 'react'
import { FaDatabase, FaNodeJs, FaReact, FaAws, FaGitAlt } from 'react-icons/fa'
import { SiExpress, SiTypescript, SiGraphql, SiJavascript, SiMongodb } from 'react-icons/si'

const Skills = () => {
  return (
    <div className=" h-full px-4 py-3 bg-zinc-900 flex flex-col hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zinc-800">
      <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
        <FaDatabase className="text-blue-500" />
        About Me
      </h2>
      <div className="space-y-6 flex-1">
        <p className="text-base text-gray-300 hover:text-white transition-colors">
          Hi, I'm Umar, a MERN stack developer from Pakistan specializing in full-stack web development.
        </p>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
            <FaNodeJs className="text-green-500" />
            Technical Skills:
          </h3>
          <ul className="grid grid-cols-2 gap-3">
            <li className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><SiMongodb className="text-green-500" />MongoDB</li>
            <li className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><SiExpress className="text-white" />Express.js</li>
            <li className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><FaReact className="text-blue-400" />React</li>
            <li className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><FaNodeJs className="text-green-500" />Node.js</li>
            <li className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><SiJavascript className="text-yellow-400" />JavaScript</li>
            <li className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><SiTypescript className="text-blue-500" />TypeScript</li>
            <li className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><FaDatabase className="text-purple-500" />REST APIs</li>
            <li className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><SiGraphql className="text-pink-500" />GraphQL</li>
            <li className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><FaGitAlt className="text-orange-500" />Git</li>
            <li className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"><FaAws className="text-yellow-500" />AWS</li>
          </ul>
        </div>

        <div className="mt-auto">
          <h3 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
            {/* <FaReact className="text-blue-400 animate-spin-slow" /> */}
            Interests & Hobbies:
          </h3>
          <p className="text-base text-gray-300 leading-relaxed hover:text-white transition-colors">
            Beyond coding, I'm passionate about building scalable web applications and solving complex problems. I enjoy working with databases, optimizing performance, and implementing secure authentication systems. In my free time, I contribute to open-source projects and stay updated with the latest web development trends.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills