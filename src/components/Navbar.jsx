import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [h1Position, setH1Position] = useState({ x: 0, y: 0 });
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const h1Ref = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleH1MouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top } = h1Ref.current.getBoundingClientRect();
      setH1Position({
        x: (clientX - left - h1Ref.current.offsetWidth / 2) * 0.1,
        y: (clientY - top - h1Ref.current.offsetHeight / 2) * 0.1,
      });
    };

    const handleButtonMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top } = buttonRef.current.getBoundingClientRect();
      setButtonPosition({
        x: (clientX - left - buttonRef.current.offsetWidth / 2) * 0.1,
        y: (clientY - top - buttonRef.current.offsetHeight / 2) * 0.1,
      });
    };

    h1Ref.current.addEventListener("mousemove", handleH1MouseMove);
    buttonRef.current.addEventListener("mousemove", handleButtonMouseMove);

    return () => {
      if (h1Ref.current) {
        h1Ref.current.removeEventListener("mousemove", handleH1MouseMove);
      }
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("mousemove", handleButtonMouseMove);
      }
    };
  }, []);

  const h1Variants = {
    initial: { x: 0, y: 0 },
    animate: {
      x: h1Position.x,
      y: h1Position.y,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const buttonVariants = {
    initial: { x: 0, y: 0 },
    animate: {
      x: buttonPosition.x,
      y: buttonPosition.y,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const handleResumeClick = () => {
    window.open('../../public/Umar Ejaz Resume.pdf', '_blank');
  };

  return (
    <div className="w-full selection:bg-purple-500 selection:text-purple top-0 shadow-sm relative">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-4">
            <motion.h1
              ref={h1Ref}
              initial="initial"
              animate="animate"
              variants={h1Variants}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black"
            >
              DEV
            </motion.h1>
            <motion.button
              ref={buttonRef}
              initial="initial"
              animate="animate"
              variants={buttonVariants}
              onClick={handleResumeClick}
              className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-base px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-100 transition-colors duration-300"
            >
              Resume
            </motion.button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;