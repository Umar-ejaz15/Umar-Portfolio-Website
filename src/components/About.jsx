import { FaCode, FaLaptopCode, FaUserNinja } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  // motion

  return (
    <div className="h-full px-4 py-6 bg-white dark:bg-[#18181b] flex flex-col hover:border-[1px] hover:border-blue-600 dark:hover:border-white border-[1px] border-transparent rounded-lg transition-all duration-300 ">
      <div className="flex w-full flex-col lg:flex-row gap-4 sm:gap-6">
        <div className="abt1 w-full md:w-2/3 flex gap-4 sm:gap-8 lg:gap-12 flex-col p-6">
          <div className="abttext text-base sm:text-lg">
            <h1 className="dark:text-[#ffffff] text-[#1E293B]/80 flex items-center gap-3 flex-wrap text-lg sm:text-xl lg:text-2xl font-semibold">
              <span className="animate-wave">👋</span> Tired of Searching for
              the Right Developer?
              <FaCode className="text-blue-400 animate-pulse" />
            </h1>
            <p className=" dark:text-[#d4d4d8] my-3 sm:my-4 text-[#475569] text-lg md:text-xl">
              Well, stop scrolling because you just FOUND HIM. I'm Umar Ejaz,
              your Full-Stack Code-Slinging Wizard (yeah, like Doctor Strange
              but with JavaScript).
            </p>
            <h1 className="dark:text-[#ffffff] text-xl md:text-2xl font-medium text-[#1E293B] leading-relaxed">
              I build web apps that are{" "}
              <strong className="text-blue-600 dark:text-blue-400">FAST, SCALABLE</strong>, and
              actually make sense.
              <FaLaptopCode className="text-yellow-600 animate-bounce inline-block ml-2" />
            </h1>

            <p className=" dark:text-[#d4d4d8] my-4 flex text-lg md:text-xl items-center gap-2 flex-wrap text-[#475569] leading-relaxed">
              Looking for someone who knows{" "}
              <strong className="text-green-600 dark:text-green-400">
                MERN (MongoDB, Express.js, React, Node.js)
              </strong>{" "}
              like the back of their hand? Yep, that's me. I don't just build
              websites—I build digital experiences that make people go, "Whoa,
              this is NICE."
            </p>

            <p className=" dark:text-[#d4d4d8] mb-4 text-lg md:text-xl text-[#475569] leading-relaxed">
              Why work with me? Because you need a developer who gets it.
              Someone who can take your rough idea, refine it, and turn it into
              something <strong>FUNCTIONAL, BEAUTIFUL, and PROFITABLE</strong>.
              No overcomplicated jargon, no unnecessary fluff—just clean,
              efficient code that works like magic.
            </p>

            <p className=" dark:text-[#d4d4d8] text-lg md:text-xl text-[#475569] leading-relaxed">
              Still not convinced? Go ahead, check out other developers. Their
              rates will make you run back faster than Flash. I deliver top-tier
              work at a price that won't burn a hole in your pocket. 🚀 Let's
              turn your idea into something extraordinary.
              <strong className="ml-2 uppercase dark:text-[#a855f7] dark:hover:text-[#a855f7]  hover:text-blue-600 text-blue-600 underline transition-colors">
                <a
                  href="https://calendly.com/official-umer-ejaz/30min"
                  className="hover:text-blue-400"
                >
                  👉 Book a Call and let's make magic happen
                </a>
              </strong>
            </p>
          </div>
        </div>
        <div className="w-full relative  lg:w-1/3 h-[400px] lg:h-auto object-cover object-center flex justify-center items-center">
          <motion.img
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            whileInView={{ scale: 1 }}
            className="w-full h-2/3 absolute"
            src="/avatar.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
