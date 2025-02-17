import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";

const Projects = () => {
  const data = [
    {
      imgUrl: "/Capture.PNG",
      title: "Deven Dusky",
      description:
        "Deven Dusky - A professional AI-powered code analysis tool that provides comprehensive insights and optimization recommendations",
      tags: ["React", "Tailwind", "Express", "Node", "Gemini"],
      liveLink: "https://deven-dusky.vercel.app/",
    },
    {
      imgUrl: "/Refokuss/2.png",
      title: "Refokuss Animated Website",
      description:
        "Animated Refokuss Website Created WIth React, Tailwind And GSAP",
      tags: ["Animated", "React", "Tailwind"],
      liveLink: "https://refokuss-designs.vercel.app/",
    },
    {
      imgUrl:
        "/Solo Levling _ Top Rated WebToon _ Manhwa - Google Chrome 11_14_2024 10_29_00 AM.png",
      title: "Solo Levling ",
      description: "Solo Levling Website Created WIth NextJS, Tailwind",
      tags: ["NextJS", "Tailwind"],
      liveLink: "https://solo-leveling-six.vercel.app/",
    },
    {
      imgUrl: "/image.png",
      title: "Design Dynamo Portfolio ",
      description: "Design Dynamo Portfolio Created WIth React, Tailwind,GSAP",
      tags: ["NextJS", "Tailwind"],
      liveLink: "https://design-dynamo.vercel.app/",
    },
    {
      imgUrl:
        "/FinePpay _ 편리한 편의점 결제 서비스 - Google Chrome 11_16_2024 12_28_24 AM.png",
      title: "FinePpay ",
      description: "FinePay Website Created WIth React, Tailwind",
      tags: ["React", "Tailwind"],
      liveLink: "https://fin-pay-psi.vercel.app/",
    },
  ];
  return (
    <div className="w-full h-auto px-4 py-8 bg-zinc-900">
      <h1 className="text-left text-4xl font-bold mb-8 text-white">Projects</h1>
      <div className="w-full max-w-7xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Mousewheel]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          mousewheel={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          className="w-full pb-12"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {data.map((project, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <Card data={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
