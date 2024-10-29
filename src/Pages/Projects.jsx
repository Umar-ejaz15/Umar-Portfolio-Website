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
          className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
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
          <SwiperSlide>
            <div className="bg-white  flex-shrink-0  rounded-xl shadow-2xl overflow-hidden transform transition-transform hover:scale-105 duration-300">
              <div className="relative">
                <img
                  src="../..//Refokuss/2.png"
                  alt="Project 1"
                  className="w-full h-40 sm:h-52 md:h-72 object-cover hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-30 transition-opacity"></div>
              </div>
              <div className="p-6 md:p-8 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 hover:text-blue-600 transition-colors">
                  Refukus Animated Web
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  I developed this dynamic website using React.js and Locomotive
                  Scroll, incorporating smooth animations and interactive
                  elements to create an engaging user experience.
                </p>
                <div className="mt-6 flex gap-4">
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    React.js
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                    Animation
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white  flex-shrink-0  rounded-xl shadow-2xl overflow-hidden transform transition-transform hover:scale-105 duration-300">
              <div className="relative">
                <img
                  src="../..///Chess Game/1728209519307.jfif"
                  alt="Project 1"
                  className="w-full h-40 sm:h-52 md:h-72 object-cover hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-30 transition-opacity"></div>
              </div>
              <div className="p-6 md:p-8 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 hover:text-blue-600 transition-colors">
                  Chess Game
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  Created a real-time chess game using Socket.IO for multiplayer
                  functionality, Chess.js for game logic and move validation,
                  and Express.js backend for handling game state and player
                  interactions.{" "}
                </p>
                <div className="mt-6 flex gap-4">
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    Socket IO
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                    Express
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-yellow-600 rounded-full text-sm font-medium">
                    Chess JS
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white  flex-shrink-0  rounded-xl shadow-2xl overflow-hidden transform transition-transform hover:scale-105 duration-300">
              <div className="relative">
                <img
                  src="../..//LocationTracker/1728270655445.jfif"
                  alt="Project 1"
                  className="w-full h-40 sm:h-52 md:h-72 object-cover hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-30 transition-opacity"></div>
              </div>
              <div className="p-6 md:p-8 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 hover:text-blue-600 transition-colors">
                  Location tracker app
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  I developed this location tracking application using Socket.IO
                  for real-time communication, and Express.js backend for
                  handling location data, featuring real-time tracking and an
                  intuitive user interface.{" "}
                </p>
                <div className="mt-6 flex gap-4">
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    Socket IO
                  </span>
                  <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
                    Express JS
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white flex-shrink-0  rounded-xl shadow-2xl overflow-hidden transform transition-transform hover:scale-105 duration-300">
              <div className="relative">
                <img
                  src="../..//Netflix Movie Data/3.png"
                  alt="Project 2"
                  className="w-full h-40 sm:h-52 md:h-72 object-cover hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-30 transition-opacity"></div>
              </div>
              <div className="p-6 md:p-8 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 hover:text-blue-600 transition-colors">
                  Movie APP
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  I developed this dynamic movie application using React.js and
                  integrated the TMDB API to fetch and display comprehensive
                  movie data, featuring search functionality.
                </p>
                <div className="mt-6 flex gap-4">
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    React.js
                  </span>
                  <span className="px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium">
                    TMDB API
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white flex-shrink-0  rounded-xl shadow-2xl overflow-hidden transform transition-transform hover:scale-105 duration-300">
              <div className="relative">
                <img
                  src="../..//Estore/3.jpeg"
                  alt="Project 3"
                  className="w-full h-40 sm:h-52 md:h-72 object-cover hover:opacity-90 transition-opacity"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-30 transition-opacity"></div>
              </div>
              <div className="p-6 md:p-8 bg-gradient-to-b from-white to-gray-50">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 hover:text-blue-600 transition-colors">
                  E-Commerce Store
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  I built this full-stack e-commerce store using React.js for
                  the frontend and Node.js with Express for the backend. The
                  application features user authentication, product management,
                  shopping cart functionality.
                </p>
                <div className="mt-6 flex gap-4">
                  <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                    React.js
                  </span>
                  <span className="px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium">
                    Node.js
                  </span>
                  <span className="px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-medium">
                    Express
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
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
          width: 280px;
          height: auto;
          transition: transform 0.3s ease;
        }
        @media (min-width: 640px) {
          .swiper-slide {
            width: 360px;
          }
          .swiper {
            padding-top: 50px;
            padding-bottom: 70px;
          }
        }
        @media (min-width: 768px) {
          .swiper-slide {
            width: 440px;
            height: auto;
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
          width: 12px;
          height: 12px;
          background: #4f46e5;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .swiper-3d .swiper-slide-shadow-left,
        .swiper-3d .swiper-slide-shadow-right {
          background-image: none;
        }
      `}</style>
    </div>
  );
};

export default Projects;
