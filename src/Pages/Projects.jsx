import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <div className="min-h-screen w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-8 md:py-16 h-full"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">My Projects</h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={1}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper h-full"
        >
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="../..//Refokuss/2.png"
                alt="Project 1"
                className="w-full h-48 sm:h-64 md:h-96 object-cover"
              />
              <div className="p-4 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">
                  Refukus Animated Web
                </h3>
                <p className="text-gray-600 text-base md:text-lg">
                  I developed this dynamic website using React.js and Locomotive
                  Scroll, incorporating smooth animations and interactive
                  elements to create an engaging user experience.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="../..//Netflix Movie Data/3.png"
                alt="Project 2"
                className="w-full h-48 sm:h-64 md:h-96 object-cover"
              />
              <div className="p-4 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Movie APP</h3>
                <p className="text-gray-600 text-base md:text-lg">
                  I developed this dynamic movie application using React.js and
                  integrated the TMDB API to fetch and display comprehensive
                  movie data, featuring search functionality.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="../..//Estore/3.jpeg"
                alt="Project 3"
                className="w-full h-48 sm:h-64 md:h-96 object-cover"
              />
              <div className="p-4 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Store</h3>
                <p className="text-gray-600 text-base md:text-lg">
                  I built this full-stack e-commerce store using React.js for
                  the frontend and Node.js with Express for the backend. The
                  application features user authentication, product management,
                  shopping cart functionality.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
      <style jsx>{`
        .swiper {
          width: 100%;
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 300px;
          height: auto;
        }
        @media (min-width: 640px) {
          .swiper-slide {
            width: 400px;
          }
          .swiper {
            padding-top: 40px;
            padding-bottom: 40px;
          }
        }
        @media (min-width: 768px) {
          .swiper-slide {
            width: 500px;
            height: 600px;
          }
          .swiper {
            padding-top: 50px;
            padding-bottom: 50px;
          }
        }
        .swiper-slide img {
          display: block;
          width: 100%;
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