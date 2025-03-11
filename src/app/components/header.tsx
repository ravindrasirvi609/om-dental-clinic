"use client";
import { Calendar, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
              Om
            </div>
            <div>
              <h1 className="text-blue-800 font-bold text-lg md:text-xl">
                Om Dental Clinic
              </h1>
              <p className="text-blue-600 text-xs">
                Your smile is our priority
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              href="/"
              className="text-blue-900 hover:text-blue-700 font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-blue-900 hover:text-blue-700 font-medium"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-blue-900 hover:text-blue-700 font-medium"
            >
              Services
            </Link>
            <Link
              href="/testimonials"
              className="text-blue-900 hover:text-blue-700 font-medium"
            >
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="text-blue-900 hover:text-blue-700 font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Book Appointment Button */}
          <div className="hidden md:block">
            <button
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full backdrop-blur-sm bg-opacity-90 shadow-md transition duration-300"
              onClick={() =>
                window.open("https://wa.me/919699614430", "_blank")
              }
            >
              <Calendar size={16} />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-lg bg-white/80 border-b border-white/20 shadow-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-blue-900 hover:text-blue-700 font-medium py-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-blue-900 hover:text-blue-700 font-medium py-2"
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-blue-900 hover:text-blue-700 font-medium py-2"
              >
                Services
              </Link>
              <Link
                href="/testimonials"
                className="text-blue-900 hover:text-blue-700 font-medium py-2"
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="text-blue-900 hover:text-blue-700 font-medium py-2"
              >
                Contact
              </Link>
              <button
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full backdrop-blur-sm bg-opacity-90 shadow-md transition duration-300 w-full justify-center mt-2"
                onClick={() =>
                  window.open("https://wa.me/919699614430", "_blank")
                }
              >
                <Calendar size={16} />
                <span>Book Appointment</span>
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
