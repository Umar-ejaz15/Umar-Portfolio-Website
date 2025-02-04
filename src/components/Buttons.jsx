import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdCalendarToday } from "react-icons/md";

const Buttons = () => {
  return (
    <div className="abtbtn flex items-center  gap-8">
    <div className="flex gap-4">
      <div className="relative group ">
        <div className="absolute -inset-0.5 bg-purple-600 rounded-md  opacity-75 group-hover:opacity-100 transition-opacity"></div>
        <a
          href="https://linkedin.com"
          className="relative flex items-center justify-center px-6 py-2 rounded-md  bg-black hover:bg-black/90 transition-colors"
        >
          <FaLinkedin size={25} className="text-white" />
        </a>
      </div>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-purple-600 rounded-md  opacity-75 group-hover:opacity-100 transition-opacity"></div>
        <a
          href="https://github.com"
          className="relative flex items-center justify-center px-6 py-2 rounded-md  bg-black hover:bg-black/90 transition-colors"
        >
          <FaGithub size={25} className="text-white" />
        </a>
      </div>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-purple-600 rounded-md  opacity-75 group-hover:opacity-100 transition-opacity"></div>
        <a
          href="mailto:contact@example.com"
          className="relative flex items-center justify-center px-6 py-2 rounded-md  bg-black hover:bg-black/90 transition-colors"
        >
          <MdEmail size={25} className="text-white" />
        </a>
      </div>
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-purple-600 rounded-md  opacity-75 group-hover:opacity-100 transition-opacity"></div>
        <a
          href="/calendar"
          className="relative flex items-center justify-center px-6 py-2 rounded-md  bg-black hover:bg-black/90 transition-colors"
        >
          <MdCalendarToday size={25} className="text-white" />
        </a>
      </div>
    </div>
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-purple-600 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
      <button className="relative px-4 py-2 bg-black hover:bg-black/90 rounded-lg transition-colors text-white font-bold text-xl ">
        Book a Call
      </button>
    </div>
  </div>
  )
}

export default Buttons
