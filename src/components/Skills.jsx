
import {  FaNodeJs, FaReact, FaGitAlt,  FaGamepad,  FaGithub, FaFigma } from 'react-icons/fa'
import { SiExpress, SiJavascript, SiMongodb, SiTailwindcss, SiBootstrap, SiRedux, SiPostman, SiNetlify, SiVercel, SiFramer, SiMongoose } from 'react-icons/si'

const Skills = () => {
  return (
    <div className="h-full px-4 py-6 bg-zinc-900 flex flex-col hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-zinc-800">
    

   <div className="bg-zinc-800/50 p-4 rounded-lg">
          <h3 className="text-lg md:text-xl font-semibold mb-6 text-white flex items-center gap-3">
            <FaNodeJs className="text-green-500 animate-bounce text-2xl" />
            Technical Skills
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-2">
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiMongodb className="text-green-500 text-lg" />MongoDB
            </li>
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiMongoose className="text-red-500 text-lg" />Mongoose
            </li>
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiExpress className="text-white text-lg" />Express.js
            </li>
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaReact className="text-blue-400 text-lg animate-spin-slow" />React
            </li>
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaNodeJs className="text-green-500 text-lg" />Node.js
            </li>
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiJavascript className="text-yellow-400 text-lg" />JavaScript
            </li>
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiTailwindcss className="text-cyan-400 text-lg" />Tailwind CSS
            </li>
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiBootstrap className="text-purple-500 text-lg" />Bootstrap
            </li>
          
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiFramer className="text-purple-400 text-lg" />Framer Motion
            </li>
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiRedux className="text-purple-500 text-lg" />Redux Toolkit
            </li>
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaGitAlt className="text-orange-500 text-lg" />Git
            </li>
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaGithub className="text-white text-lg" />GitHub
            </li>
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiNetlify className="text-cyan-400 text-lg" />Netlify
            </li>
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiVercel className="text-white text-lg" />Vercel
            </li>
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <SiPostman className="text-orange-500 text-lg" />Postman
            </li>
            <li className="text-lg text-gray-300 hover:text-white transition-all hover:scale-105 flex items-center gap-3 bg-zinc-700/30 p-3 rounded-lg">
              <FaFigma className="text-purple-400 text-lg" />Figma
            </li>
          </ul>
        </div>

        <div className="bg-zinc-800/50 p-4 rounded-lg mt-auto">
          <h3 className="text-lg md:text-lg font-semibold mb-4 text-white flex items-center gap-3">
            <FaGamepad className="text-purple-400 animate-bounce" />
            Passion & Expertise
          </h3>
          <div className="flex items-start gap-4 flex-wrap">
            <p className="text-md md:text-lg text-gray-300 leading-relaxed hover:text-white transition-colors flex-1">
            {/* <FaBook className="text-green-400 text-2xl mt-1" /> */}
              🚀 Passion & Innovation I don't just write code—I craft experiences. My passion lies in learning, experimenting, and pushing boundaries to build smarter, faster, and more intuitive digital solutions. Every challenge is an opportunity to innovate, every project a chance to level up. Stagnation? Not in my vocabulary. I thrive on new technologies, fresh ideas, and creative problem-solving, ensuring that every solution is ahead of the curve. If it can be built better, faster, or smarter—I'm already on it.
            </p>
          </div>
        </div>
     
    </div>
  )
}

export default Skills