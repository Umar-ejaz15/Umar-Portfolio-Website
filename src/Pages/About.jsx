import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

const About = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 1,
      getDirection: true,
      mobile: {
        smooth: true,
        breakpoint: 0,
      },
      tablet: {
        smooth: true,
        breakpoint: "64rem",
      },
    });

    // Animate title
    gsap.from(".title-letter", {
      scrollTrigger: {
        trigger: ".title",
        start: "top center",
        toggleActions: "play none none reverse",
        scrub: true,
      },
      opacity: 0,
      y: "5vh",
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.7)",
    });

    // Animate left column
    gsap.from(".left-column", {
      scrollTrigger: {
        trigger: ".left-column",
        start: "top 90%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
      opacity: 0,
      x: "-10vw",
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate list items
    gsap.from(".skill-item", {
      scrollTrigger: {
        trigger: ".skill-list",
        start: "top 95%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
      opacity: 0,
      x: "-3vw",
      stagger: true,
      duration: 0.5,
      ease: "power2.out",
    });

    // Animate right column
    gsap.from(".right-column", {
      scrollTrigger: {
        trigger: ".right-column",
        start: "top 90%",
        end: "bottom 100%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
      opacity: 0,
      x: "10vw",
      duration: 0.8,
      ease: "power2.out",
    });

    // Animate service cards
    gsap.from(".service-card", {
      scrollTrigger: {
        trigger: ".service-card",
        start: "top 90%",
        end: "bottom 100%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
      opacity: 0,
      y: "3vh",
      stagger: 0.2,
      duration: 0.3,
      ease: "power2.out",
    });

    return () => {
      if (scroll) scroll.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden" data-scroll-container>
      <div className="w-full h-full py-8 px-4 sm:px-6 md:px-8 lg:px-10 bg-white">
        <div className="w-full max-w-[1400px] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 title text-black">
            {Array.from("About Me").map((letter, index) => (
              <span
                key={index}
                className="title-letter"
                style={{ display: "inline-block" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            <div className="space-y-6 left-column">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
                MERN Stack Developer
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                I am a passionate MERN Stack Developer with expertise in building
                full-stack web applications using MongoDB, Express.js, React.js,
                and Node.js.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                  Technical Skills:
                </h3>
                <ul className="list-disc list-inside text-base sm:text-lg md:text-xl text-gray-600 skill-list">
                  <li className="skill-item mb-2">MongoDB & Mongoose</li>
                  <li className="skill-item mb-2">Express.js & Node.js</li>
                  <li className="skill-item mb-2">React.js & Redux</li>
                  <li className="skill-item mb-2">RESTful APIs</li>
                  <li className="skill-item mb-2">JavaScript (ES6+)</li>
                  <li className="skill-item mb-2">HTML5 & CSS3</li>
                  <li className="skill-item mb-2">Tailwind CSS</li>
                  <li className="skill-item">Git & GitHub</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6 right-column">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
                What I Do
              </h2>
              <div className="space-y-4">
                <div className="p-4 sm:p-6 rounded-lg bg-gray-50 backdrop-blur-sm border border-gray-200 hover:border-gray-400 transition-colors service-card hover:shadow-lg">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                    Frontend Development
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600">
                    Creating responsive and interactive user interfaces using React.js
                  </p>
                </div>
                <div className="p-4 sm:p-6 rounded-lg bg-gray-50 backdrop-blur-sm border border-gray-200 hover:border-gray-400 transition-colors service-card hover:shadow-lg">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                    Backend Development
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600">
                    Building robust server-side applications with Node.js and Express.js
                  </p>
                </div>
                <div className="p-4 sm:p-6 rounded-lg bg-gray-50 backdrop-blur-sm border border-gray-200 hover:border-gray-400 transition-colors service-card hover:shadow-lg">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                    Database Management
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600">
                    Designing and managing MongoDB databases
                  </p>
                </div>
                <div className="p-4 sm:p-6 rounded-lg bg-gray-50 backdrop-blur-sm border border-gray-200 hover:border-gray-400 transition-colors service-card hover:shadow-lg">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                    API Development
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600">
                    Creating and integrating RESTful APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;