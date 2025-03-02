import { FaCode, FaLaptopCode, FaUserNinja } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Roboava from "./Roboava";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";

const About = () => {
  // motion
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.from(aboutRef.current, {
      duration: 1,
      opacity: 0,
      y: -200,
      rotate: 360,
      height: 1000,
      ease: "power3.out",
    })
      .from(
        textRef.current.children,
        {
          duration: 0.8,
          opacity: 0,
          y: 50,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        imageRef.current,
        {
          duration: 1,
          opacity: 0,
          x: 100,
          ease: "power3.out",
        },
        "-=0.8"
      );
  }, []);

  return (
    <div
      ref={aboutRef}
      className="px-1 py-8 bg-zinc-900 w-full h-auto flex justify-between hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-700 shadow-lg"
    >
      <div className="flex w-full flex-col lg:flex-row gap-4 sm:gap-6">
        <div className="abt1 w-full md:w-2/3 flex gap-4 sm:gap-8 lg:gap-12 flex-col p-6">
          <div ref={textRef} className="abttext text-base sm:text-lg">
            <h1 className="text-white/80 flex items-center gap-3 flex-wrap text-lg sm:text-xl lg:text-2xl font-semibold">
              <span className="animate-wave">👋</span> Tired of Searching for
              the Right Developer?
              <FaCode className="text-blue-400 animate-pulse" />
            </h1>
            <p className="my-3 sm:my-4 text-lg md:text-xl">
              Well, stop scrolling because you just FOUND HIM. I'm Umar Ejaz,
              your Full-Stack Code-Slinging Wizard (yeah, like Doctor Strange
              but with JavaScript).
            </p>
            <h1 className="text-xl md:text-2xl font-medium leading-relaxed">
              I build web apps that are{" "}
              <strong className="text-blue-400">FAST, SCALABLE</strong>, and
              actually make sense.
              <FaLaptopCode className="text-yellow-400 animate-bounce inline-block ml-2" />
            </h1>

            <p className="my-4 flex text-lg md:text-xl items-center gap-2 flex-wrap text-gray-200 leading-relaxed">
              Looking for someone who knows{" "}
              <strong className="text-green-300">
                MERN (MongoDB, Express.js, React, Node.js)
              </strong>{" "}
              like the back of their hand? Yep, that's me. I don't just build
              websites—I build digital experiences that make people go, "Whoa,
              this is NICE."
            </p>

            <p className="mb-4 text-lg md:text-xl text-gray-200 leading-relaxed">
              Why work with me? Because you need a developer who gets it.
              Someone who can take your rough idea, refine it, and turn it into
              something <strong>FUNCTIONAL, BEAUTIFUL, and PROFITABLE</strong>.
              No overcomplicated jargon, no unnecessary fluff—just clean,
              efficient code that works like magic.
            </p>

            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              Still not convinced? Go ahead, check out other developers. Their
              rates will make you run back faster than Flash. I deliver top-tier
              work at a price that won't burn a hole in your pocket. 🚀 Let's
              turn your idea into something extraordinary.
              <strong className="ml-2 uppercase hover:text-blue-600 text-blue-500 underline transition-colors">
                <a
                  href="https://calendly.com/official-umer-ejaz/30min"
                  className="hover:text-blue-400"
                >
                  👉 Book a Call and let's make magic happen
                </a>
              </strong>
            </p>
          </div>
        </div>
        <div
          ref={imageRef}
          className="w-full relative  lg:w-1/3 h-[400px] lg:h-auto object-cover object-center flex justify-center items-center"
        >
          <motion.img
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            whileInView={{ scale: 1 }}
            className="w-full h-2/3 absolute"
            src="/avatar.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;