"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 md:flex justify-between items-center">
        {}
        <div className="items-center space-x-4 hidden md:flex">
          <img
            src="/logo.png"
            alt="Restaurant Logo"
            className="w-10 h-10 object-cover"
          />
          <h1 className="text-2xl font-bold text-blue-500">Deva's Kitchen</h1>
        </div>

        {/* Hamburger Icon and Restaurant Name (Only for small screens) */}
        <div className="lg:hidden flex justify-between w-full items-center relative z-10">
          <div className="flex items-center space-x-4">
            <img
              src="/logo.png"
              alt="Restaurant Logo"
              className="w-10 h-10 object-cover"
            />
            <h1 className="text-2xl font-bold text-blue-500">Deva's Kitchen</h1>
          </div>
          <button className="text-gray-800" onClick={toggleMenu}>
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {}
        <div className="hidden lg:flex space-x-6">
          <Link href="#hero" className="text-gray-800 hover:text-blue-500">
            Home
          </Link>
          <Link href="#about" className="text-gray-800 hover:text-blue-500">
            About
          </Link>
          <Link href="#recipes" className="text-gray-800 hover:text-blue-500">
            Recipes
          </Link>
          <Link href="#reviews" className="text-gray-800 hover:text-blue-500">
            Reviews
          </Link>
          <Link href="#contact" className="text-gray-800 hover:text-blue-500">
            Contact
          </Link>
        </div>

        {}
        <div className="hidden md:flex space-x-6">
          <Link
            href="/slots"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Check Availability
          </Link>
          <Link
            href="/booking"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Book Now
          </Link>
        </div>
      </div>

      {}
      <div
        className={`lg:hidden ${menuOpen ? "block" : "hidden"} absolute inset-0 bg-white bg-opacity-90 shadow-md z-0`}
      >
        <div className="px-4 py-2 space-y-4 h-[90vh] mt-[calc(5rem)]">
          <Link
            href="#hero"
            className="text-gray-800 hover:text-blue-500 block"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-gray-800 hover:text-blue-500 block"
          >
            About
          </Link>
          <Link
            href="#recipes"
            className="text-gray-800 hover:text-blue-500 block"
          >
            Recipes
          </Link>
          <Link
            href="#reviews"
            className="text-gray-800 hover:text-blue-500 block"
          >
            Reviews
          </Link>
          <Link
            href="#contact"
            className="text-gray-800 hover:text-blue-500 block"
          >
            Contact
          </Link>

          {}
          <div className="flex flex-col space-y-4 mt-4">
            <Link
              href="/slots"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Check Availability
            </Link>
            <Link
              href="/booking"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
