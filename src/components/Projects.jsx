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
        "Deven Dusky - A professional AI-powered code analysis tool that provides comprehensive insights and optimization recommendations. Built with advanced AI algorithms to analyze code quality, detect bugs, and suggest improvements in real-time.",
      tags: ["React", "Tailwind", "Express", "Node", "Gemini"],
      liveLink: "https://deven-dusky.vercel.app/",
      github: "https://github.com/yourusername/deven-dusky",
    },
    {
      imgUrl: "/Refokuss/2.png",
      title: "Refokuss Animated Website",
      description:
        "A fully animated website showcasing smooth transitions and interactive elements. Features custom GSAP animations, responsive design, and modern UI/UX principles.",
      tags: ["Animated", "React", "Tailwind", "GSAP", "Framer Motion"],
      liveLink: "https://refokuss-designs.vercel.app/",
      github: "https://github.com/yourusername/refokuss",
    },
    {
      imgUrl:
        "/Solo Levling _ Top Rated WebToon _ Manhwa - Google Chrome 11_14_2024 10_29_00 AM.png",
      title: "Solo Leveling",
      description:
        "A dynamic website for the popular manhwa Solo Leveling, built with NextJS and Tailwind. Features server-side rendering, dynamic routing, and responsive image optimization.",
      tags: ["NextJS", "Tailwind", "SSR", "API Integration"],
      liveLink: "https://solo-leveling-six.vercel.app/",
      github: "https://github.com/yourusername/solo-leveling",
    },
    {
      imgUrl: "/image.png",
      title: "Design Dynamo Portfolio",
      description:
        "A creative portfolio website with stunning animations and interactive elements. Showcases projects with smooth transitions and engaging user interactions.",
      tags: ["NextJS", "Tailwind", "GSAP", "Three.js"],
      liveLink: "https://design-dynamo.vercel.app/",
      github: "https://github.com/yourusername/design-dynamo",
    },
    {
      imgUrl:
        "/FinePpay _ 편리한 편의점 결제 서비스 - Google Chrome 11_16_2024 12_28_24 AM.png",
      title: "FinePpay",
      description:
        "A modern payment service website with clean UI and smooth user experience. Implements responsive design and interactive payment flow demonstrations.",
      tags: ["React", "Tailwind", "Payment Integration", "Animation"],
      liveLink: "https://fin-pay-psi.vercel.app/",
      github: "https://github.com/yourusername/finepay",
    },
  ];
  return (
    <div className="w-full h-auto px-4 py-16 bg-gray-100 dark:bg-[#18181b]">
      <h1 className="text-center text-5xl font-bold mb-12 text-gray-900">
        Projects
      </h1>
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
              className="flex items-center justify-center group relative overflow-hidden rounded-xl transform transition-all duration-500 bg-white dark:bg-zinc-900"
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
