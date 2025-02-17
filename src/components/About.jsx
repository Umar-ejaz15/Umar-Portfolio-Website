import { FaCode, FaLaptopCode, FaUserNinja } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Roboava from "./Roboava";
import { ScrollTrigger } from "gsap/all";

const About = () => {
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.from(aboutRef.current, {
      duration: 1,
      opacity: 0,
      y: -200,
      // width: 10000,
      rotate: 360,
      // position:"absolute",
      // top:0,
      // left:0,
      height:1000,

      // scaleX: 0,
      ease: "power3.out",
      
      // scrollTrigger: {
      //   trigger: aboutRef.current,
      //   start: "top center",
      //   end: "bottom center",
      //   markers: true,
      //   scrub: true,
      // },
    })
      .from(
        textRef.current.children,
        {
          duration: 0.8,
          opacity: 0,
          y: 50,
          stagger: 0.2,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        imageRef.current,
        {
          duration: 1,
          opacity: 0,
          x: 100,
          ease: "power3.out",
        },
        "-=0.8"
      );
  }, []);

  return (
    <div
      ref={aboutRef}
      className="px-1 bg-zinc-900 w-full h-auto flex justify-between hover:border-[2px] hover:border-white border-[2px] border-transparent rounded-lg transition-all duration-700 shadow-lg"
    >
      <div className="flex w-full flex-col lg:flex-row gap-4 sm:gap-6">
        <div className="abt1 w-full md:w-2/3 flex gap-4 sm:gap-8 lg:gap-12 flex-col p-6">
          <div ref={textRef} className="abttext text-sm sm:text-base">
            <h1 className="text-white/80 flex items-center gap-3 flex-wrap text-md sm:text-lg lg:text-xl font-semibold">
              <span className="animate-wave">👋</span>
              <span className="hover:text-blue-400 transition-all duration-300 font-semibold">
                Transform Your Ideas Into Reality
              </span>
              <FaCode className="text-blue-400 animate-pulse" />
            </h1>
            <p className="my-3 sm:my-4 text-lg md:text-xl flex items-center gap-2 flex-wrap">
              <FaUserNinja className="text-green-400" />
              Hi, I'm{" "}
              <strong className="text-bold uppercase hover:text-blue-400 transition-colors">
                Umar
              </strong>
            </p>
            <h1 className="text-lg md:text-xl font-medium leading-relaxed">
              – Your Full-Stack Development Partner. Specializing in creating{" "}
              <strong className="text-blue-400">
                powerful web applications
              </strong>{" "}
              that combine stunning design with robust functionality.
              <FaLaptopCode className="text-yellow-400 animate-bounce inline-block ml-2" />
            </h1>

            <p className="my-4 flex text-lg md:text-xl items-center gap-2 flex-wrap text-gray-200 leading-relaxed">
              I specialize in crafting{" "}
              <strong className="">
                high-performance, scalable, and intuitive
              </strong>{" "}
              digital solutions that drive real business results. From
              <strong className="text-green-300">
                {" "}
                dynamic e-commerce platforms
              </strong>{" "}
              to{" "}
              <strong className="text-green-300">
                sophisticated web applications
              </strong>
              , I transform complex requirements into elegant solutions.
            </p>

            <p className="mb-4 text-lg md:text-xl text-gray-200 leading-relaxed">
              Leveraging the power of the{" "}
              <strong className="">
                MERN stack (MongoDB, Express.js, React.js, Node.js)
              </strong>
              , I build applications that are not just functional but
              exceptional. Every project is an opportunity to create something
              <strong> fast, responsive, and user-centric</strong>.
            </p>

            <p className="text-lg text-gray-200 leading-relaxed">
              Ready to bring your vision to life? Let's create something
              extraordinary together!
              <strong className="ml-2 uppercase hover:text-blue-600 text-blue-500 underline transition-colors">
                <a
                  href="https://calendly.com/official-umer-ejaz/30min"
                  className="hover:text-blue-400"
                >
                  Schedule a Consultation
                </a>
              </strong>
              <span className="ml-2">🚀</span>
            </p>
          </div>
        </div>
        <div
          ref={imageRef}
          className="w-full lg:w-1/3 h-[400px] lg:h-auto object-cover object-center flex justify-end items-end"
        >
         <Roboava/>
        </div>
      </div>
    </div>
  );
};

export default About;
