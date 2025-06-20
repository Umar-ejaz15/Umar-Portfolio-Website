import React from "react";
import { Particles } from "@/components/magicui/particles";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { motion } from "framer-motion";
import { MagicCard } from "@/components/magicui/magic-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { RainbowButton } from "@/components/magicui/rainbow-button";

const Projects = () => {
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

  const ProjectCard = ({ project }) => {
    return (
      <MagicCard className="w-full bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-zinc-800 h-auto">
        <div className="w-full h-48 sm:h-56 md:h-64 mb-4 sm:mb-6 overflow-hidden rounded-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
          {project.title}
        </h2>
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
          className="w-full"
        >
          <RainbowButton className="w-full">Live Preview</RainbowButton>
        </a>
      </MagicCard>
    );
  };

  return (
    <section
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

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            640: {
              slidesPerView: "auto",
              spaceBetween: 30
            },
            1024: {
              slidesPerView: "auto",
              spaceBetween: 40
            }
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
          style={{
            padding: "50px 0",
          }}
        >
          {websites.map((project) => (
            <SwiperSlide
              key={project.id}
              style={{
                width: "min(450px, 100%)",
                backgroundColor: "transparent",
              }}
              className="px-4 sm:px-0"
            >
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;