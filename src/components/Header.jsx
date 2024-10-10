import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUserAlt, FaPen, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle function to open/close the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-teal-700 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">
          My Simple Blog
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="flex items-center space-x-2 hover:text-gray-200">
            <FaHome size={24} />
            <span>Home</span>
          </Link>
          <Link to="/create" className="flex items-center space-x-2 hover:text-gray-200">
            <FaPen size={24} />
            <span>Create Post</span>
          </Link>
          <Link to="/profile" className="flex items-center space-x-2 hover:text-gray-200">
            <FaUserAlt size={24} />
            <span>Profile</span>
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-teal-600 p-4 mt-2 space-y-2">
          <Link to="/" onClick={toggleMenu} className="flex items-center space-x-2 hover:text-gray-200">
            <FaHome size={24} />
            <span>Home</span>
          </Link>
          <Link to="/create" onClick={toggleMenu} className="flex items-center space-x-2 hover:text-gray-200">
            <FaPen size={24} />
            <span>Create Post</span>
          </Link>
          <Link to="/profile" onClick={toggleMenu} className="flex items-center space-x-2 hover:text-gray-200">
            <FaUserAlt size={24} />
            <span>Profile</span>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
