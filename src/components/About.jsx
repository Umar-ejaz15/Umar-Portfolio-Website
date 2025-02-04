import React from "react";


import Buttons from "./Buttons";

const About = () => {
  return (
    <div className="px-3  bg-zinc-900 w-full h-[50%] flex justify-between hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-1000">
      <div className="flex justify-between items-center ">
        <div className="abt1 w-2/3 flex gap-16 flex-col">
          <div className="abttext text-lg ">
            <h1 className="text-white/60">welcome</h1>
            <p>
              Hi, I'm <strong className="text-bold uppercase">Umar Ejaz</strong>
              , a software developer with strong focus on the user experience,
              animations and micro interactions.
            </p>
            <p>
              Feel free to reach out to me if you have any projects in mind, or
              just to say hello.
            </p>
          </div>
        <Buttons/>
        </div>
        <div className="abt2 w-1/3 ">
          <img
            className="w-full h-full object-cover object-center"
            src="https://static.vecteezy.com/system/resources/thumbnails/048/216/761/small/modern-male-avatar-with-black-hair-and-hoodie-illustration-free-png.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;