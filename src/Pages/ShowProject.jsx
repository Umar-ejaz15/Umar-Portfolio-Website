import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ShowProject = () => {
  const location = useLocation();
  const projectData = location.state.projectData;
  const [fullImageSrc, setFullImageSrc] = useState(null);

  const openFullImage = (imageSrc) => {
    setFullImageSrc(imageSrc);
  };

  const closeFullImage = () => {
    setFullImageSrc(null);
  };

  return (
    <div className="bg-zinc-900 min-h-screen text-white">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 text-center"
        >
          {projectData.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto leading-relaxed"
        >
          {projectData.description}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">Project Images</h2>
          <div className="relative">
            <Swiper
              modules={[EffectFade, Pagination, Autoplay, Navigation]}
              effect="fade"
              pagination={{ clickable: true }}
              navigation
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="rounded-xl shadow-2xl"
            >
              {projectData.images && projectData.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative">
                    <img 
                      src={image} 
                      alt={`Project image ${index + 1}`} 
                      className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <button 
                        className="bg-white text-black px-3 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base font-semibold hover:bg-opacity-80 transition-colors duration-300"
                        onClick={() => openFullImage(image)}
                      >
                        View Full Image
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">GitHub Link</h2>
          <motion.a
            href={projectData.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-400 hover:text-blue-300 transition duration-300 text-base sm:text-lg md:text-xl break-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {projectData.link}
          </motion.a>
        </motion.div>
      </motion.div>

      {fullImageSrc && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full">
            <img src={fullImageSrc} alt="Full size" className="max-w-full max-h-[90vh] object-contain" />
            <button
              className="absolute w-20 h-20 top-4 right-4 bg-white text-black rounded-full  text-2xl"
              onClick={closeFullImage}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowProject;