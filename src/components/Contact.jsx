import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-4 md:p-6 mt-2 lg:px-4 bg-zinc-900 w-full h-full flex flex-col justify-between hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-300 shadow-lg">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-3xl lg:text-2xl font-bold text-center md:text-left bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Whether you need a cutting-edge web application, want to discuss innovative tech solutions, or just chat about the latest in development trends - I'm here to turn ideas into reality.
          </p>
        </div>

        <div className="flex flex-col gap-4 hover:bg-zinc-800 p-4 rounded-lg transition-all duration-300">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-2xl md:text-3xl text-blue-400" />
            <h3 className="text-xl font-semibold">Get in Touch</h3>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:official.umar.ejaz@gmail.com"
              className="text-lg break-words hover:text-blue-400 transition-colors duration-300 flex items-center gap-2"
            >
              <span className="text-blue-400">📩</span> official.umar.ejaz@gmail.com
            </a>
            <p className="text-lg text-gray-400 flex items-center gap-2">
              <span className="text-yellow-500">⚡</span> Quick response guaranteed - typically within 24 hours
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 hover:bg-zinc-800 p-4 rounded-lg transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="text-2xl md:text-3xl text-purple-400">🌐</div>
            <h3 className="text-xl font-semibold">Let's Connect</h3>
          </div>
          <p className="text-lg text-gray-300 leading-relaxed">
            Open to exciting collaborations, challenging freelance projects, and remote opportunities. Let's join forces and create something amazing together!
          </p>
          <ul className="flex flex-col gap-4 md:gap-6">
            <li>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-3 text-lg hover:text-blue-400 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                <span>Connect on LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                className="flex items-center gap-3 text-lg hover:text-gray-400 transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                <span>Explore my GitHub</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="text-2xl md:text-3xl text-yellow-400">🚀</div>
            <h3 className="text-2xl font-bold">Ready to Launch?</h3>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Your next big project is just a message away. Let's bring your vision to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;