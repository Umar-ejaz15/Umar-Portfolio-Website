import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePages = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top center",
        end: "bottom center",
        scrub: 1,
      }
    });

    gsap.from(".hero-section", {
      opacity: 0,
      duration: 1.5,
      ease: "power3.out"
    });

    tl.from(".heading-1", {
      opacity: 0,
      y: 120,
      duration: 1.2,
      ease: "power4.out"
    })
    .from(".heading-2", {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power4.out"
    }, "-=0.7")
    .from(".heading-3", {
      opacity: 0,
      y: 80,
      duration: 1.2,
      ease: "power4.out"
    }, "-=0.7");

    // Enhanced parallax effect
    gsap.to(".parallax-bg", {
      scrollTrigger: {
        scrub: true,
        toggleActions: "play pause resume reset"
      },
      y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
      ease: "none"
    });
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-purple-100 parallax-bg" data-speed="0.3">
        <div className="absolute inset-0 bg-[url('/path/to/subtle-pattern.png')] opacity-10"></div>
      </div>
      <div className="hero-section relative w-full min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-16 md:space-y-20">
            <h1 className="heading-1 text-6xl md:text-7xl lg:text-9xl font-bold text-zinc-800 leading-tight tracking-tighter">
              Revolutionizing
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 animate-gradient-x"> Web Development</span>
            </h1>

            <h2 className="heading-2 text-5xl md:text-6xl lg:text-8xl font-semibold text-zinc-700 leading-tight">
              Building Lightning-Fast &
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 animate-gradient-x">Ultra-Secure Websites</span>
            </h2>

            <h3 className="heading-3 text-4xl md:text-5xl lg:text-7xl font-medium text-zinc-600 leading-tight">
              Empowering Your
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400"> Digital Success</span>
            </h3>

            <div className="absolute bottom-10 left-0 right-0 flex justify-center">
              <svg 
                className="w-10 h-10 text-purple-600 animate-float hover:text-purple-700 transition-all duration-500 cursor-pointer transform hover:scale-110"
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePages;