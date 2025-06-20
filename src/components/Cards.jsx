import React from "react";
import { MagicCard } from "./magicui/magic-card";
import { ShineBorder } from "./magicui/shine-border";
import { BorderBeam } from "./ui/border-beam";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
};

const Cards = ({ data }) => {
  return (
    <MagicCard className="group relative w-full border border-purple-400/20 hover:border-purple-700/20 h-full bg-zinc-950/90 backdrop-blur-sm rounded-2xl transition-all duration-300">
      <motion.div
        initial="initial"
        whileInView="animate"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
        className="flex flex-col px-8 py-6 rounded-xl md:flex-row items-start gap-6 relative z-10"
      >
        <span className="text-4xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-4 rounded-lg shadow-xl transform group-hover:scale-110 transition-transform duration-300">
          {data.icon}
        </span>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-purple-600 mb-4">
            {data.title}
          </h3>
          <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
            {data.description}
          </p>
        </div>
      <ShineBorder className="!border-purple-400/20 w-full" />
      </motion.div>
    </MagicCard>
  );
};

export default Cards;