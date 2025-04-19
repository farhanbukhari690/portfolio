import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Make sure it's `framer-motion`, not `motion/react`

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="flex flex-wrap justify-between items-center text-white px-6 pt-6 md:px-20 relative z-50">
      {/* Logo */}
      <motion.span
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: 'easeIn' }}
        className="text-xl font-bold tracking-wide"
      >
        Portfolio
      </motion.span>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        {menuOpen ? (
          <RiCloseLine
            size={30}
            className="cursor-pointer transition-all duration-300"
            onClick={handleToggle}
          />
        ) : (
          <RiMenu2Line
            size={30}
            className="cursor-pointer transition-all duration-300"
            onClick={handleToggle}
          />
        )}
      </div>

      {/* Nav Links */}
      <ul
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } flex-col absolute top-20 left-6 right-6 bg-black bg-opacity-40 rounded-xl p-6 md:flex md:flex-row md:static md:bg-transparent md:p-0 md:gap-8 gap-4 font-semibold transition-all duration-300`}
      >
        {['About', 'Experience', 'Projects', 'Contact'].map((item, index) => {
          const animationProps = [
            { x: -80 }, // Home
            { y: -50 }, // About
            { y: 50 },  // Projects
            { x: 80 }   // Contact
          ][index];

          return (
            <motion.li
              key={item}
              initial={animationProps}
              animate={{ x: 0, y: 0 }}
              transition={{ duration: 1, ease: 'easeIn' }}
              className="text-md cursor-pointer hover:text-blue-400 transition-all duration-300"
              onClick={handleCloseMenu} // Close menu on mobile after click
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
