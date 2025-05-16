import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500 });
    setIsOpen(false); // close menu if on mobile
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50" ref={menuRef}>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand Title */}
          <div
            onClick={scrollToTop}
            className="text-lg sm:text-xl font-semibold text-gray-800 cursor-pointer hover:opacity-80 transition"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            Shree Investments and Financial Solutions
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-base font-medium text-gray-700">
            <button onClick={scrollToTop} className="hover:text-blue-600 transition">Home</button>
            <ScrollLink to="about" smooth duration={500} className="cursor-pointer hover:text-blue-600 transition">About Me</ScrollLink>
            <ScrollLink to="product" smooth duration={500} className="cursor-pointer hover:text-blue-600 transition">Products</ScrollLink>
            <ScrollLink to="reviews" smooth duration={500} className="cursor-pointer hover:text-blue-600 transition">Reviews</ScrollLink>
            <ScrollLink to="contact" smooth duration={500} className="cursor-pointer hover:text-blue-600 transition">Contact Us</ScrollLink>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2 pb-4">
            <button onClick={scrollToTop} className="text-left font-medium hover:text-blue-600">Home</button>
            <ScrollLink to="about" smooth duration={500} onClick={closeMenu} className="text-left cursor-pointer font-medium hover:text-blue-600">About Me</ScrollLink>
            <ScrollLink to="product" smooth duration={500} onClick={closeMenu} className="text-left cursor-pointer font-medium hover:text-blue-600">Products</ScrollLink>
            <ScrollLink to="reviews" smooth duration={500} onClick={closeMenu} className="text-left cursor-pointer font-medium hover:text-blue-600">Reviews</ScrollLink>
            <ScrollLink to="contact" smooth duration={500} onClick={closeMenu} className="text-left cursor-pointer font-medium hover:text-blue-600">Contact Us</ScrollLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AppNavbar;