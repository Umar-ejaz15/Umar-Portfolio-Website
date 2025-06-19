import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";
import {
  SiExpress,
  SiMongoose,
  SiRedux,
  SiNetlify,
  SiVercel,
  SiPostman,
  SiFigma,
  SiFramer,
} from "react-icons/si";
import { Particles } from "@/components/magicui/particles";
import { MagicCard } from "@/components/magicui/magic-card";
import { motion } from "framer-motion";

import LocomotiveScroll from "locomotive-scroll";
const Skills = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const images = [
    { icon: <BiLogoMongodb size={64} color="#47A248" />, name: "MongoDB" },
    { icon: <SiMongoose size={64} color="#880000" />, name: "Mongoose" },
    { icon: <SiExpress size={64} color="#ffffff" />, name: "Express.js" },
    { icon: <FaReact size={64} color="#61DAFB" />, name: "React" },
    { icon: <FaNodeJs size={64} color="#339933" />, name: "Node.js" },
    { icon: <FaJs size={64} color="#F7DF1E" />, name: "JavaScript" },
    {
      icon: <BiLogoTailwindCss size={64} color="#06B6D4" />,
      name: "Tailwind CSS",
    },
    { icon: <FaBootstrap size={64} color="#7952B3" />, name: "Bootstrap" },
    { icon: <SiFramer size={64} color="#0055FF" />, name: "Framer Motion" },
    { icon: <SiRedux size={64} color="#764ABC" />, name: "Redux Toolkit" },
    { icon: <FaGitAlt size={64} color="#F05032" />, name: "Git" },
    { icon: <FaGithub size={64} color="#ffffff" />, name: "GitHub" },
    { icon: <SiNetlify size={64} color="#00C7B7" />, name: "Netlify" },
    { icon: <SiVercel size={64} color="#ffffff" />, name: "Vercel" },
    { icon: <SiPostman size={64} color="#FF6C37" />, name: "Postman" },
    { icon: <SiFigma size={64} color="#F24E1E" />, name: "Figma" },
  ];

  const boxVariant = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  return (
    <div className="relative bg-zinc-900/70 py-24 sm:py-32">
      <div className="absolute inset-0 w-full h-full z-0 opacity-50">
        <Particles className="w-full h-full" quantity={100} />
      </div>
      <div className="mx-auto container px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="mx-auto max-w-2xl lg:text-center"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl  font-bold leading-7 text-indigo-400"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Technologies I Work With
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 text-lg leading-8 text-gray-300"
          >
            Passion & Expertise 🚀 I don't just write code—I craft experiences.
            My passion lies in learning, experimenting, and pushing boundaries
            to build smarter, faster, and more intuitive digital solutions.
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="mt-16 container grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {images.map((item, index) => (
            <motion.div
              key={index}
              className="group container flex w-full"
              variants={boxVariant}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <MagicCard className="relative overflow-hidden rounded-lg bg-zinc-950 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:bg-zinc-900 w-full">
                <motion.div
                  className="flex justify-center"
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  }}
                >
                  {item.icon}
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="mt-4 text-center text-sm font-medium text-gray-300"
                >
                  {item.name}
                </motion.p>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
