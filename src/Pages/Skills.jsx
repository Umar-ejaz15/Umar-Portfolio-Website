import React, { useState, useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMongoose } from "react-icons/si";
import { motion } from "framer-motion";

const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-2xl" />, color: "from-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt className="text-2xl" />, color: "from-blue-500" },
    { name: "JavaScript", icon: <FaJs className="text-2xl" />, color: "from-yellow-500" },
    { name: "React.js", icon: <FaReact className="text-2xl" />, color: "from-cyan-500" },
    { name: "Node.js", icon: <FaNodeJs className="text-2xl" />, color: "from-green-500" },
    { name: "MongoDB", icon: <SiMongodb className="text-2xl" />, color: "from-emerald-500" },
    { name: "Express.js", icon: <SiExpress className="text-2xl" />, color: "from-gray-500" },
    { name: "Mongoose", icon: <SiMongoose className="text-2xl" />, color: "from-red-500" },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-16">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${skill.color} to-gray-800 p-6 rounded-xl hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="text-white text-4xl">
                  {skill.icon}
                </div>
                <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;