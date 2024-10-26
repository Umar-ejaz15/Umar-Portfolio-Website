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

  const calculateEyePosition = (containerRect, mouseX, mouseY) => {
    const deltaX = mouseX - (containerRect.left + containerRect.width / 2);
    const deltaY = mouseY - (containerRect.top + containerRect.height / 2);
    const angle = Math.atan2(deltaY, deltaX);
    const maxDistance = 5;
    const distance = Math.min(
      maxDistance,
      Math.sqrt(deltaX ** 2 + deltaY ** 2) / 50
    );

    return {
      transform: `translate(${Math.cos(angle) * distance}px, ${
        Math.sin(angle) * distance
      }px)`,
    };
  };

  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-lg md:text-xl lg:text-2xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-lg md:text-xl lg:text-2xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-lg md:text-xl lg:text-2xl" /> },
    { name: "React.js", icon: <FaReact className="text-lg md:text-xl lg:text-2xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-lg md:text-xl lg:text-2xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-lg md:text-xl lg:text-2xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-lg md:text-xl lg:text-2xl" /> },
    { name: "Mongoose", icon: <SiMongoose className="text-lg md:text-xl lg:text-2xl" /> },
  ];
  const radius = window.innerWidth < 640 ? 130 : window.innerWidth < 1024 ? 180 : 220;
  const totalSkills = skills.length;

  return (
    <div className="w-full h-screen relative bg-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative scale-90 md:scale-95 lg:scale-100">
          <div className="flex gap-2 md:gap-3 lg:gap-4">
            <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 bg-white rounded-full flex items-center justify-center">
              <div
                className="relative w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gray-950 rounded-full flex items-center justify-center"
                style={calculateEyePosition(
                  document.querySelector(".w-28")?.getBoundingClientRect() || {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                  },
                  mousePosition.x,
                  mousePosition.y
                )}
              >
                <div
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-black rounded-full flex items-center justify-center"
                  style={calculateEyePosition(
                    document.querySelector(".w-28")?.getBoundingClientRect() || {
                      left: 0,
                      top: 0,
                      width: 0,
                      height: 0,
                    },
                    mousePosition.x,
                    mousePosition.y
                  )}
                >
                  <div
                    className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 bg-white rounded-full transition-all duration-75"
                    style={calculateEyePosition(
                      document.querySelector(".w-28")?.getBoundingClientRect() || {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0,
                      },
                      mousePosition.x,
                      mousePosition.y
                    )}
                  ></div>
                </div>
              </div>
            </div>
            <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 bg-white rounded-full flex items-center justify-center">
              <div
                className="relative w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gray-950 rounded-full flex items-center justify-center"
                style={calculateEyePosition(
                  document.querySelectorAll(".w-28")[1]?.getBoundingClientRect() || {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0,
                  },
                  mousePosition.x,
                  mousePosition.y
                )}
              >
                <div
                  className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-black rounded-full flex items-center justify-center"
                  style={calculateEyePosition(
                    document.querySelectorAll(".w-28")[1]?.getBoundingClientRect() || {
                      left: 0,
                      top: 0,
                      width: 0,
                      height: 0,
                    },
                    mousePosition.x,
                    mousePosition.y
                  )}
                >
                  <div
                    className="w-2.5 h-2.5 md:w-3 md:h-3 lg:w-3.5 lg:h-3.5 bg-white rounded-full transition-all duration-75"
                    style={calculateEyePosition(
                      document.querySelectorAll(".w-28")[1]?.getBoundingClientRect() || {
                        left: 0,
                        top: 0,
                        width: 0,
                        height: 0,
                      },
                      mousePosition.x,
                      mousePosition.y
                    )}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            {skills.map((skill, index) => {
              const angle = (index * 2 * Math.PI) / totalSkills;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              return (
                <motion.div
                  key={index}
                  className="absolute px-2 md:px-3 lg:px-4 py-1.5 md:py-2 lg:py-2.5 bg-gradient-to-tl from-blue-500 text-white rounded-full hover:bg-gray-700 hover:scale-110 hover:rotate-12 
                  transition-all duration-200 ease-in-out
                  -translate-x-1/2 -translate-y-1/2
                  flex items-center gap-1.5 md:gap-2 lg:gap-2.5 text-xs md:text-sm lg:text-base"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  {skill.icon}
                  {skill.name}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;