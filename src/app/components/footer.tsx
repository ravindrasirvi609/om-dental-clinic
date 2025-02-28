import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Calendar,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-blue-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Om Dental Clinic
            </h3>
            <div className="mb-4">
              <Image
                src="/om-clinic.jpg"
                alt="Om Dental Clinic Logo"
                width={120}
                height={60}
                className="rounded-lg"
              />
            </div>
            <p className="text-blue-800 mb-4">
              Providing quality dental care to Pune and Hinjawadi area since
              2010. Your smile is our priority.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-800 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-800 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-800 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-800 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Our Doctors
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-800 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-800 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-800 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> General Dentistry
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-800 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Cosmetic Dentistry
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-800 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Orthodontics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-800 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Oral Surgery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-800 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Pediatric Dentistry
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-800 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Dental Implants
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="text-blue-600 mr-2 mt-1 flex-shrink-0"
                />
                <span className="text-blue-800">
                  Shop no.10, Om Complex Hinjawadi Phase 1 Road, Shivaji chowk,
                  opposite Union Bank, Hinjawadi, Pune, Maharashtra 411057
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-blue-800">096996 14430</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-blue-600 mr-2 flex-shrink-0" />
                <span className="text-blue-800">info@omdentalclinic.com</span>
              </li>
              <li className="flex items-start">
                <Calendar
                  size={18}
                  className="text-blue-600 mr-2 mt-1 flex-shrink-0"
                />
                <div className="text-blue-800">
                  <p>Mon-Sun: 9:00 AM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="pt-6 border-t border-blue-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-800 text-center md:text-left mb-4 md:mb-0">
              © {new Date().getFullYear()} Om Dental Clinic. All Rights
              Reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="text-blue-800 hover:text-blue-600 transition duration-300"
              >
                Privacy Policy
              </a>
              <span className="text-blue-300">|</span>
              <a
                href="#"
                className="text-blue-800 hover:text-blue-600 transition duration-300"
              >
                Terms of Service
              </a>
              <span className="text-blue-300">|</span>
              <a
                href="#"
                className="text-blue-800 hover:text-blue-600 transition duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
