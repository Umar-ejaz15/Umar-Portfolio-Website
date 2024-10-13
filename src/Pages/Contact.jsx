import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Pagination, EffectCards } from "swiper/modules";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
} from "react-icons/fa";
import Navbar from "../components/Navbar";

const Contact = () => {
  const contactData = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "umar.developer.mern@gmail.com",
    },
    { icon: <FaPhone />, title: "Phone", content: "+92-316-7151733" },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      content: "House no. 487/7 , Multan",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      content: "https://www.linkedin.com/in/umar-ejaz-6734402b1/",
    },
  ];

  return (
    <div className="contact-container overflow-hidden bg-white text-black min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="w-full h-auto flex justify-center items-center mx-auto mt-8 px-4 sm:px-2 lg:px-4">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Pagination]}
          className="contact-swiper"
          pagination={{
            clickable: true,
          }}
          style={{
            width: "90%", // Ensure more width for smaller screens
            maxWidth: "500px", // Set a max width for larger screens
            height: "60vh", // Adjust height to be dynamic
            aspectRatio: "1/1", // Maintain square aspect ratio on small screens
          }}
        >
          {contactData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="contact-card h-full flex flex-col justify-center items-center bg-gradient-to-r from-violet-600 to-blue-600 text-white p-3 rounded-lg shadow-2xl">
                <div className="icon text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-center">{item.content}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Contact;
