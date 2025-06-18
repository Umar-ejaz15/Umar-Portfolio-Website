import React from "react";
import { MagicCard } from "./magicui/magic-card";
import { ShineBorder } from "./magicui/shine-border";
import { BorderBeam } from "./ui/border-beam";

const Cards = ({ data }) => {
  const { title, description, icon } = data;
  return (
    <MagicCard className="flex flex-col items-center justify-center p-6 bg-zinc-950 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-1">
        <div className="text-4xl text-blue-500 mb-4 transform transition-all duration-300 ease-in-out">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white hover:text-blue-400 transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 text-left leading-relaxed hover:text-gray-300 transition-colors duration-300">{description}</p>
    </MagicCard>
  );
};

export default Cards;