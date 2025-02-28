"use client";
import React from "react";
import {
  Calendar,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-t from-transparent to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">
                    Our Location
                  </h3>
                  <p className="text-blue-800">
                    Shop no.10, Om Complex Hinjawadi Phase 1 Road, Shivaji
                    chowk, opposite Union Bank
                    <br />
                    Hinjawadi, Pune, Maharashtra 411057
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">
                    Phone Number
                  </h3>
                  <p className="text-blue-800">096996 14430</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">
                    Email Address
                  </h3>
                  <p className="text-blue-800">info@omdentalclinic.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600 flex-shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-blue-900 mb-1">
                    Working Hours
                  </h3>
                  <p className="text-blue-800">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 3:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            {/* Added Social Media Links */}
            <div className="mt-8 flex justify-start space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <div className="backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">
                Quick Contact
              </h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-blue-800 mb-1 text-sm"
                      htmlFor="name"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg backdrop-blur-sm bg-white/80 border border-blue-100 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-blue-800 mb-1 text-sm"
                      htmlFor="email"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg backdrop-blur-sm bg-white/80 border border-blue-100 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-blue-800 mb-1 text-sm"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 rounded-lg backdrop-blur-sm bg-white/80 border border-blue-100 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label
                    className="block text-blue-800 mb-1 text-sm"
                    htmlFor="service"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 rounded-lg backdrop-blur-sm bg-white/80 border border-blue-100 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition"
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Dentistry</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="surgery">Oral Surgery</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-blue-800 mb-1 text-sm"
                    htmlFor="message"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg backdrop-blur-sm bg-white/80 border border-blue-100 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
