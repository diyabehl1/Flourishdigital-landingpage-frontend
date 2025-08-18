

import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
    const handleScroll = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="bg-gray-600
text-white
shadow-xl py-12 px-8 items-center">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">

                {/* Logo & Info */}
                <div>
                    <div className="flex items-center mb-4">
                        <img src="./images/im1.png" alt="Flourish Digital" className="h-24 w-auto" />
                        <strong className="ml-2 text-xl font-bold text-white">Flourish Digital</strong>
                    </div>
                    <p>AI chatbots for text & voice to convert, support, and scale—24/7.</p>
                </div>

                {/* Company Links */}
                <div className="ml-10">
                    <strong className="block mb-2">Company</strong>
                    <ul className="flex flex-col gap-2">
                        {["features", "demo", "pricing", "contact"].map((link) => (
                            <li key={link}>
                                <button
                                    onClick={() => handleScroll(link)}
                                    className="hover:text-blue-400 transition-colors text-left w-full text-sm"
                                >
                                    {link.charAt(0).toUpperCase() + link.slice(1)}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal Links */}
                <div className="ml-10">
                    <strong className="block mb-2">Legal</strong>
                    <ul className="flex flex-col gap-2">
                        <li>
                            <button className="hover:text-blue-400 transition-colors text-left w-full text-sm">
                                Privacy
                            </button>
                        </li>
                        <li>
                            <button className="hover:text-blue-400 transition-colors text-left w-full text-sm">
                                Terms
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="ml-10">
                    <strong className="block mb-2">Follow</strong>
                    <div className="flex space-x-4 text-2xl mt-2">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:text-blue-400 transition-colors duration-300" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="hover:text-blue-400 transition-colors duration-300" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-pink-400 transition-colors duration-300" />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="hover:text-blue-700 transition-colors duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;