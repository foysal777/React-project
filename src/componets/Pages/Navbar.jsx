import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">Brand</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/home" className="hover:text-gray-200">Home</Link>
          <Link to="/service" className="hover:text-gray-200">Service</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-blue-700 py-2 space-y-2">
          <Link to="/" className="px-4 py-2 hover:bg-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/service" className="px-4 py-2 hover:bg-blue-500" onClick={() => setIsOpen(false)}>Service</Link>
          <Link to="/about" className="px-4 py-2 hover:bg-blue-500" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="px-4 py-2 hover:bg-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
