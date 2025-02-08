import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-2 md:p-2 lg:p-3 bg-zinc-900 w-full h-full flex flex-col justify-between hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-300">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-xl font-bold text-center md:text-left">Let's start working together!</h2>
          <p className="text-sm md:text-xs text-gray-300">
            I'm always excited to collaborate on innovative projects and explore new opportunities. Whether you have a project in mind, want to discuss potential collaborations, or just want to say hello, I'd love to hear from you!
          </p>
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-2xl md:text-xl text-white" />
            <h3 className="text-xl md:text-lg font-semibold">Email:</h3>
          </div>
          <div className="flex flex-col gap-2">
            <a 
              href="mailto:official.umar.ejaz@gmail.com" 
              className="text-lg md:text-xs break-words hover:text-blue-400 transition-colors duration-300"
            >
              official.umar.ejaz@gmail.com
            </a>
            <p className="text-xs text-gray-400">Response time: Within 24 hours</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl md:text-xl">🌐</div>
            <h3 className="text-xl md:text-lg font-semibold">Connect With Me:</h3>
          </div>
          <p className="text-xs text-gray-300">Follow my journey and let's connect on social media!</p>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6">
            <li>
              <a 
                href="https://linkedin.com" 
                className="flex items-center gap-2 text-lg md:text-xs hover:text-blue-400 transition-colors duration-300"
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
                className="flex items-center gap-2 text-lg md:text-xs hover:text-gray-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-sm" />
                Github
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl md:text-xl">⚡</div>
            <h3 className="text-xl md:text-lg font-semibold">Quick Facts:</h3>
          </div>
          <ul className="text-xs text-gray-300 list-disc list-inside">
            <li>Available for freelance projects</li>
            <li>Open to remote opportunities</li>
            <li>Based in GMT+5 timezone</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;