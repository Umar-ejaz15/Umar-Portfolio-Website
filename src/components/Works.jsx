import React from "react";

const Works = () => {
  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="p-2 bg-zinc-900 w-full h-auto items-center flex flex-col justify-between hover:border-[2px] hover:border-white text-center text-2xl border-[2px] border-transparent rounded-lg transition-all duration-300">
        {new Date().toLocaleTimeString()}
      </div>
      <div className="p-8 bg-zinc-900 w-full h-full flex flex-col gap-7  hover:border-[2px] hover:border-white text-center items-center text-2xl border-[2px] border-transparent rounded-lg transition-all duration-300">
        <h1>Works</h1>
        <p>WIP</p>
      </div>
    </div>
  );
};

export default Works;