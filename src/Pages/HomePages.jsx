import { motion } from "framer-motion";
import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

const HomePages = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 5,
    });
    return () => scroll.destroy();
  }, []);

  return (
    <div
      data-scroll-container
      className="w-full min-h-screen leading-none tracking-tighter text-zinc-400 flex justify-center flex-col bg-white p-4 md:p-6 lg:p-8 xl:p-10"
    >
      <div className="ml-4 md:ml-6 lg:ml-8 xl:ml-10">
        <motion.h1
          data-scroll
          data-scroll-speed="-.1"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase selection:bg-purple-500 selection:text-white cursor-text"
        >
          Revolutionizing Web Development
        </motion.h1>

        <motion.h1
          data-scroll
          data-scroll-speed="-.2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase ml-4 md:ml-6 lg:ml-8 xl:ml-10 text-zinc-500 selection:bg-purple-500 selection:text-white cursor-text"
        >
          Building Lightning-Fast & Ultra-Secure Websites
        </motion.h1>
        <motion.h1
          data-scroll
          data-scroll-speed="-.3"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.4 }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase selection:bg-purple-500 selection:text-white cursor-text"
        >
          Empowering Your Digital Success
        </motion.h1>
      </div>
    </div>
  );
};

export default HomePages;
