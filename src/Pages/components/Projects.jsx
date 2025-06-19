import React from "react";
import { Particles } from "@/components/magicui/particles";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card";

import LocomotiveScroll from "locomotive-scroll";
const Projects = () => {
  const locomotiveScroll = new LocomotiveScroll();
  const websites = [
    {
      id: 2,
      title: "Creative Portfolio Platform",
      description:
        "An innovative portfolio platform designed to showcase creative work with a modern and intuitive interface. Features include dynamic animations, responsive layouts, and seamless project navigation. Built with cutting-edge technologies to ensure optimal performance and user experience.",
      image: "/designdayamo.jpg",
      link: "https://design-dynamo.vercel.app/",
      tags: ["React", "Framer Motion", "Swiper.js"],
    },
    {
      id: 4,
      title: "Interactive Developer Portfolio",
      description:
        "A dynamic personal portfolio site that showcases development skills through interactive elements and smooth animations. Featuring a clean, modern design with responsive layouts, project showcases, and contact forms. Optimized for performance and accessibility.",
      image: "/yasir.jpg",
      link: "https://yasir-shahbaz.vercel.app/",
      tags: ["React", "Framer Motion"],
    },
    {
      id: 6,
      title: "Devin Dusky",
      description:
        "A dynamic personal portfolio site featuring a unique blend of creativity and functionality. Incorporates modern design principles with smooth transitions and interactive elements. Showcases projects, skills, and professional experience in an engaging manner.",
      image: "/Code analyzier gpt.jpg",
      link: "https://deven-dusky.vercel.app/",
      tags: ["React", "Framer Motion"],
    },
    {
      id: 3,
      title: "Property Management Dashboard",
      description:
        "A comprehensive dashboard for site management with advanced features for property tracking, tenant management, and maintenance scheduling. Includes real-time analytics, customizable reports, and an intuitive interface for efficient property management operations.",
      image: "/site manager.jpg",
      link: "https://site-manger.vercel.app/account",
      tags: ["React", "Dashboard UI"],
    },
    {
      id: 1,
      title: "Modern Design Agency Website",
      description:
        "A sophisticated agency website that combines stunning visuals with seamless functionality. Features include dynamic content loading, smooth scroll animations, and interactive portfolio displays. Built with modern web technologies to deliver an immersive user experience.",
      image: "/refukuss.jpg",
      link: "https://refokuss-designs.vercel.app/",
      tags: ["React", "GSAP", "Tailwind CSS"],
    },
    {
      id: 5,
      title: "Creative Professional Showcase",
      description:
        "A creative portfolio with animation that highlights professional work through an elegant and interactive design. Includes custom animations, responsive galleries, and smooth transitions. Perfect for showcasing creative work with style and sophistication.",
      image: "/Ghulam.jpg",
      link: "https://syed-ghulam.vercel.app/",
      tags: ["React", "Tailwind CSS"],
    },
  ];

  const [isDragging, setIsDragging] = React.useState(false);
  const [startX, setStartX] = React.useState(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const sliderRef = React.useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const scrollNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  const scrollPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const ProjectCard = ({ project }) => (
    <motion.div>
      <MagicCard className="min-w-[280px] sm:min-w-[340px] md:min-w-[400px] lg:min-w-[450px] max-w-full sm:max-w-[340px] md:max-w-[400px] lg:max-w-[450px] flex-shrink-0 snap-start bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-800 h-auto">
        <div className="w-full h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">{project.title}</h2>
        <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 sm:px-4 py-1 sm:py-1.5 bg-zinc-800 text-zinc-300 rounded-full text-xs sm:text-sm font-medium hover:bg-zinc-700 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-medium rounded-md hover:bg-gray-200 transition-colors duration-300 w-full text-center text-sm sm:text-base"
        >
          Live Preview
        </a>
      </MagicCard>
    </motion.div>
  );

  const NavigationButton = ({ direction, onClick, children }) => (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      className={`absolute ${
        direction === "left" ? "left-0 -translate-x-2 sm:-translate-x-4" : "right-0 translate-x-2 sm:translate-x-4"
      } top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 sm:p-4 backdrop-blur-sm transition-all duration-300 hidden sm:block`}
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      {children}
    </motion.button>
  );

  return (
    <div
      id="projects"
      className="w-full h-auto bg-gradient-to-b from-black to-zinc-900 relative overflow-hidden py-12 sm:py-20"
    >
      <div className="absolute inset-0 w-full h-full z-0 opacity-50">
        <Particles className="w-full h-full" quantity={100} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
            <AnimatedGradientText>Featured Projects</AnimatedGradientText>
          </h1>
        </motion.div>

        <div className="relative">
          <NavigationButton direction="left" onClick={scrollPrev}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </NavigationButton>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide cursor-grab gap-4 sm:gap-6 md:gap-8 snap-x snap-mandatory pb-4 sm:pb-8"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ scrollBehavior: "smooth" }}
          >
            {websites.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <NavigationButton direction="right" onClick={scrollNext}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-6 sm:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </NavigationButton>
        </div>
      </div>
    </div>
  );
};

export default Projects;