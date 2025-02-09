import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-2 md:p-2 lg:p-3 bg-zinc-900 w-full h-full flex flex-col justify-between hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-2xl lg:text-xl font-bold text-center md:text-left">
            Let’s Build Something Amazing
          </h2>
          <p className="text-lg text-gray-300">
            Got an idea? Need a web app that actually works? Or just want to chat about tech, anime, or why dark mode is superior? I’m all ears.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-2xl md:text-2xl text-white" />
            <h3 className="text-lg font-semibold">📩 Shoot me an email:</h3>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:official.umar.ejaz@gmail.com"
              className="text-lg break-words hover:text-blue-400 transition-colors duration-300"
            >
              official.umar.ejaz@gmail.com
            </a>
            <p className="text-lg text-gray-400">⏳ I reply fast—usually within 24 hours.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="text-xl md:text-2xl">🌐</div>
            <h3 className="text-lg font-semibold">Wanna Connect?</h3>
          </div>
          <p className="text-lg text-gray-300">
            I’m always up for cool collaborations, freelance gigs, and remote opportunities. Let’s connect and make things happen!
          </p>
          <ul className="flex flex-col  gap-4 md:gap-6">
            <li>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-2 text-lg hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-xl" />
               LinkedIn – Let’s talk business.
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                className="flex items-center gap-2 text-lg hover:text-gray-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-xl" />
                GitHub – See my work in action.
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl md:text-2xl">🚀</div>
            <h3 className="text-xl font-semibold">Ready to get started?</h3>
          </div>
          <p className="text-xl text-gray-300">
            Drop me a message, and let’s make it happen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;