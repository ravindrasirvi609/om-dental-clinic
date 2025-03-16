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
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center lg:items-start mb-4">
              <Image
                src="/images/logo.png"
                alt="Om Dental Clinic Logo"
                className="w-16 h-16 mb-2"
                width={64}
                height={64}
              />
              <div className="text-center lg:text-left">
                <h3 className="text-blue-800 font-bold text-lg">
                  Om Dental Clinic
                </h3>
                <p className="text-blue-600 text-xs">
                  Your smile is our priority
                </p>
              </div>
            </div>
            <p className="text-blue-700 mb-4 text-sm text-center lg:text-left">
              Providing exceptional dental care with a gentle touch.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/70 backdrop-blur-md p-2 rounded-full shadow-sm border border-white/20 text-blue-600 hover:text-blue-800 transition-colors hover:bg-white"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/70 backdrop-blur-md p-2 rounded-full shadow-sm border border-white/20 text-blue-600 hover:text-blue-800 transition-colors hover:bg-white"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/70 backdrop-blur-md p-2 rounded-full shadow-sm border border-white/20 text-blue-600 hover:text-blue-800 transition-colors hover:bg-white"
              >
                <Twitter size={16} />
              </a>
            </div>

            {/* Contact Section - Mobile Only */}
            <div className="mt-4 lg:hidden">
              <h3 className="text-blue-800 font-semibold text-lg mb-2 text-center">
                Contact Us
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <a
                    href="tel:+919699614430"
                    className="text-blue-700 hover:text-blue-900 transition-colors text-sm"
                  >
                    +91 96996 14430
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <a
                    href="mailto:info@omdentalclinic.com"
                    className="text-blue-700 hover:text-blue-900 transition-colors text-sm"
                  >
                    info@omdentalclinic.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-blue-800 font-semibold text-lg mb-3 border-b border-blue-100 pb-2">
              Our Services
            </h3>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href="/services#general-dentistry"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services#cosmetic-dentistry"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services#orthodontics"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link
                  href="/services#oral-surgery"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Oral Surgery
                </Link>
              </li>
              <li>
                <Link
                  href="/services#pediatric-dentistry"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Pediatric Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services#emergency-care"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Emergency Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatments Section */}
          <div>
            <h3 className="text-blue-800 font-semibold text-lg mb-3 border-b border-blue-100 pb-2">
              Treatments
            </h3>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href="/treatments/invisalign"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Invisalign
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/traditional-braces"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Traditional Braces
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/root-canal"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Root Canal
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/dental-implant"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Dental Implant
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/dentures"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Dentures
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/wisdom-teeth-extraction"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Wisdom Teeth
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/crown-and-bridges"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Crown & Bridges
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-blue-800 font-semibold text-lg mb-3 border-b border-blue-100 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-1.5">
              <li>
                <Link
                  href="/"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="text-blue-700 hover:text-blue-900 transition-colors flex items-center text-sm"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section - Desktop */}
          <div className="hidden lg:block">
            <h3 className="text-blue-800 font-semibold text-lg mb-3 border-b border-blue-100 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-blue-700 text-sm">
                  Shop no.10, Om Complex, Hinjawadi Phase 1 Road, Pune 411057
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <a
                  href="tel:+919699614430"
                  className="text-blue-700 hover:text-blue-900 transition-colors text-sm"
                >
                  +91 96996 14430
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <a
                  href="mailto:info@omdentalclinic.com"
                  className="text-blue-700 hover:text-blue-900 transition-colors text-sm"
                >
                  info@omdentalclinic.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-blue-700 text-sm">
                  <div>Sun-Sat: 9:00 AM - 9:00 PM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-blue-50/50 rounded-xl p-6 mb-8 shadow-inner">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-4">
              <h3 className="text-blue-800 font-semibold text-xl mb-2">
                Stay Updated
              </h3>
              <p className="text-blue-600 text-sm">
                Subscribe to our newsletter for dental tips, special offers, and
                clinic updates
              </p>
            </div>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-blue-100 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-700 text-sm mb-4 md:mb-0">
              © {currentYear} Om Dental Clinic. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
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
