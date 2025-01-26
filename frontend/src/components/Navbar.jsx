import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaSignInAlt } from 'react-icons/fa'; // Importing React Icons

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          SMFS
        </div>

        {/* Navbar Links */}
        <div className="space-x-6">
          <Link to="/" className="text-white hover:text-green-500 transition duration-300">Home</Link>
          <Link to="/about" className="text-white hover:text-green-500 transition duration-300">About</Link>
          <Link to="/services" className="text-white hover:text-green-500 transition duration-300">Services</Link>
          <Link to="/register" className="text-white hover:text-green-500 transition duration-300">Contact</Link>
        </div>

        {/* Login and Signup Icons */}
        <div className="flex space-x-6">
          <Link to="/register" className="text-white hover:text-green-500">
            <FaSignInAlt size={24} />
          </Link>
          <Link to="/login" className="text-white hover:text-green-500">
            <FaUserAlt size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
