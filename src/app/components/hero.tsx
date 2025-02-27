"use client";
import React, { useEffect, useRef } from "react";
import { Calendar, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

const Hero = () => {
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Headline animation
    gsap.fromTo(
      headlineRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Subheadline animation with delay
    gsap.fromTo(
      subheadlineRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" }
    );

    // Buttons bounce in animation
    gsap.fromTo(
      buttonsRef.current as unknown as HTMLElement,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "back.out" }
    );

    // Background zoom effect
    gsap.fromTo(
      backgroundRef.current,
      { scale: 1 },
      { scale: 1.1, duration: 10, repeat: -1, yoyo: true, ease: "none" }
    );
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image with zoom effect */}
      <div ref={backgroundRef} className="absolute inset-0 w-full h-full">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/om-clinic.jpg')",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        ></div>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content container - glassmorphic */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="backdrop-blur-md bg-white/15 p-8 md:p-12 rounded-2xl max-w-4xl w-full border border-white/20 shadow-xl">
          <div className="text-center">
            {/* Headline */}
            <h1
              ref={headlineRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-['Montserrat',sans-serif]"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
            >
              Transform Your Smile with Om Dental Clinic
            </h1>

            {/* Subheadline */}
            <p
              ref={subheadlineRef}
              className="text-xl md:text-2xl text-white/90 mb-8 font-light"
            >
              Expert dental care in a welcoming environment
            </p>

            {/* CTA Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              {/* Primary CTA */}
              <button
                className="px-8 py-4 rounded-full text-white font-semibold transition-transform duration-300 hover:scale-105 flex items-center justify-center"
                style={{
                  background: "linear-gradient(to right, #007bff, #00c4ff)",
                }}
              >
                <Calendar size={20} className="mr-2" />
                Book Appointment
              </button>

              {/* Secondary CTA */}
              <button className="px-8 py-4 rounded-full backdrop-blur-md bg-transparent border-2 border-white/50 text-white font-semibold transition-all duration-300 hover:bg-white/20 flex items-center justify-center">
                Explore Services
                <ChevronRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
