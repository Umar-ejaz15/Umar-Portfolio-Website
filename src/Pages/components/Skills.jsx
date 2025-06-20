import React from "react";
import { Helmet } from "react-helmet";
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
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ShineBorder } from "@/components/magicui/shine-border";

const Skills = () => {
  const images = [
    { icon: <BiLogoMongodb size={64} color="#47A248" />, name: "MongoDB" },
    { icon: <SiMongoose size={64} color="#880000" />, name: "Mongoose" },
    { icon: <SiExpress size={64} color="#ffffff" />, name: "Express.js" },
    { icon: <FaReact size={64} color="#61DAFB" />, name: "React" },
    { icon: <FaNodeJs size={64} color="#339933" />, name: "Node.js" },
    { icon: <FaJs size={64} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <BiLogoTailwindCss size={64} color="#06B6D4" />, name: "Tailwind CSS" },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Technical Skills | Umar - Web Developer Portfolio</title>
        <meta name="description" content="Explore my technical skills and expertise in web development including React, Node.js, MongoDB, and more. Full-stack developer proficient in modern web technologies." />
        <meta name="keywords" content="web development, React, Node.js, MongoDB, JavaScript, full-stack developer, Umar, technical skills, programming" />
        <meta property="og:title" content="Technical Skills | Umar - Web Developer Portfolio" />
        <meta property="og:description" content="Explore my technical skills and expertise in web development including React, Node.js, MongoDB, and more." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black py-16 sm:py-24">
        <div className="absolute inset-0 w-full h-full z-0 opacity-30">
          <Particles className="w-full h-full" quantity={150} />
        </div>
        <div className="relative z-10 mx-auto container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="mx-auto max-w-3xl text-center space-y-8"
          >
            <AnimatedGradientText>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
                Technical Skills
              </h1>
            </AnimatedGradientText>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Technologies I Work With
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Passion & Expertise 🚀 I don't just write code—I craft experiences.
                My passion lies in learning, experimenting, and pushing boundaries
                to build smarter, faster, and more intuitive digital solutions.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
           
            className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          >
            <AnimatePresence>
              {images.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="relative">
                    <MagicCard className="relative h-full overflow-hidden rounded-xl bg-gradient-to-b from-zinc-800/50 to-zinc-900/50 p-4 backdrop-blur-sm transition-all duration-300 hover:from-zinc-700/50 hover:to-zinc-800/50">
                      <motion.div
                        className="flex items-center justify-center p-4"
                        whileHover={{
                          rotate: 360,
                          scale: 1.2,
                          transition: { duration: 0.6, ease: "easeInOut" },
                        }}
                      >
                        {React.cloneElement(item.icon, {
                          size: windowWidth < 640 ? 40 : windowWidth < 768 ? 50 : 64,
                        })}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-center"
                      >
                        <p className="text-sm sm:text-base font-semibold text-gray-200 group-hover:text-white transition-colors">
                          {item.name}
                        </p>
                      </motion.div>
                    </MagicCard>
                    <ShineBorder className="absolute inset-0 rounded-xl" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Skills;