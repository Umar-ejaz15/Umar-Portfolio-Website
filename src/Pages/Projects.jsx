import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 py-12 md:py-20 h-full"
      >
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          Featured Projects
        </motion.h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={0}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 35,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper h-full"
        >
          {/* Project Slides */}
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white flex-shrink-0 rounded-xl shadow-2xl overflow-hidden transform transition-transform hover:scale-105 duration-300">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 sm:h-40 md:h-64 lg:h-72 object-cover hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-white to-gray-50">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-gray-800 hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-4 flex-wrap">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        View Code
                      </a>
                    )}
                    {project.deployedLink && (
                      <a
                        href={project.deployedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <style jsx>{`
        .swiper {
          width: 100%;
          padding-top: 40px;
          padding-bottom: 60px;
        }
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 240px;
          height: auto;
          transition: transform 0.3s ease;
        }
        @media (min-width: 640px) {
          .swiper-slide {
            width: 320px;
          }
          .swiper {
            padding-top: 50px;
            padding-bottom: 70px;
          }
        }
        @media (min-width: 768px) {
          .swiper-slide {
            width: 380px;
          }
          .swiper {
            padding-top: 60px;
            padding-bottom: 80px;
          }
        }
        .swiper-slide img {
          display: block;
          width: 100%;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #4f46e5;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

const projectsData = [
  {
    image: "../..//Refokuss/2.png",
    title: "Refukus Animated Web",
    description:
      "A dynamic website with smooth animations and interactive elements created using React.js and Locomotive Scroll.",
    tags: ["React.js", "Animation"],
    link: "https://github.com/Umar-ejaz15/Refokuss---designs",
    deployedLink: "https://refokuss-designs.vercel.app/",
  },
  {
    image:
      "../..//FinePpay _ 편리한 편의점 결제 서비스 - Google Chrome 11_16_2024 12_28_24 AM.png",
    title: "Finpay ",
    description:
      "A Responsoive Website for a Finpay, a convenient payment solution for small businesses.",
    tags: ["Next.js"],
    link: "https://github.com/Umar-ejaz15/fin-pay/tree/master",
    deployedLink: "https://fin-pay-psi.vercel.app/",
  },
  {
    image:
      "../..//Solo Levling _ Top Rated WebToon _ Manhwa - Google Chrome 11_14_2024 10_29_00 AM.png",
    title: "Solo Leveling Web App",
    description:
      "A real-time chess game using Socket.IO, Chess.js for logic, and Express.js for player interactions.",
    tags: ["Next JS", "Context API"],
    link: "https://solo-leveling-six.vercel.app/",
    deployedLink: "https://solo-leveling-six.vercel.app/",
  },
  {
    image: "../..//LocationTracker/1728270655445.jfif",
    title: "Location Tracker App",
    description:
      "Real-time location tracking app using Socket.IO and Express.js with an intuitive interface.",
    tags: ["Socket IO", "Express JS"],
    link: "https://github.com/Umar-ejaz15/Real-Time-Tracker",
  },
  {
    image: "../..//Netflix Movie Data/3.png",
    title: "Movie App",
    description:
      "Dynamic movie app using React.js with TMDB API integration for comprehensive movie data and search functionality.",
    tags: ["React.js", "TMDB API"],
  },
  {
    image: "../..//Estore/3.jpeg",
    title: "E-Commerce Store",
    description:
      "A full-stack e-commerce store with React.js, Node.js, and Express, featuring user authentication and product management.",
    tags: ["React.js", "Node.js", "Express"],
    link: "https://github.com/Umar-ejaz15/Scatch-store-project",
  },
];

export default Projects;