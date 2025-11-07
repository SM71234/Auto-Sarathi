import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import autoLogo from "../assets/auto-logo.png"; // adjust the path as needed

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Hide navbar on Sign In / Sign Up pages
  if (
    location.pathname.startsWith("/signup") ||
    location.pathname.startsWith("/signin")
  ) {
    return null;
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md h-[10vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="flex justify-between items-center">
          {/* ✅ Logo — larger but balanced */}
          <Link to="/home" className="flex items-center cursor-pointer">
            <img
              src={autoLogo}
              alt="Auto Sarathi Logo"
              className="h-[110px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/home"
              className="text-gray-900 font-medium hover:text-yellow-600 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/work"
              className="text-gray-900 font-medium hover:text-yellow-600 cursor-pointer"
            >
              How It Works
            </Link>
            <Link
              to="/fareestimation"
              className="text-gray-900 font-medium hover:text-yellow-600 cursor-pointer"
            >
              Fare Estimation
            </Link>
            <Link
              to="/about"
              className="text-gray-900 font-medium hover:text-yellow-600 cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-900 font-medium hover:text-yellow-600 cursor-pointer"
            >
              Contact Us
            </Link>

            {/* ✅ Replaced "Book Now" with "Profile" */}
            <Link
              to="/profile"
              className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-500 cursor-pointer"
            >
              Profile
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block h-1 w-6 bg-black transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-black transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 w-6 bg-black transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white p-4">
            <Link
              to="/home"
              className="block py-2 text-gray-900 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/work"
              className="block py-2 text-gray-900 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/fareestimation"
              className="block py-2 text-gray-900 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Fare Estimation
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-900 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-900 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>

            {/* ✅ "Profile" button in mobile menu */}
            <button className="mt-2 w-full bg-yellow-400 text-black font-bold px-6 py-2 rounded-lg cursor-pointer">
              Profile
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
