import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { Particles } from "@/components/magicui/particles";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Umar - Full Stack Web Developer</title>
        <meta name="description" content="Umar is a Full Stack Web Developer specializing in MERN stack development. Transforming ideas into digital reality with modern web solutions." />
        <meta name="keywords" content="web developer, MERN stack, full stack developer, React developer, Node.js developer, portfolio, Umar" />
        <meta property="og:title" content="Umar - Full Stack Web Developer Portfolio" />
        <meta property="og:description" content="Transforming ideas into digital reality with modern web solutions and MERN stack development." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Umar - Full Stack Web Developer" />
        <meta name="twitter:description" content="Full Stack Web Developer specializing in MERN stack development. View my portfolio and projects." />
      </Helmet>
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-zinc-300 mb-8">
                <TypingAnimation text="Into Digital Reality" />
              </h2>
            </motion.div>
          </BoxReveal>
          <BoxReveal>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-lg sm:text-xl text-zinc-400 mb-10 mx-auto max-w-2xl leading-relaxed"
            >
              Crafting powerful web solutions with the MERN stack. From concept to
              deployment, bringing your vision to life with modern technologies
              and innovative approaches.
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
                Start a Project
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