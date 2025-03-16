"use client";
import React, { useEffect, useRef, useState } from "react";
import { Calendar, Phone, MapPin, ArrowRight, Star } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAppointmentPrompt, setShowAppointmentPrompt] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Create a context to ensure proper cleanup
    const ctx = gsap.context(() => {
      // Initial animations with improved timing and easing
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          // Add a subtle pulse animation to the CTA button after the main animation
          gsap.to(".cta-primary", {
            boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)",
            repeat: 2,
            yoyo: true,
            duration: 0.8,
            ease: "sine.inOut",
          });
        },
      });

      // Staggered entrance for the floating elements
      tl.fromTo(
        ".floating-element",
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "elastic.out(1, 0.5)",
        },
        0
      );

      // Headline animation with improved clip path
      tl.fromTo(
        headlineRef.current,
        { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
        { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1 },
        0.3
      );

      // Content fade in with slight bounce
      tl.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "back.out(1.2)" },
        0.8
      );

      // CTA buttons with staggered entrance
      tl.fromTo(
        ctaRef.current?.children || [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.5)",
        },
        1.2
      );

      // Image reveal with slight zoom
      tl.fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power2.out" },
        0.5
      );

      // Stats row with staggered entrance
      tl.fromTo(
        statsRef.current ? Array.from(statsRef.current.children) : [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.6,
          ease: "back.out(1.2)",
        },
        1.4
      );

      // Wave animation
      tl.fromTo(
        waveRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        1.2
      );

      // Create scroll-triggered animations
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          // Parallax effect for the image
          if (imageRef.current) {
            gsap.to(imageRef.current, {
              y: self.progress * 50,
              duration: 0.1,
              ease: "none",
            });
          }

          // Parallax effect for the wave
          if (waveRef.current) {
            gsap.to(waveRef.current, {
              y: self.progress * -20,
              duration: 0.1,
              ease: "none",
            });
          }
        },
      });
    }, heroRef); // Scope the context to the hero element

    // Scroll listener for info bar and appointment prompt
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);

      // Show appointment prompt after scrolling a bit
      if (scrollY > 300 && !showAppointmentPrompt) {
        setShowAppointmentPrompt(true);
        if (promptRef.current) {
          gsap.fromTo(
            promptRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctx.revert(); // Clean up all GSAP animations
    };
  }, [showAppointmentPrompt]);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 overflow-hidden"
    >
      {/* Floating Elements - Visual flair */}
      <div className="floating-element absolute top-1/4 left-[5%] w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
      <div className="floating-element absolute bottom-1/3 right-[15%] w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="floating-element absolute top-[10%] right-[10%] w-16 h-16 bg-indigo-500/10 rounded-full blur-xl"></div>

      {/* Top quick info bar */}
      <div
        className={`w-full py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white transition-all duration-300 ${
          isScrolled ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6 flex-wrap">
            <div className="flex items-center">
              <Phone size={14} className="mr-1 flex-shrink-0" />
              <span>+91 9699614430</span>
            </div>
            <div className="flex items-center hidden sm:flex">
              <MapPin size={14} className="mr-1 flex-shrink-0" />
              <span>Shivaji chowk, Hinjawadi, Pune</span>
            </div>
          </div>
          <div className="flex items-center space-x-1 mt-1 sm:mt-0">
            <Star size={14} fill="white" />
            <Star size={14} fill="white" />
            <Star size={14} fill="white" />
            <Star size={14} fill="white" />
            <Star size={14} fill="white" />
            <span className="ml-1">4.9/5 (800+ Reviews)</span>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="container mx-auto px-4 pt-10 md:pt-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content Column */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 z-10">
            <div className="max-w-xl mx-auto lg:mx-0">
              {/* Headline with clip animation */}
              <div ref={headlineRef} className="relative overflow-hidden">
                <span className="inline-block py-1 px-3 mb-4 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                  Expert Dental Care • Same-Day Appointments
                </span>
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight font-heading">
                  Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                    Perfect Smile
                  </span>{" "}
                  Journey Starts Here
                </h1>
              </div>

              {/* Content */}
              <div ref={contentRef} className="mt-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Experience personalized dental care in a comfortable
                  environment. Our advanced technology and experienced team
                  deliver exceptional results with a gentle approach.
                </p>

                {/* Trust indicators */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-700">
                      Insurance Accepted
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-700">
                      Latest Technology
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-700">
                      Painless Treatment
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                ref={ctaRef}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() =>
                    window.open("https://wa.me/919699614430", "_blank")
                  }
                  className="cta-primary px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <Calendar size={18} className="mr-2" />
                  Book Your Visit
                </button>
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-800 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group"
                >
                  Explore Services
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div
              ref={imageRef}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-md lg:max-w-none"
            >
              <div className="aspect-[4/3] md:aspect-[16/10] relative">
                <Image
                  src="/om-clinic.jpg"
                  alt="Om Dental Clinic"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Floating highlight card */}
              <div className="absolute -bottom-2 -right-1 md:-bottom-1 md:-right-2 bg-white rounded-lg shadow-xl p-4 max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    <Star size={16} fill="#FBBF24" stroke="none" />
                    <Star size={16} fill="#FBBF24" stroke="none" />
                    <Star size={16} fill="#FBBF24" stroke="none" />
                    <Star size={16} fill="#FBBF24" stroke="none" />
                    <Star size={16} fill="#FBBF24" stroke="none" />
                  </div>
                  <span className="ml-1 text-sm font-medium">5.0</span>
                </div>
                <p className="text-xs text-gray-600">
                  &quot;Best dental experience I&apos;ve ever had. Dr. Om was
                  gentle and professional!&quot;
                </p>
                <p className="mt-1 text-xs font-medium">- Priya S.</p>
              </div>
            </div>

            {/* Background design elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border-2 border-dashed border-blue-200 animate-spin-slow opacity-70"></div>
            <div className="absolute top-[10%] right-[5%] w-20 h-20 bg-blue-200 rounded-full opacity-30 blur-xl"></div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 pb-12 md:pb-24 relative z-10"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              10+
            </p>
            <p className="text-gray-600 mt-1">Years of Excellence</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              5000+
            </p>
            <p className="text-gray-600 mt-1">Satisfied Patients</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl sm:col-span-2 md:col-span-1">
            <p className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              100%
            </p>
            <p className="text-gray-600 mt-1">Satisfaction Guaranteed</p>
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div
        ref={waveRef}
        className="absolute bottom-0 left-0 w-full overflow-hidden z-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="text-blue-50 w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0,96L60,80C120,64,240,32,360,32C480,32,600,64,720,80C840,96,960,96,1080,80C1200,64,1320,32,1380,16L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Add a subtle animated scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-500 animate-bounce opacity-75 z-20">
        <span className="text-xs font-medium mb-1">Scroll Down</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>

      {/* Floating appointment prompt */}
      {showAppointmentPrompt && (
        <div
          ref={promptRef}
          className="fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl p-4 max-w-xs border-l-4 border-blue-600"
        >
          <button
            className="absolute -top-2 -right-2 w-6 h-6 bg-gray-200 rounded-full text-gray-600 flex items-center justify-center"
            onClick={() => setShowAppointmentPrompt(false)}
          >
            ×
          </button>
          <div className="flex items-start">
            <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
              <Calendar size={20} className="text-blue-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-gray-900">
                Need a dental check-up?
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                Book your appointment today and get 10% off on your first visit!
              </p>
              <button
                onClick={() =>
                  window.open("https://wa.me/919699614430", "_blank")
                }
                className="mt-2 text-xs font-medium text-blue-600 hover:text-blue-800 flex items-center"
              >
                Book Now
                <ArrowRight size={12} className="ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
