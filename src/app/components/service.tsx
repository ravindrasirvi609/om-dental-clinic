"use client";
import React, { useRef } from "react";
import { Smile, Sparkles, LineChart, Scissors } from "lucide-react";

const Service = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-transparent to-blue-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
          Our Dental Services
        </h2>
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl p-6 shadow-lg transition duration-300">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
              <Smile size={32} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              General Dentistry
            </h3>
            <p className="text-blue-800">
              Check-ups, cleanings, and preventive care.
            </p>
            <ul className="list-disc list-inside text-blue-800 mt-2 text-sm">
              <li>Routine Check-ups</li>
              <li>Teeth Cleaning</li>
              <li>Fillings</li>
            </ul>
          </div>
          <div className="backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl p-6 shadow-lg transition duration-300">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
              <Sparkles size={32} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Cosmetic Dentistry
            </h3>
            <p className="text-blue-800">
              Whitening, veneers, and smile makeovers.
            </p>
            <ul className="list-disc list-inside text-blue-800 mt-2 text-sm">
              <li>Teeth Whitening</li>
              <li>Veneers</li>
              <li>Bonding</li>
            </ul>
          </div>
          <div className="backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl p-6 shadow-lg transition duration-300">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
              <LineChart size={32} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Orthodontics
            </h3>
            <p className="text-blue-800">
              Braces and aligners for perfect alignment.
            </p>
            <ul className="list-disc list-inside text-blue-800 mt-2 text-sm">
              <li>Traditional Braces</li>
              <li>Invisalign</li>
              <li>Retainers</li>
            </ul>
          </div>
          <div className="backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl p-6 shadow-lg transition duration-300">
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600">
              <Scissors size={32} />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Oral Surgery
            </h3>
            <p className="text-blue-800">
              Implants and extractions with precision.
            </p>
            <ul className="list-disc list-inside text-blue-800 mt-2 text-sm">
              <li>Dental Implants</li>
              <li>Wisdom Teeth Removal</li>
              <li>Bone Grafting</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
