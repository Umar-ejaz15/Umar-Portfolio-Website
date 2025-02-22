import { motion } from "framer-motion";
import React from "react";
import { FaCode, FaDesktop, FaMobile, FaPaintBrush } from "react-icons/fa";

const Works = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Front-end development",
      description:
        "Creating responsive and dynamic websites using modern technologies like React, Next.js, and Tailwind CSS.",
    },
    {
      icon: <FaDesktop />,
      title: " Backend Development",
      description:
        "Building robust and scalable server-side applications using Node.js and Express.js.",
    },
    {
      icon: <FaMobile />,
      title: "Full-stack Development",
      description:
        "Developing end-to-end web applications with both front-end and back-end components.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description:
        "Creating intuitive and beautiful user interfaces with focus on user experience and modern design principles.",
    },
  ];

  return (
    <motion.div className="flex flex-col gap-2 h-full">
      <motion.div
        className="bg-zinc-900 w-full text-center text-base md:text-xl border-[2px] border-transparent rounded-lg transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-zinc-800/50"
        data-aos="fade-down"
      >
        {new Date().toLocaleTimeString()}
      </motion.div>
      <motion.div
        className="p-1 md:p-6 bg-zinc-900 w-full h-full border-[2px] border-transparent rounded-lg transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-zinc-800/50"
        data-aos="fade-up"
      >
        <p
          className="text-xl text-zinc-200 mb-4 leading-relaxed"
          data-aos="fade-right"
        >
          I specialize in creating innovative digital solutions across various
          platforms and technologies. Here's what I can offer:
        </p>
        <h1
          className="text-2xl md:text-xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          data-aos="fade-left"
        >
          Services
        </h1>
        <motion.div className="grid grid-cols-1 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group flex items-center gap-4 p-4 bg-zinc-800/50 backdrop-blur-sm rounded-lg hover:bg-zinc-700 transition-all duration-300 hover:transform hover:scale-102 hover:shadow-xl hover:shadow-zinc-900/50"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <motion.div className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                {service.icon}
              </motion.div>
              <motion.div>
                <h2 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {service.title}
                </h2>
                <p className="text-md text-zinc-200 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Works;
