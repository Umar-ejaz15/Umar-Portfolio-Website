import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import { Particles } from "@/components/magicui/particles";
import { NavigationBar } from "./components/NavigationBar";
import WhyMe from "./components/WhyMe";
import Skills from "./components/Skills";
import CTA from "./components/CTA";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { Helmet } from "react-helmet";
// import { Analytics } from "@vercel/analytics/next";

import LocomotiveScroll from "locomotive-scroll";
const Page1 = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Helmet>
        <title>Umar - MERN Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Experienced MERN Stack Developer specializing in MongoDB, Express.js, React.js, and Node.js. Building modern web applications with cutting-edge technologies."
        />
        <meta
          name="keywords"
          content="MERN stack, web developer, full stack developer, MongoDB, Express.js, React.js, Node.js, JavaScript, frontend developer, backend developer, portfolio, web development, responsive design, API development"
        />
        <meta name="author" content="Umar" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="Umar - MERN Stack Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Experienced MERN Stack Developer specializing in MongoDB, Express.js, React.js, and Node.js. Building modern web applications with cutting-edge technologies."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/your-portfolio-preview.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Umar - MERN Stack Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Experienced MERN Stack Developer specializing in MongoDB, Express.js, React.js, and Node.js. Building modern web applications with cutting-edge technologies."
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#000000" />
      </Helmet>
      <div className="bg-black text-white min-h-screen  overflow-hidden">
        {/* <Analytics /> */}
        <NavigationBar />
        <Hero />
        <About />
        <Services />
        <Skills />
        <WhyMe />
        <Projects />
        <Reviews />
        {/* <CTA /> */}
        {/* <Contact /> */}
        <Contact />
      </div>
    </>
  );
};

export default Page1;
