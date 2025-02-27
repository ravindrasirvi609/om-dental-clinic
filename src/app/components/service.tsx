"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Icons
import { Smile, Sparkles, LineChart, Scissors } from "lucide-react";

const Service = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Cards animation on scroll
    const cards = cardsRef.current as unknown as HTMLElement;

    gsap.fromTo(
      cards,
      {
        y: 30,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      }
    );

    // Hover animations
    const cardElements = cards.querySelectorAll(".backdrop-blur-md");
    cardElements.forEach((card) => {
      const enterAnimation = () => {
        gsap.to(card, {
          y: -10,
          boxShadow: "0 15px 30px rgba(0, 123, 255, 0.2)",
          duration: 0.3,
        });
      };

      const leaveAnimation = () => {
        gsap.to(card, {
          y: 0,
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
        });
      };

      card.addEventListener("mouseenter", enterAnimation);
      card.addEventListener("mouseleave", leaveAnimation);

      return () => {
        card.removeEventListener("mouseenter", enterAnimation);
        card.removeEventListener("mouseleave", leaveAnimation);
      };
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-b from-transparent to-blue-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
          Our Dental Services
        </h2>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* General Dentistry Card */}
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
          </div>

          {/* Cosmetic Dentistry Card */}
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
          </div>

          {/* Orthodontics Card */}
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
          </div>

          {/* Oral Surgery Card */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
