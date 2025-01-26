import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Column: Logo and About */}
        <div>
          <h2 className="text-3xl font-bold text-green-500 mb-4">MicroFinance Empower</h2>
          <p className="text-lg text-gray-400 mb-6">
            Empowering communities with financial support and opportunities for growth and success.
          </p>
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600 transition-colors">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaTwitter className="text-xl" />
            </a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700 transition-colors">
              <FaLinkedinIn className="text-xl" />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-pink-500 transition-colors">
              <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>

        {/* Middle Column: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#home" className="text-gray-400 hover:text-green-500 transition-all">Home</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-green-500 transition-all">Services</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-green-500 transition-all">About Us</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-green-500 transition-all">Contact</a></li>
          </ul>
        </div>

        {/* Right Column: Resources */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300 mb-4">Resources</h3>
          <ul className="space-y-3">
            <li><a href="#faq" className="text-gray-400 hover:text-green-500 transition-all">FAQ</a></li>
            <li><a href="#terms" className="text-gray-400 hover:text-green-500 transition-all">Terms & Conditions</a></li>
            <li><a href="#privacy" className="text-gray-400 hover:text-green-500 transition-all">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom: Copyright */}
      <div className="bg-gray-800 py-4 mt-8">
        <p className="text-center text-sm text-gray-400">
          © 2025 MicroFinance Empower. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
