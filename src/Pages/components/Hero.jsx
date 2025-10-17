import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Particles } from "@/components/magicui/particles";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <>
    
      <section
        id="home"
        className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 py-10 sm:py-20 transition-all relative overflow-hidden bg-gradient-to-b from-black to-zinc-900"
      >
        <div className="absolute inset-0 w-full h-full z-0">
          <Particles className="w-full h-full" quantity={100} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full max-w-4xl flex flex-col items-center justify-center text-center animate-fadeInUp relative z-10"
        >
          <BoxReveal>
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-300"
            >
              <AnimatedGradientText className="font-bold">
                Transforming Ideas Into Reality
              </AnimatedGradientText>
            </motion.h1>
          </BoxReveal>
       
          <BoxReveal>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg sm:text-xl text-zinc-400 mb-10 mx-auto max-w-2xl leading-relaxed"
            >
              Crafting powerful web solutions with the MERN stack. From concept
              to deployment, bringing your vision to life with modern
              technologies and innovative approaches.
            </motion.p>
          </BoxReveal>
          <BoxReveal>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="flex gap-6 px-10 mb-10  justify-center items-center"
            >
              <RainbowButton
                size="lg"
                variant="default"
                className="text-black font-bold"
              >
                <a
                  href="https://calendly.com/umar-senpaiiii/30min"
                  target="_blank"
                >
                  Book A Call
                </a>
              </RainbowButton>
              <ShimmerButton className="transform hover:scale-105 transition-transform duration-300">
                <a href="#projects"> Explore Projects</a>
              </ShimmerButton>
            </motion.div>
          </BoxReveal>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
