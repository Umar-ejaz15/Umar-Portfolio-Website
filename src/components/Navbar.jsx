
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 mb-2 rounded-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/">Dev</Link>
        </div>
        <div className="flex space-x-6 uppercase font-bold ">
          <Link to="/" className="text-white hover:text-zinc-300 transition-colors">
            Portfolio
          </Link>
          
          <Link to="/projects" className="text-white hover:text-zinc-300 transition-colors">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
