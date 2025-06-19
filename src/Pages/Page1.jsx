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

import LocomotiveScroll from "locomotive-scroll";
const Page1 = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="bg-black text-white  overflow-hidden">
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
  );
};

export default Page1;
