import { MagicCard } from "@/components/magicui/magic-card";
import { Particles } from "@/components/magicui/particles";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

import LocomotiveScroll from "locomotive-scroll";
const Reviews = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const reviews = [
    {
      name: "Yasir Shabahz",
      Review:
        "Exceptional service! The team went above and beyond my expectations. Their attention to detail and professional approach made the entire experience outstanding.",
      initial: "Y",
    },
    {
      name: "Mian Zain",
      Review:
        "I'm thoroughly impressed with the quality of work. The results exceeded my expectations and I would highly recommend their services to anyone.",
      initial: "M",
    },
    {
      name: "Abdullah Ahmad",
      Review:
        "Great communication throughout the project. They delivered exactly what was promised, on time and with excellent quality.",
      initial: "A",
    },
    {
      name: "Syed Ghulam",
      Review:
        "Outstanding professionalism and expertise. They transformed our vision into reality with remarkable precision and creativity.",
      initial: "S",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative py-16 min-h-screen flex flex-col gap-10 justify-center items-center bg-gradient-to-b from-zinc-950 to-zinc-900"
    >
      <div className="absolute inset-0 w-full z-0 opacity-50">
        <Particles className="w-full h-full" quantity={100} />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-center mb-8 text-white"
        >
          Client Reviews
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 md:grid-cols-2"
        >
          {reviews.map((review, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="h-[300px]">
                <MagicCard className="bg-zinc-950 p-6 shadow-md h-full flex flex-col border border-zinc-700/50 hover:border-zinc-500/50 transition-colors duration-300 backdrop-blur-sm">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center mb-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                    >
                      {review.initial}
                    </motion.div>
                    <div className="ml-4">
                      <h3 className="font-semibold text-white">
                        {review.name}
                      </h3>
                    </div>
                  </motion.div>
                  <p className="text-gray-300 flex-grow leading-relaxed">
                    {review.Review}
                  </p>
                </MagicCard>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div>
        <div className="absolute inset-0 w-full h-full z-0 opacity-50">
          <Particles className="w-full h-full" quantity={100} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            Join us today and discover how we can help transform your
            experience.
          </p>
          <InteractiveHoverButton className="mt-10">
            Book a Call
          </InteractiveHoverButton>
        </div>
      </div>
    </motion.div>
  );
};

export default Reviews;
