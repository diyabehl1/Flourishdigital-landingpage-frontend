import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Banner from "./Banner";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-gray-50/90 backdrop-blur-md shadow-md h-20">
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 h-full overflow-visible">
          {/* Logo */}
          <div className="flex items-center h-full overflow-visible">
            <img
              src="./images/im1.png"
              alt="Flourish Digital"
              className="
                h-28 sm:h-32 md:h-36 lg:h-40
                w-auto
                object-contain
                transition-all duration-300
              "
            />
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-6">
            <li>
              <a
                href="#features"
                className="text-black hover:text-blue-500 font-semibold transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#demo"
                className="text-black hover:text-blue-500 font-semibold transition-colors"
              >
                Demo
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-black hover:text-blue-500 font-semibold transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-black hover:text-blue-500 font-semibold transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:inline-block bg-gradient-to-r from-blue-600 to-sky-400 text-white px-5 py-2 rounded-lg hover:opacity-90 text-center transition-all duration-200"
          >
            Get Your AI Chatbot
          </a>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 text-2xl p-2 rounded-md hover:bg-gray-200 transition-colors"
            >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen py-4" : "max-h-0 py-0"
          }`}
        >
          <ul className="flex flex-col gap-3 px-4 sm:px-6">
            <li>
              <a
                href="#features"
                className="text-black hover:text-blue-500 font-semibold transition-colors block py-2"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#demo"
                className="text-black hover:text-blue-500 font-semibold transition-colors block py-2"
              >
                Demo
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="text-black hover:text-blue-500 font-semibold transition-colors block py-2"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-black hover:text-blue-500 font-semibold transition-colors block py-2"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block w-full sm:w-auto bg-gradient-to-r from-blue-600 to-sky-400 text-white px-4 py-2 rounded-lg hover:opacity-90 text-center transition-all duration-200"
              >
                Get Your AI Chatbot
              </a>
            </li>
          </ul>
        </div>
      </header>
      <Banner />
    </>
  );
};

export default Header;

