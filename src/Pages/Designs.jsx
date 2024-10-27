import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Designs = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const headings = document.querySelectorAll("h1");
    
    headings.forEach((heading, index) => {
      gsap.from(heading, {
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          end: "bottom 100%",
          scrub: 3,
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 150,
        rotation: 5,
        scale: 0.9,
        duration: 1.5,
        ease: "power2.out",
        delay: index * 0.3
      });
    });
  }, []);

  return (
    <div className="w-full h-auto mt-10 ">
      <div className="text-[10vw] font-black text-center uppercase tracking-tighter h-auto flex flex-col justify-center items-center">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-500 hover:to-purple-500 transition-all duration-300">Impactful design </h1>
      </div>
      <div className="text-[10vw] font-black text-center uppercase tracking-tighter h-auto flex flex-col justify-center items-center">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300">is the</h1>
      </div>
      <div className="text-[10vw] font-black text-center uppercase tracking-tighter h-auto flex flex-col justify-center items-center">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-teal-500 hover:to-emerald-500 transition-all duration-300">design</h1>
      </div>
      <div className="text-[10vw] font-black text-center uppercase tracking-tighter h-auto flex flex-col justify-center items-center">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-rose-500 hover:from-rose-500 hover:to-orange-500 transition-all duration-300">that </h1>
      </div>
      <div className="text-[10vw] font-black text-center uppercase tracking-tighter h-auto flex flex-col justify-center items-center">
        <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-amber-500 hover:to-yellow-500 transition-all duration-300">works</h1>
      </div>
    </div>
  );
};

export default Designs;