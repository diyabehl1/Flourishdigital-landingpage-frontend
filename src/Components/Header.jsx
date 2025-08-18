

import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Banner from "./Banner";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 bg-gray-50/90 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="./images/im1.png"
            alt="Flourish Digital"
            className="h-12 sm:h-14 md:h-16 lg:h-[65px] transition-all duration-300"
          />
          <strong className="ml-3 text-lg sm:text-xl text-black font-bold">
            Flourish Digital
          </strong>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          <li>
            <a href="#features" className="text-black hover:text-blue-500 font-bold transition-colors">
              Features
            </a>
          </li>
          <li>
            <a href="#demo" className="text-black hover:text-blue-500 font-bold transition-colors">
              Demo
            </a>
          </li>
          <li>
            <a href="#faq" className="text-black hover:text-blue-500 font-bold transition-colors">
              FAQ
            </a>
          </li>
          <li>
            <a href="#contact" className="text-black hover:text-blue-500 font-bold transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden lg:block bg-gradient-to-r from-blue-600 to-sky-400 text-white px-4 py-2 rounded-lg hover:opacity-90 text-center"
        >
          Get Your AI Chatbot
        </a>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 text-2xl"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-6 py-4">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#features" className="text-black hover:text-blue-500 font-bold transition-colors">
                Features
              </a>
            </li>
            <li>
              <a href="#demo" className="text-black hover:text-blue-500 font-bold transition-colors">
                Demo
              </a>
            </li>
            <li>
              <a href="#faq" className="text-black hover:text-blue-500 font-bold transition-colors">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="text-black hover:text-blue-500 font-bold transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block w-full bg-gradient-to-r from-blue-600 to-sky-400 text-white px-4 py-2 rounded-lg hover:opacity-90 text-center"
              >
                Get Your AI Chatbot
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>

    <Banner></Banner>
    </>
  );
};

export default Header;