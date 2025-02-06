import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdCalendarToday } from "react-icons/md";

const Buttons = () => {
  return (
    <div className="abtbtn flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-4">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        <div className="relative group transform hover:scale-105 transition-all">
          <div className="absolute -inset-0.5 bg-blue-600 rounded-md blur-sm opacity-75 group-hover:opacity-100 transition-all"></div>
          <a
            href="https://www.linkedin.com/in/umar-ejaz-6734402b1/" target='_blank'
            className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-black hover:bg-black/90 transition-all"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </a>
        </div>
        <div className="relative group transform hover:scale-105 transition-all">
          <div className="absolute -inset-0.5 bg-blue-600 rounded-md blur-sm opacity-75 group-hover:opacity-100 transition-all"></div>
          <a
            href="https://github.com/Umar-ejaz15" target='_blank'
            className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-black hover:bg-black/90 transition-all"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </a>
        </div>
        <div className="relative group transform hover:scale-105 transition-all">
          <div className="absolute -inset-0.5 bg-blue-600 rounded-md blur-sm opacity-75 group-hover:opacity-100 transition-all"></div>
          <a
            href="official.umer.ejaz@gmail.com" 
            className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-black hover:bg-black/90 transition-all"
            aria-label="Email Contact"
          >
            <MdEmail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </a>
        </div>
        <div className="relative group transform hover:scale-105 transition-all">
          <div className="absolute -inset-0.5 bg-blue-600 rounded-md blur-sm opacity-75 group-hover:opacity-100 transition-all"></div>
          <a
            href="/calendar"
            className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-md bg-black hover:bg-black/90 transition-all"
            aria-label="Calendar"
          >
            <MdCalendarToday className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </a>
        </div>
      </div>
      <div className="relative group transform hover:scale-105 transition-all mt-4 sm:mt-0">
        <div className="absolute -inset-0.5 bg-blue-600 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-all"></div>
        <button className="relative px-4 py-2 bg-black hover:bg-black/90 rounded-lg transition-all text-white font-bold text-base sm:text-lg whitespace-nowrap">
          Book a Call
        </button>
      </div>
    </div>
  )
}

export default Buttons