import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="p-4 md:p-6 mt-2 lg:px-4 bg-white dark:bg-[#18181b] w-full h-full flex flex-col justify-between hover:border-[2px] hover:border-blue-600 dark:hover:border-zinc-400 border-[2px] border-transparent rounded-lg transition-all duration-300 shadow-lg">
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl md:text-3xl lg:text-2xl font-bold text-center md:text-left text-gray-900 dark:text-white">
            🚀 Let's Talk!
          </h2>
          <p className="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
            Impressed? Curious? Or just want to know what I'd charge for your project? Drop me a message, send an email, or even book a call—why not?
          </p>
        </div>

        <div className="flex flex-col gap-4 hover:bg-gray-100 dark:hover:bg-zinc-700 p-4 rounded-lg transition-all duration-300">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-2xl md:text-3xl text-blue-600 dark:text-zinc-300" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Email:</h3>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:official.umar.ejaz@gmail.com"
              className="text-lg break-words hover:text-blue-600 dark:hover:text-zinc-300 transition-colors duration-300 flex items-center gap-2 text-gray-600 dark:text-zinc-300"
            >
              official.umar.ejaz@gmail.com
            </a>
            <p className="text-lg text-gray-600 dark:text-zinc-300 flex items-center gap-2">
              ⚡ Fast replies, no waiting—You'll hear back within 24 hours (time zones, you know 😉)
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 hover:bg-gray-100 dark:hover:bg-zinc-700 p-4 rounded-lg transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="text-2xl md:text-3xl text-orange-500">💬</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Reach out anytime, anywhere</h3>
          </div>
          <p className="text-lg text-gray-600 dark:text-zinc-300 leading-relaxed">
            I'm always up for a chat! Got an idea? Let's make it happen.
          </p>
          <ul className="flex flex-col gap-4 md:gap-6">
            <li>
              <a
                href="https://linkedin.com"
                className="flex items-center gap-3 text-lg hover:text-blue-600 dark:hover:text-zinc-300 transition-all duration-300 group text-gray-600 dark:text-zinc-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                <span> LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com"
                className="flex items-center gap-3 text-lg hover:text-gray-900 dark:hover:text-white transition-all duration-300 group text-gray-600 dark:text-zinc-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl group-hover:scale-110 transition-transform duration-300" />
                <span> GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;