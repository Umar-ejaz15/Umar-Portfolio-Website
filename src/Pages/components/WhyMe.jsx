import React from "react";
import { motion } from "framer-motion";
import { Particles } from "@/components/magicui/particles";
import { MagicCard } from "@/components/magicui/magic-card";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import Cards from "@/components/Cards";

const data = [
  {
    icon: "💡",
    title: "Innovative Solutions",
    description:
      "Crafting cutting-edge, scalable applications that turn your ideas into reality using modern tech.",
  },
  {
    icon: "🤝",
    title: "Collaborative Approach",
    description:
      "Transparent and open communication with regular feedback loops to ensure your satisfaction.",
  },
  {
    icon: "⚡",
    title: "Quality & Performance",
    description:
      "Focused on clean, optimized code and performance without compromising user experience.",
  },
  {
    icon: "🎯",
    title: "Impactful Results",
    description:
      "Delivering real business value with solutions that elevate brands and streamline operations.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

import LocomotiveScroll from "locomotive-scroll";
const WhyMe = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black to-zinc-900 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Particles */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-50">
        <Particles className="w-full h-full" quantity={100} />
      </div>

      {/* Container */}
      <div className="max-w-6xl mx-auto relative z-10 space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
        >
          <AnimatedGradientText>
            Elevate Your Vision With Expert Development 🚀
          </AnimatedGradientText>
        </motion.h2>

        {/* Introduction */}
        <div className="px-4 sm:px-6 lg:px-8">
          <MagicCard className="bg-zinc-900/80 p-6 sm:p-8 rounded-2xl border border-zinc-900 backdrop-blur-md">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              In today's digital world, code alone isn't enough — you need a
              strategic partner who understands your business and translates it
              into powerful technical solutions.
            </p>
          </MagicCard>
        </div>

        {/* Feature Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8"
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
              className="w-full"
            >
              <Cards data={item} />
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA Section */}
        <div className="px-4 sm:px-6 lg:px-8">
          <MagicCard className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-zinc-900/90 to-zinc-800/80 border border-zinc-700/50 backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <span className="text-3xl sm:text-4xl animate-pulse">💫</span>
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-3 sm:mb-4">
                  Your Vision, Amplified
                </h3>
                <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6">
                  Let's transform your ideas into something extraordinary. I
                  bring strategy, performance, and creativity together to create
                  real impact — not just results.
                </p>
                <motion.p
                  whileHover={{ scale: 1.02 }}
                  className="text-base sm:text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 cursor-pointer"
                >
                  🌟 Ready to Build Something Game-Changing?
                </motion.p>
              </div>
            </div>
          </MagicCard>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;