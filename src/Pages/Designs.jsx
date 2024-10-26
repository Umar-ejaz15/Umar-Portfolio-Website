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
        //   markers: true,
          scrub: 5,
        },
        opacity: 0,
        y: 100,
        duration: 1,
        delay: index * 0.2
      });
    });
  }, []);

  return (
    <div className="w-full h-auto mt-10 ">
      <div className="  text-[10vw]  font-black text-center uppercase tracking-tighter  h-auto flex flex-col justify-center items-center">
        <h1>Impactful design </h1>
      </div>
      <div className="text-[10vw] font-black text-center uppercase tracking-tighter  h-auto flex flex-col justify-center items-center">
        <h1>is the</h1>
      </div>
      <div className="text-[10vw] font-black text-center uppercase tracking-tighter  h-auto flex flex-col justify-center items-center">
        <h1>design</h1>
      </div>
      <div className="text-[10vw] font-black text-center uppercase tracking-tighter  h-auto flex flex-col justify-center items-center">
        <h1>that </h1>
      </div>
      <div className="text-[10vw] font-black text-center uppercase tracking-tighter  h-auto flex flex-col justify-center items-center">
        <h1>works</h1>
      </div>
    </div>
  );
};

export default Designs;