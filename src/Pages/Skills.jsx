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
    { name: "HTML5", icon: <FaHtml5 className="text-3xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-3xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-3xl" /> },
    { name: "React.js", icon: <FaReact className="text-3xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-3xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-3xl" /> },
    { name: "Express.js", icon: <SiExpress className="text-3xl" /> },
    { name: "Mongoose", icon: <SiMongoose className="text-3xl" /> },
  ];
  const radius = 250;
  const totalSkills = skills.length;

  return (
    <div className="w-full h-screen relative bg-black ">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="flex gap-5">
            <div className="relative w-56 h-56 bg-white rounded-full flex items-center justify-center">
              <div
                className="relative w-20 h-20 bg-gray-950 rounded-full flex items-center justify-center"
                style={calculateEyePosition(
                  document.querySelector(".w-56")?.getBoundingClientRect() || {
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
                  className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
                  style={calculateEyePosition(
                    document
                      .querySelector(".w-56")
                      ?.getBoundingClientRect() || {
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
                    className="w-4 h-4 bg-white rounded-full transition-all duration-75"
                    style={calculateEyePosition(
                      document
                        .querySelector(".w-56")
                        ?.getBoundingClientRect() || {
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
            <div className="relative w-56 h-56 bg-white rounded-full flex items-center justify-center">
              <div
                className="relative w-20 h-20 bg-gray-950 rounded-full flex items-center justify-center"
                style={calculateEyePosition(
                  document
                    .querySelectorAll(".w-56")[1]
                    ?.getBoundingClientRect() || {
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
                  className="w-8 h-8 bg-black rounded-full flex items-center justify-center"
                  style={calculateEyePosition(
                    document
                      .querySelectorAll(".w-56")[1]
                      ?.getBoundingClientRect() || {
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
                    className="w-4 h-4 bg-white rounded-full transition-all duration-75"
                    style={calculateEyePosition(
                      document
                        .querySelectorAll(".w-56")[1]
                        ?.getBoundingClientRect() || {
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
                  className="absolute px-6 py-3 bg-gradient-to-tl from-blue-500  text-white  rounded-full hover:bg-gray-700 hover:scale-116 hover:rotate-12 
                  transition-all duration-200 ease-in-out
                 -translate-x-1/2 -translate-y-1/2
                  flex items-center gap-3 text-lg"
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
