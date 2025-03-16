"use client";
import { Calendar, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTreatmentsOpen, setIsTreatmentsOpen] = useState(false);

  const treatmentLinks = [
    { name: "Invisalign", href: "/treatments/invisalign" },
    { name: "Traditional Braces", href: "/treatments/traditional-braces" },
    { name: "Root Canal", href: "/treatments/root-canal" },
    { name: "Dental Implant", href: "/treatments/dental-implant" },
    { name: "Dentures", href: "/treatments/dentures" },
    {
      name: "Wisdom Teeth Extraction",
      href: "/treatments/wisdom-teeth-extraction",
    },
    { name: "Dental Crown & Bridges", href: "/treatments/crown-and-bridges" },
  ];

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
            {/* Treatments Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-blue-900 hover:text-blue-700 font-medium"
                onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                onMouseEnter={() => setIsTreatmentsOpen(true)}
                onMouseLeave={() => setIsTreatmentsOpen(false)}
              >
                Treatments
                <ChevronDown size={16} className="ml-1" />
              </button>
              {isTreatmentsOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10"
                  onMouseEnter={() => setIsTreatmentsOpen(true)}
                  onMouseLeave={() => setIsTreatmentsOpen(false)}
                >
                  {treatmentLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="block px-4 py-2 text-blue-800 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
              {/* Mobile Treatments Dropdown */}
              <div>
                <button
                  className="flex items-center text-blue-900 hover:text-blue-700 font-medium py-2 w-full justify-between"
                  onClick={() => setIsTreatmentsOpen(!isTreatmentsOpen)}
                >
                  <span>Treatments</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      isTreatmentsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isTreatmentsOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-blue-100">
                    {treatmentLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="block py-2 text-blue-800 hover:text-blue-600"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
