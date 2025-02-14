import React, { useState  } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 

  

  return (
    <nav className="bg-emerald-500 text-white p-4 shadow-md fixed top-0 left-0 w-full z-50" >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">Tomato</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className="hover:text-gray-200">Home</NavLink>
          <NavLink to="/service" className="hover:text-gray-200">Service</NavLink>
          <NavLink to="/about" className="hover:text-gray-200">About</NavLink>
          <NavLink to="/contact" className="hover:text-gray-200">Contact</NavLink>
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
