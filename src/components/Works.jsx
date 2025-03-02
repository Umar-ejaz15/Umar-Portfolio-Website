import { motion } from "framer-motion";
import React from "react";
import { FaCode, FaDesktop, FaMobile, FaPaintBrush } from "react-icons/fa";

const Works = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Front-End Development",
      description:
        "I build fast, responsive, and eye-catching websites using React, Next.js, and Tailwind CSS. Think of it like crafting the Iron Man suit—sleek, powerful, and optimized for performance.",
    },
    {
      icon: <FaDesktop />,
      title: "Back-End Development",
      description:
        "A strong front-end needs a solid backbone. I create scalable, high-performance server-side applications using Node.js and Express.js—because what's the point of a sports car if the engine is trash?",
    },
    {
      icon: <FaMobile />,
      title: "Full-Stack Development",
      description:
        "Why hire two devs when you can have one who does it all? I handle everything from UI to databases, making sure your app runs smoothly from end to end—like Batman working solo (but way less brooding).",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description:
        "A great product isn't just about function—it should feel right too. I design intuitive, user-friendly interfaces that make people want to stay, click, and engage (instead of rage-quitting after five seconds).",
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
          What I Do Best 🚀
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