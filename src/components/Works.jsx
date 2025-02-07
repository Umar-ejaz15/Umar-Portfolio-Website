import React from "react";
import { FaCode, FaDesktop, FaMobile, FaPaintBrush } from "react-icons/fa";

const Works = () => {
  const services = [
    { 
      icon: <FaCode />, 
      title: "Web Development",
      description: "Creating responsive and dynamic websites using modern technologies like React, Next.js, and Tailwind CSS."
    },
    { 
      icon: <FaDesktop />, 
      title: "Software Development",
      description: "Building robust desktop applications and enterprise software solutions with cutting-edge technologies."
    },
    { 
      icon: <FaMobile />, 
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications for iOS and Android using React Native and Flutter."
    },
    { 
      icon: <FaPaintBrush />, 
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with focus on user experience and modern design principles."
    },
  ];

  return (
    <div className="flex flex-col gap-2 h-full ">
      <div className=" bg-zinc-900 w-full text-center text-base md:text-xl border-[2px] border-transparent rounded-lg transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-zinc-800/50">
        {new Date().toLocaleTimeString()}
      </div>
      <div className="p-1 md:p-6 bg-zinc-900 w-full h-full border-[2px] border-transparent rounded-lg transition-all duration-300 hover:border-white hover:shadow-lg hover:shadow-zinc-800/50">
        <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
          I specialize in creating innovative digital solutions across various platforms and technologies. Here's what I can offer:
        </p>
        <h1 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Services</h1>
        <div className="grid grid-cols-1 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 p-4 bg-zinc-800/50 backdrop-blur-sm rounded-lg hover:bg-zinc-700 transition-all duration-300 hover:transform hover:scale-102 hover:shadow-xl hover:shadow-zinc-900/50"
            >
              <div className="text-2xl text-white group-hover:text-blue-400 transition-colors duration-300">
                {service.icon}
              </div>
              <div>
                <h2 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {service.title}
                </h2>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;