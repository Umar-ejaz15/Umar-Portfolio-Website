import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaLaptopCode, FaUserNinja, FaReact, FaJs, FaDatabase, FaServer, FaBrain } from "react-icons/fa";
import Buttons from "./Buttons";
import Roboava from "./Roboava";

const About = () => {
  return (
    <div className="px-2 bg-zinc-900 w-full h-auto flex justify-between hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-1000">
      <div className="flex w-full flex-col lg:flex-row  gap-2 sm:gap-2">
        <div className="abt1 w-full lg:w-2/3 flex gap-4 sm:gap-8 lg:gap-16 flex-col p-4">
          <div className="abttext text-sm sm:text-base">
            <h1 className="text-white/60 flex items-center gap-2 flex-wrap">
              <span className="animate-wave">👋</span>
              <span className="hover:text-blue-400 transition-all duration-300">Stop Struggling. Start Building.</span>
              <FaCode className="text-blue-400 animate-pulse" />
            </h1>
            <p className="my-2 sm:my-4 text-xl flex items-center gap-2 flex-wrap">
              <FaUserNinja className="text-green-400" />
              Hey, I'm <strong className="text-bold uppercase hover:text-blue-400 transition-colors">Umar</strong>

            </p>
            <h1>– The Web Developer You Need! You need a <strong> kickass web</strong> app that works smoothly, looks great, and actually <strong> delivers results? Well, guess what? I'm the MAN for this job. </strong>
              <FaLaptopCode className="text-yellow-400 animate-bounce" /></h1>

            <p className="mb-2 sm:mb-4 flex text-lg items-center gap-2 flex-wrap text-gray-200">
              <FaBrain className="text-pink-400 animate-pulse" />
              I don't just build websites—I craft <strong>

                fast, scalable, and user-friendly
              </strong>
              applications that make your life (and your users' lives) easier. Whether it's an
              <strong>


                e-commerce store, a real-time tracking app, or a sleek interactive website, I turn your vision into reality</strong>—without the tech headaches. <strong>
                Confused?

              </strong>
              Don't be. I got this. With the <strong>

                MERN stack (MongoDB, Express.js, React.js, Node.js)
              </strong>
              as my weapon of choice, I bring ideas to life—clean code, smooth animations, and seamless functionality included. Need an app that runs like

              <strong>


                The Flash? A website that wows like Iron Man's tech? Let's build it.</strong> Still scrolling? Stop. Let's make something awesome together. 🚀 <strong className=" uppercase hover:text-blue-600 text-blue-500 underline  " ><a href="https://calendly.com/official-umer-ejaz/30min">Hit me up!</a></strong>
            </p>
          </div>
          {/* <Buttons /> */}
        </div>
        <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px]">
          <Roboava />
        </div>
      </div>
    </div>
  );
};

export default About;