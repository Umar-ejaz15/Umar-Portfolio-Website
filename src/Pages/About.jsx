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
        inertia: 0.3,
        getDirection: true,
      },
      tablet: {
        smooth: true,
        breakpoint: 768,
        inertia: 0.6,
        getDirection: true,
      },
      desktop: {
        smooth: true,
        breakpoint: 1024,
        inertia: 0.8,
      },
      large: {
        smooth: true,
        breakpoint: 1440,
        inertia: 1,
      },
    });

    // Animate title with responsive values
    gsap.from(".title-letter", {
      scrollTrigger: {
        trigger: ".title",
        start: "top 80%",
        toggleActions: "play none none reverse",
        scrub: 1,
      },
      opacity: 0,
      y: window.innerWidth < 768 ? "3vh" : "5vh",
      stagger: window.innerWidth < 768 ? 0.05 : 0.1,
      duration: window.innerWidth < 768 ? 0.4 : 0.6,
      ease: "back.out(1.7)",
    });

    // Check screen size and apply animations accordingly
    const handleResponsiveAnimations = () => {
      const isDesktop = window.innerWidth >= 768;
      const isMobile = window.innerWidth < 768;

      if (isDesktop) {
        gsap.to(".left-column", {
          scrollTrigger: {
            trigger: ".left-column",
            start: "top 20%",
            endTrigger: ".right-column",
            end: "bottom 80%",
            pin: true,
            pinSpacing: false,
            toggleActions: "play none none reverse",
            scrub: 1,
          },
        });
      }

      gsap.from(".skill-item", {
        scrollTrigger: {
          trigger: ".skill-list",
          start: "top 95%",
          toggleActions: "play none none reverse",
          scrub: isMobile ? 0.5 : 1,
        },
        opacity: 0,
        x: isMobile ? "-2vw" : "-3vw",
        stagger: isMobile ? 0.1 : 0.2,
        duration: isMobile ? 0.3 : 0.5,
        ease: "power2.out",
      });

      gsap.from(".right-column", {
        scrollTrigger: {
          trigger: ".right-column",
          start: "top 90%",
          end: "bottom 100%",
          toggleActions: "play none none reverse",
          scrub: isMobile ? 0.5 : 1,
        },
        opacity: 0,
        x: isMobile ? "5vw" : "10vw",
        duration: isMobile ? 0.5 : 0.8,
        ease: "power2.out",
      });

      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".service-card",
          start: "top 90%",
          end: "bottom 100%",
          toggleActions: "play none none reverse",
          scrub: isMobile ? 0.5 : 1,
        },
        opacity: 0,
        y: isMobile ? "2vh" : "3vh",
        stagger: isMobile ? 0.1 : 0.2,
        duration: isMobile ? 0.2 : 0.3,
        ease: "power2.out",
      });
    };

    handleResponsiveAnimations();

    const handleResize = () => {
      scroll.update();
      ScrollTrigger.refresh();
      handleResponsiveAnimations();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (scroll) scroll.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="w-full min-h-screen overflow-x-hidden"
      data-scroll-container
    >
      <div className="w-full h-full py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 bg-white">
        <div className="w-full max-w-[1400px] mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-6 sm:mb-8 title text-black">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
            <div className="relative space-y-4 sm:space-y-6 left-column">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-600">
                MERN Stack Developer
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-zinc-600">
                I am a passionate MERN Stack Developer with expertise in
                building full-stack web applications using MongoDB, Express.js,
                React.js, and Node.js.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600">
                  Technical Skills:
                </h3>

                <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-zinc-600 skill-list">
                  <li className="skill-item mb-1.5 sm:mb-2">
                    MongoDB & Mongoose
                  </li>
                  <li className="skill-item mb-1.5 sm:mb-2">
                    Express.js & Node.js
                  </li>
                  <li className="skill-item mb-1.5 sm:mb-2">
                    React.js & Redux
                  </li>
                  <li className="skill-item mb-1.5 sm:mb-2">RESTful APIs</li>
                  <li className="skill-item mb-1.5 sm:mb-2">
                    JavaScript (ES6+)
                  </li>
                  <li className="skill-item mb-1.5 sm:mb-2">HTML5 & CSS3</li>
                  <li className="skill-item mb-1.5 sm:mb-2">Tailwind CSS</li>
                  <li className="skill-item">Git & GitHub</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 right-column">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                What I Do
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="p-3 hover:bg-blue-100 rounded-md-500 sm:p-4 rounded-lg w-full sm:w-11/12 lg:w-10/12 bg-gray-50 backdrop-blur-sm border border-gray-200 hover:border-gray-400 transition-colors service-card hover:shadow-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    Frontend Development
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-zinc-600 mt-2">
                    Creating responsive and interactive user interfaces using
                    React.js with modern UI/UX principles. Implementing
                    performant and scalable frontend architectures using best
                    practices and design patterns.
                  </p>

                  <p className="text-xs sm:text-sm md:text-base text-zinc-600 mt-1">
                    Expertise in component-based architecture, state management
                    with Redux, and optimization techniques for enhanced web
                    performance and SEO.
                  </p>
                </div>

                <div className="p-3 hover:bg-blue-100 rounded-md-500 sm:p-4 rounded-lg w-full sm:w-11/12 lg:w-10/12 bg-gray-50 backdrop-blur-sm border border-gray-200 hover:border-gray-400 transition-colors service-card hover:shadow-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    Backend Development
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-zinc-600 mt-2">
                    Building robust server-side applications with Node.js and
                    Express.js, implementing secure authentication systems and
                    efficient data processing pipelines.
                  </p>

                  <p className="text-xs sm:text-sm md:text-base text-zinc-600 mt-1">
                    Developing scalable microservices architecture with load
                    balancing, caching strategies, and performance optimization
                    for high-traffic applications.
                  </p>
                </div>

                <div className="p-3 hover:bg-blue-100 rounded-md-500 sm:p-4 rounded-lg w-full sm:w-11/12 lg:w-10/12 bg-gray-50 backdrop-blur-sm border border-gray-200 hover:border-gray-400 transition-colors service-card hover:shadow-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    Database Management
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-zinc-600 mt-2">
                    Designing and managing MongoDB databases with optimized
                    schema design, indexing strategies, and data modeling for
                    maximum efficiency.
                  </p>

                  <p className="text-xs sm:text-sm md:text-base text-zinc-600 mt-1">
                    Implementing data security measures, backup solutions, and
                    database optimization techniques for improved query
                    performance and data integrity.
                  </p>
                </div>

                <div className="p-3 hover:bg-blue-100 rounded-md-500 sm:p-4 rounded-lg w-full sm:w-11/12 lg:w-10/12 bg-gray-50 backdrop-blur-sm border border-gray-200 hover:border-gray-400 transition-colors service-card hover:shadow-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    API Development
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-zinc-600 mt-2">
                    Creating and integrating RESTful APIs with comprehensive
                    documentation, versioning, and security implementations
                    following industry standards.
                  </p>

                  <p className="text-xs sm:text-sm md:text-base text-zinc-600 mt-1">
                    Implementing API rate limiting, caching strategies, and
                    monitoring solutions for optimal performance and
                    reliability.
                  </p>
                </div>

                <div className="p-3 hover:bg-blue-100 rounded-md-500 sm:p-4 rounded-lg w-full sm:w-11/12 lg:w-10/12 bg-gray-50 backdrop-blur-sm border border-gray-200 hover:border-gray-400 transition-colors service-card hover:shadow-lg">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                    Performance Optimization
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-zinc-600 mt-2">
                    Implementing advanced optimization techniques for web
                    applications, including code splitting, lazy loading, and
                    caching strategies.
                  </p>

                  <p className="text-xs sm:text-sm md:text-base text-zinc-600 mt-1">
                    Expertise in SEO optimization, web vitals improvement, and
                    performance monitoring for enhanced user experience and
                    search engine rankings.
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