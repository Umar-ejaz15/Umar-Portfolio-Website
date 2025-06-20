import { Particles } from "@/components/magicui/particles";
import React from "react";
import { motion } from "framer-motion";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { MagicCard } from "@/components/magicui/magic-card";
import { ShineBorder } from "@/components/magicui/shine-border";
import Cards from "@/components/Cards";
import { Helmet } from "react-helmet";

const WhyMe = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const scaleIn = {
    initial: { scale: 0.95, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const data = [
    {
      icon: "💻",
      title: "MERN STACK MASTERY",
      description:
        "MongoDB, Express.js, React, Node.js - I know these like the back of my hand. Your project gets the benefit of full-stack expertise, ensuring seamless integration from front to back.",
    },
    {
      icon: "⚡",
      title: "SPEED & SCALABILITY",
      description:
        "I build web apps that are FAST and SCALABLE. No sluggish loading times or performance bottlenecks. Your users get a smooth, responsive experience that keeps them coming back.",
    },
    {
      icon: "✨",
      title: "CLEAN & EFFICIENT CODE",
      description:
        "No overcomplicated jargon or unnecessary fluff. I write clean, efficient code that's easy to maintain and scale. Your project stays organized and manageable, saving time and money in the long run.",
    },
    {
      icon: "💎",
      title: "VALUE FOR MONEY",
      description:
        "Top-tier work at competitive rates. I deliver high-quality solutions that won't burn a hole in your pocket. Get professional development services that provide real value for your investment.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Me - Umar Ejaz | Full Stack Developer</title>
        <meta name="description" content="Full-stack developer specializing in MERN stack development. Expert in MongoDB, Express.js, React, and Node.js with a focus on clean, efficient, and scalable code." />
        <meta name="keywords" content="Umar Ejaz, Full Stack Developer, MERN Stack, Web Development, JavaScript, React Developer, Node.js Developer" />
        <meta property="og:title" content="About Me - Umar Ejaz | Full Stack Developer" />
        <meta property="og:description" content="Full-stack developer specializing in MERN stack development. Expert in MongoDB, Express.js, React, and Node.js with a focus on clean, efficient, and scalable code." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Me - Umar Ejaz | Full Stack Developer" />
        <meta name="twitter:description" content="Full-stack developer specializing in MERN stack development. Expert in MongoDB, Express.js, React, and Node.js with a focus on clean, efficient, and scalable code." />
      </Helmet>
      <div
        id="about"
        className="w-full min-h-screen bg-zinc-900/70 to-black relative px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <Particles className="w-full h-full" quantity={150} />
        </div>

        <div className="container mx-auto py-12 sm:py-16 md:py-24 relative z-10 max-w-6xl">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            variants={scaleIn}
          >
            <div>
              <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold mb-4 sm:mb-8">
                <AnimatedGradientText>
                  👋 Hey, I'm Umar Ejaz - Your Full-Stack Code-Slinging Wizard
                </AnimatedGradientText>
              </h1>
            </div>
          </motion.div>

          <MagicCard>
            <div>
              <motion.p
                initial="initial"
                whileInView="whileInView"
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl leading-relaxed bg-zinc-950 p-4 sm:p-6 md:p-8 rounded-xl backdrop-blur-sm text-gray-300"
              >
                Tired of searching for the right developer? Well, stop scrolling
                because you just found him. I'm like Doctor Strange but with
                JavaScript - I build digital experiences that make people go
                "Whoa, this is nice." Need someone who can take your rough idea
                and turn it into something functional, beautiful, and profitable?
                You're in the right place.
                <ShineBorder />
              </motion.p>
            </div>
          </MagicCard>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 mt-6 sm:mt-8 md:mt-10 gap-4 sm:gap-6 md:gap-8"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.2 }}
          >
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.1, delay: index * 0.1 + 0.2 }}
              >
                <div>
                  <Cards data={item} />
                </div>
              </motion.div>
            ))}
          </motion.div>
          <MagicCard className="mt-10 sm:mt-16 md:mt-20">
            <div>
              <motion.div
                initial="initial"
                whileInView="whileInView"
                variants={fadeInUp}
                className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-sm relative w-full overflow-hidden"
              >
                <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
                  <span className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-br from-zinc-700 to-zinc-800 p-4 sm:p-6 rounded-lg shadow-xl">
                    🚀
                  </span>
                  <div className="p-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-3 sm:mb-4 bg-clip-text bg-gradient-to-r from-blue-900 to-purple-400">
                      Ready to Create Something Extraordinary?
                    </h3>
                    <p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-300 leading-relaxed">
                      I don't just build websites—I create digital experiences
                      that leave a lasting impression. With expertise in the
                      complete MERN stack and a passion for clean, efficient code,
                      I'm here to turn your vision into reality. Let's build
                      something that's not just functional, but absolutely
                      extraordinary.
                    </p>
                    <motion.p
                      whileHover={{ scale: 1.02 }}
                      className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 cursor-pointer"
                    >
                      Let's Transform Your Ideas Into Reality - Your Success Story
                      Starts Here! 🚀
                    </motion.p>
                  </div>{" "}
                </div>
                <ShineBorder />
              </motion.div>
            </div>
          </MagicCard>
        </div>
      </div>
    </>
  );
};

export default WhyMe;