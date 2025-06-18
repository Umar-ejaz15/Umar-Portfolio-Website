import Cards from "@/components/Cards";
import { Particles } from "@/components/magicui/particles";
import React from "react";
import { FaCode, FaServer, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import { BoxReveal } from "@/components/magicui/box-reveal";

const Services = () => {
  const data = [
    {
      title: "Front-End Development",
      description:
        "Creating beautiful, responsive, and high-performance web applications using modern technologies like React, Next.js, and Tailwind CSS. Focused on delivering exceptional user experiences.",
      icon: <FaCode className="text-3xl text-blue-400" />,
    },
    {
      title: "Back-End Development",
      description:
        "Developing robust and scalable server-side solutions using Node.js, Express.js, and various databases. Implementing secure APIs and efficient data management systems.",
      icon: <FaServer className="text-3xl text-green-400" />,
    },
    {
      title: "Full-Stack Development",
      description:
        "Comprehensive end-to-end development combining front-end and back-end expertise. Building complete web solutions from database design to user interface implementation.",
      icon: <FaLaptopCode className="text-3xl text-purple-400" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive, aesthetically pleasing interfaces with a focus on user experience. Implementing modern design principles and conducting user research for optimal results.",
      icon: <FaPaintBrush className="text-3xl text-pink-400" />,
    },
  ];
  return (
    <div
      id="services"
      className="w-full min-h-screen bg-transparent bg-gradient-to-b from-black to-zinc-900 flex items-center justify-center py-16 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full z-0 opacity-50">
        <Particles className="w-full h-full" quantity={100} />
      </div>
      <div className="max-w-6xl flex justify-center flex-col items-center mx-auto z-10">
        <BoxReveal>
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            My Services
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Delivering high-quality solutions tailored to your specific needs. Each service is crafted with attention to detail and modern best practices.
          </p>
        </BoxReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 items-start content-center gap-8">
          {data.map((item, index) => (
            <BoxReveal key={index}>
              <Cards data={item} />
            </BoxReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;