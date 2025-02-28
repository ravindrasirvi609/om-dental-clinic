"use client";
import React, { useState } from "react";
import { Mail, MapPin, Phone, Clock, Check } from "lucide-react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: { target: { id: string; value: string } }) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-t from-blue-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Connect With Us
          </h1>
          <p className="text-blue-700 max-w-2xl mx-auto">
            We&apos;re here to answer any questions you may have about our
            dental services. Reach out to us and we&apos;ll respond as soon as
            we can.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left column - Contact info */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full border border-blue-100">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2 text-lg">
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

                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2 text-lg">
                      Phone Number
                    </h3>
                    <p className="text-blue-800 text-lg">
                      <a
                        href="tel:+919699614430"
                        className="hover:text-blue-600 transition-colors"
                      >
                        +91 96996 14430
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2 text-lg">
                      Email Address
                    </h3>
                    <p className="text-blue-800 text-lg">
                      <a
                        href="mailto:info@omdentalclinic.com"
                        className="hover:text-blue-600 transition-colors"
                      >
                        info@omdentalclinic.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2 text-lg">
                      Working Hours
                    </h3>
                    <p className="text-blue-800">
                      Monday - Sunday: 9:00 AM - 9:00 PM
                      <br />
                      <span className="text-green-600 font-medium flex items-center mt-1">
                        <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                        Open Now
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-10">
                <h3 className="font-semibold text-blue-900 mb-4 text-lg">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753C20.18 7.773 21.692 5.25 22 4.009z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Form & Map */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {/* Contact Form */}
              <div className="backdrop-blur-md bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">
                  Quick Contact
                </h2>

                {formSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check size={32} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-green-700">
                      Your message has been sent successfully. We&apos;ll get
                      back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-5" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="block text-blue-800 mb-2 text-sm font-medium"
                          htmlFor="name"
                        >
                          Your Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                          placeholder="Ravindra Sirvi"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-blue-800 mb-2 text-sm font-medium"
                          htmlFor="email"
                        >
                          Email Address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                          placeholder="ravindra@gmail.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-blue-800 mb-2 text-sm font-medium"
                        htmlFor="phone"
                      >
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-blue-800 mb-2 text-sm font-medium"
                        htmlFor="service"
                      >
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg text-blue-700 bg-blue-50 border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                      >
                        <option value="">Select a service</option>
                        <option value="general">General Dentistry</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="orthodontics">Orthodontics</option>
                        <option value="surgery">Oral Surgery</option>
                        <option value="implants">Dental Implants</option>
                        <option value="emergency">Emergency Dental Care</option>
                        <option value="pediatric">Pediatric Dentistry</option>
                      </select>
                    </div>
                    <div>
                      <label
                        className="block text-blue-800 mb-2 text-sm font-medium"
                        htmlFor="message"
                      >
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-blue-50 border border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300 font-medium text-lg"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-blue-100 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d989.6164627903383!2d73.7377309956639!3d18.590684738531674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbdd0a18460b%3A0xd18a45afc1b8bb13!2sOM%20DENTAL%20CLINIC!5e1!3m2!1sen!2sin!4v1740762902016!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
