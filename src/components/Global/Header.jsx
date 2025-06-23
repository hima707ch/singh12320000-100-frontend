import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="Header_1" className="fixed w-full top-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" id="Header_2">
            <img src={images[0]} alt="Logo" className="h-12 w-auto hover:opacity-80 transition-opacity" id="Header_3"/>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent" id="Header_4">DreamHome</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" id="Header_5">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" id="Header_6">Home</Link>
            <Link to="/properties" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" id="Header_7">Properties</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" id="Header_8">Contact</Link>
            <div className="flex items-center space-x-4" id="Header_9">
              <Link to="/login" className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors font-medium" id="Header_10">Login</Link>
              <Link to="/register" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium" id="Header_11">Register</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            id="Header_12"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4" id="Header_13">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium" id="Header_14">Home</Link>
            <Link to="/properties" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium" id="Header_15">Properties</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium" id="Header_16">Contact</Link>
            <div className="space-y-2" id="Header_17">
              <Link to="/login" className="block px-4 py-2 text-center text-blue-600 hover:text-blue-700 transition-colors font-medium" id="Header_18">Login</Link>
              <Link to="/register" className="block px-4 py-2 text-center bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium" id="Header_19">Register</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;