import React from "react";
import Hero from "./components/hero";
import Service from "./components/service";
import Testimonial from "./components/testimonial";
import WhyChooseUs from "./components/whychooseus";
import CTABanner from "./components/CTABanner";
import { Metadata } from "next";
import FeaturedTreatments from "./components/featuredTreatments";
import Gallery from "./components/gallery";
import Statistics from "./components/statistics";
import FAQ from "./components/FAQ";
import LocalBusinessInfo from "./components/LocalBusinessInfo";
import { MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om Dental Clinic | Best Dental Care in Hinjewadi, Pune | Top Dentist Near Me",
  description: "Om Dental Clinic is the premier dental care provider in Hinjewadi, Pune. Our expert dentists offer comprehensive dental services including root canal treatment, dental implants, teeth whitening, orthodontics, and emergency dental care. Modern technology, comfortable environment, and affordable prices. Book your appointment today for world-class dental treatment in Hinjewadi Phase 1, Pune.",
  keywords: [
    "best dental clinic in hinjewadi",
    "top dentist in pune",
    "dental clinic near me hinjewadi",
    "affordable dental care pune",
    "family dentistry hinjewadi",
    "modern dental clinic pune",
    "dental consultation hinjewadi",
    "emergency dentist pune",
    "cosmetic dentistry hinjewadi",
    "root canal specialist pune",
    "dental implant clinic hinjewadi",
    "teeth whitening pune",
    "orthodontist hinjewadi",
    "pediatric dentist pune",
    "dental crown hinjewadi",
    "wisdom tooth removal pune",
  ] as string[],
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Service />

      {/* Featured Treatments Section */}
      <FeaturedTreatments />

      {/* Gallery Section */}
      <Gallery />

      {/* Statistics Section */}
      <Statistics />

      {/* Why choose us */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <Testimonial />

      {/* FAQ Section */}
      <FAQ />

      {/* Local Business Info Section */}
      <LocalBusinessInfo />

      {/* Location Map Section */}
      <section className="py-16 bg-gradient-to-t from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Find Us Here
            </h2>
            <p className="text-blue-700 max-w-2xl mx-auto">
              Conveniently located in Hinjawadi, Our dental clinic is easy to
              find and accessible for all patients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left column - Contact info */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg h-full border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600 flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900 mb-1">
                        Our Location
                      </h4>
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
                      <h4 className="font-medium text-blue-900 mb-1">
                        Phone Number
                      </h4>
                      <p className="text-blue-800">
                        <Link
                          href="tel:+919699614430"
                          className="hover:text-blue-600 transition-colors"
                        >
                          +91 96996 14430
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600 flex-shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900 mb-1">
                        Working Hours
                      </h4>
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

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="w-full inline-block text-center py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300 font-medium"
                  >
                    Get Directions
                  </Link>
                </div>
              </div>
            </div>

            {/* Right column - Map */}
            <div className="lg:col-span-8">
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
      </section>

      {/* Call to Action Banner */}
      <CTABanner />
    </div>
  );
}
