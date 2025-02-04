import React from 'react'

const Skills = () => {
  return (
    <div className="p-2 bg-zinc-900 w-full h-auto flex flex-col  hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-300">
      <h2 className="text-xl font-bold mb-1 text-white f">About Me</h2>
      <div className="space-y-1">
        <p className="text-sm text-gray-300 ">
          Hi, I'm Umar, a front-end software developer from Pakistan.
        </p>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Technical Skills:</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li className="text-gray-300">JavaScript</li>
            <li className="text-gray-300">React</li>
            <li className="text-gray-300">Solidjs</li>
            <li className="text-gray-300">Astro</li>
            <li className="text-gray-300">Svelte</li>
            <li className="text-gray-300">Nodejs</li>
          </ul>        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1 text-white">Interests & Hobbies:</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Beyond coding, I'm passionate about design, illustration, animation, and 3D modelling. I love traveling and have an unusual hobby of collecting vintage passports, which I find to be fascinating pieces of history.
          </p>
        </div>
      </div>
    </div>
    
  )
}

export default Skills