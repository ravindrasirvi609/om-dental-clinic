"use client";
import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
                Om
              </div>
              <div>
                <h3 className="text-blue-800 font-bold text-lg">
                  Om Dental Clinic
                </h3>
                <p className="text-blue-600 text-xs">
                  Your smile is our priority
                </p>
              </div>
            </div>
            <p className="text-blue-700 mb-4">
              Providing exceptional dental care with a gentle touch. Our
              state-of-the-art clinic offers comprehensive dental services for
              the whole family.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/70 backdrop-blur-md p-2 rounded-full shadow-sm border border-white/20 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/70 backdrop-blur-md p-2 rounded-full shadow-sm border border-white/20 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/70 backdrop-blur-md p-2 rounded-full shadow-sm border border-white/20 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-blue-800 font-semibold text-lg mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#general-dentistry"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cosmetic-dentistry"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services#orthodontics"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link
                  href="/services#oral-surgery"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  Oral Surgery
                </Link>
              </li>
              <li>
                <Link
                  href="/services#pediatric-dentistry"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  Pediatric Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services#emergency-care"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  Emergency Dental Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-blue-800 font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-blue-800 font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-blue-700">
                  123 Dental Plaza, Baner Road, Pune, Maharashtra 411045
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a
                  href="tel:+919699614430"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  +91 96996 14430
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:info@omdentalclinic.com"
                  className="text-blue-700 hover:text-blue-900 transition-colors"
                >
                  info@omdentalclinic.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-blue-700">
                  <div>Mon-Sat: 9:00 AM - 8:00 PM</div>
                  <div>Sunday: 10:00 AM - 2:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-blue-100 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-700 text-sm mb-4 md:mb-0">
              © {currentYear} Om Dental Clinic. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              <Link
                href="/privacy-policy"
                className="text-blue-700 hover:text-blue-900 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-blue-700 hover:text-blue-900 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-blue-700 hover:text-blue-900 text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
