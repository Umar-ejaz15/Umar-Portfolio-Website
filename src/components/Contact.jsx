import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-2 md:p-2 lg:p-3 bg-zinc-900 w-full h-full flex flex-col justify-between hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-300">
      <div className="flex flex-col gap-8">
        <h2 className="text-3xl md:text-4xl lg:text-2xl font-bold text-center md:text-left">Let's start working together!</h2>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-2xl md:text-xl text-white" />
            <h3 className="text-xl md:text-xl font-semibold">Email:</h3>
          </div>
          <a 
            href="mailto:official.umar.ejaz@gmail.com" 
            className="text-lg md:text-sm break-words hover:text-blue-400 transition-colors duration-300"
          >
            official.umar.ejaz@gmail.com
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl md:text-xl">🌐</div>
            <h3 className="text-xl md:text-xl font-semibold">Socials:</h3>
          </div>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
            <li>
              <a 
                href="https://linkedin.com" 
                className="flex items-center gap-2 text-lg md:text-sm hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-sm" />
                LinkedIn
              </a>
            </li>
            <li>
              <a 
                href="https://github.com" 
                className="flex items-center gap-2 text-lg md:text-sm hover:text-gray-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-sm" />
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;