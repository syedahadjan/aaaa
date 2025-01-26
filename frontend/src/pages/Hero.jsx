import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake } from 'react-icons/fa'; // Finance icon for visual appeal

const Hero = () => {
  return (
    <section className="bg-[#101828] text-white py-20 px-6 md:px-16">
      <div className="container mx-auto flex items-center justify-between flex-col md:flex-row">
        {/* Left Side: Text and CTA */}
        <motion.div
          className="text-center md:text-left md:w-1/2"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
        >
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Empowering Communities, One Loan at a Time
          </h1>
          <p className="text-lg mb-6">
            We provide accessible financial services to help individuals and small businesses succeed. Join us in fostering economic growth and opportunity.
          </p>
          <motion.button
            className="bg-white text-gray-900 py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHandshake className="inline mr-2 text-xl" />
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Side: SVG Illustration */}
        <motion.div
          className="mt-8 md:mt-0 md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-96 w-96 mx-auto md:mx-0"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M32 12C41.0464 12 48 18.9534 48 27C48 35.0466 41.0464 42 32 42C22.9536 42 16 35.0466 16 27C16 18.9534 22.9536 12 32 12ZM32 10C21.5066 10 13 18.5066 13 27C13 35.4934 21.5066 44 32 44C42.4934 44 51 35.4934 51 27C51 18.5066 42.4934 10 32 10Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
