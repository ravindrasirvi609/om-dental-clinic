"use client";
import React from "react";
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { Calendar } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <div className="md:w-1/2 mb-8 md:mb-0 z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Welcome to Om Dental Clinic
            </h2>
            <p className="text-blue-800 text-lg mb-6">
              Providing comprehensive dental care in a comfortable and friendly
              environment. Our team of experienced dentists is dedicated to
              helping you achieve and maintain a healthy, beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full backdrop-blur-sm bg-opacity-90 shadow-md transition duration-300 flex items-center justify-center">
                <Calendar size={18} className="mr-2" />
                Book an Appointment
              </button>
              <button className="px-6 py-3 bg-white hover:bg-blue-50 text-blue-800 rounded-full backdrop-blur-md bg-opacity-50 border border-white/40 shadow-sm transition duration-300 flex items-center justify-center">
                Learn More About Us
                <ChevronRight size={18} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 z-10">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-200 absolute -top-6 -left-6 z-0"></div>
              <div className="backdrop-blur-sm bg-white/30 border border-white/40 rounded-2xl p-3 shadow-xl relative z-10">
                <Image
                  src="/om-clinic.jpg"
                  alt="Dental clinic with modern equipment"
                  className="rounded-xl w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                General Dentistry
              </h3>
              <p className="text-blue-800">
                Routine check-ups and preventive care to maintain your dental
                health.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Cosmetic Dentistry
              </h3>
              <p className="text-blue-800">
                Enhance your smile with professional whitening and veneers.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Orthodontics
              </h3>
              <p className="text-blue-800">
                Straighten teeth with modern braces or clear aligners for all
                ages.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Oral Surgery
              </h3>
              <p className="text-blue-800">
                Expert care for dental implants and extractions with minimized
                discomfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12">
            What Our Patients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-3 text-blue-800 font-bold">
                  SK
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Sarah K.</h3>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-800">
                &quot;The staff was friendly, and my visit was stress-free! Dr.
                Patel explained everything clearly and made me feel at ease
                throughout my treatment.&quot;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-3 text-blue-800 font-bold">
                  JD
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">John D.</h3>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-800">
                &quot;I had severe dental anxiety before coming to Om Dental.
                The team was incredibly patient and made me comfortable. Now I
                actually look forward to my check-ups!&quot;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-3 text-blue-800 font-bold">
                  AM
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Aisha M.</h3>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-800">
                &quot;My children love coming here! The pediatric dentistry team
                is amazing with kids and makes dental care fun and educational.
                Highly recommend for families.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-t from-transparent to-blue-50">
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
                        className="w-full px-4 py-2 rounded-lg backdrop-blur-sm bg-white/80 border border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition"
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
                        className="w-full px-4 py-2 rounded-lg backdrop-blur-sm bg-white/80 border border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition"
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
                      className="w-full px-4 py-2 rounded-lg backdrop-blur-sm bg-white/80 border border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition"
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
                      className="w-full px-4 py-2 rounded-lg backdrop-blur-sm bg-white/80 border border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition"
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
                      className="w-full px-4 py-2 rounded-lg backdrop-blur-sm bg-white/80 border border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 outline-none transition"
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
    </div>
  );
}
