import { Particles } from "@/components/magicui/particles";
import React from "react";
import { motion } from "framer-motion";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { MagicCard } from "@/components/magicui/magic-card";
import { ShineBorder } from "@/components/magicui/shine-border";
import Cards from "@/components/Cards";

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
    <div
      id="about"
      className="w-full min-h-screen bg-zinc-900/70 to-black relative"
    >
      <div className="absolute inset-0 w-full h-full z-0">
        <Particles className="w-full h-full" quantity={150} />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10 max-w-6xl">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          variants={scaleIn}
        >
          <BoxReveal>
            <h1 className="text-center text-5xl md:text-6xl font-extrabold mb-8">
              <AnimatedGradientText>
                👋 Hey, I'm Umar Ejaz - Your Full-Stack Code-Slinging Wizard
              </AnimatedGradientText>
            </h1>
          </BoxReveal>
        </motion.div>

        <BoxReveal>
          <motion.p
            initial="initial"
            whileInView="whileInView"
            variants={fadeInUp}
            className="text-lg md:text-xl leading-relaxed bg-zinc-950p-8 rounded-xl backdrop-blur-sm text-gray-300"
          >
            Tired of searching for the right developer? Well, stop scrolling
            because you just FOUND HIM. I'm like Doctor Strange but with
            JavaScript - I build digital experiences that make people go "Whoa,
            this is NICE." Need someone who can take your rough idea and turn it
            into something FUNCTIONAL, BEAUTIFUL, and PROFITABLE? You're in the
            right place.
          </motion.p>
        </BoxReveal>

       <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 mt-10   items-start content-center gap-8"
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
              <BoxReveal>
                <Cards data={item} />
              </BoxReveal>
            </motion.div>
          ))}
        </motion.div>
        <MagicCard className="mt-20">
          <BoxReveal>
            <motion.div
              initial="initial"
              whileInView="whileInView"
              variants={fadeInUp}
              className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl backdrop-blur-sm relative  w-full overflow-hidden"
            >
              <div className="flex flex-col md:flex-row items-start gap-6 ">
                <span className="text-5xl bg-gradient-to-br from-zinc-700 to-zinc-800 p-6 rounded-lg shadow-xl">
                  🚀
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4 bg-clip-text  bg-gradient-to-r from-blue-400 to-purple-400">
                    Ready to Create Something Extraordinary?
                  </h3>
                  <p className="text-lg mb-6 text-gray-300 leading-relaxed">
                    I don't just build websites—I create digital experiences
                    that leave a lasting impression. With expertise in the
                    complete MERN stack and a passion for clean, efficient code,
                    I'm here to turn your vision into reality. Let's build
                    something that's not just functional, but absolutely
                    extraordinary.
                  </p>
                  <motion.p
                    whileHover={{ scale: 1.02 }}
                    className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 cursor-pointer"
                  >
                    Let's Transform Your Ideas Into Reality - Your Success Story
                    Starts Here! 🚀
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </BoxReveal>
        </MagicCard>
      </div>
    </div>
  );
};

export default WhyMe;
