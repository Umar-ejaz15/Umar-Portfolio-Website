import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-zinc-900 p-4 shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white tracking-tighter text-2xl sm:text-3xl font-bold hover:text-zinc-600 transition duration-300">
          Umar Mern Stack
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none z-50 relative hover:text-zinc-600 transition duration-300"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <ul className={`${isMobile ? (isOpen ? 'fixed inset-0 bg-gradient-to-b from-zinc-800 to-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6' : 'hidden') : 'flex space-x-6'}`}>
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-white hover:text-zinc-600 block text-xl font-semibold transition duration-300"
                onClick={() => isMobile && setIsOpen(false)}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;