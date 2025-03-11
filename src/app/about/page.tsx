"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Heart,
  Star,
  Shield,
  Lightbulb,
  Smile,
  Sparkles,
  Scissors,
} from "lucide-react";
import Image from "next/image";

const AboutUs = () => {
  const heroTextRef = useRef(null);
  const heroButtonRef = useRef(null);

  // Animation for hero section
  useEffect(() => {
    gsap.fromTo(
      heroTextRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      heroButtonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );
  }, []);

  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/clinic-exterior.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-blue-600/20 backdrop-blur-md"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center">
            <h1
              ref={heroTextRef}
              className="text-5xl md:text-6xl font-bold text-blue-900 mb-4"
            >
              About Om Dental Clinic
            </h1>
            <p
              ref={heroTextRef}
              className="text-xl md:text-2xl text-blue-800 mb-8"
            >
              Exceptional Dental Care for Over 10 Years
            </p>
            <button
              ref={heroButtonRef}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 text-lg"
            >
              Meet Dr. Choudhary
            </button>
          </div>
        </div>
      </section>

      {/* About the Clinic Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="backdrop-blur-md bg-white/30 p-8 rounded-2xl border border-white/20 shadow-lg">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Our Story
              </h2>
              <p className="text-blue-800 text-lg">
                Founded in 2010 by Dr. Mahendra Choudhary, Om Dental Clinic
                emerged with a mission to deliver top-tier dental care in a
                warm, welcoming setting. With over a decade of service, we’ve
                become a trusted name, treating thousands with a focus on
                excellence and patient happiness.
              </p>
            </div>
            <div>
              <Image
                src="/om-clinic.jpg"
                alt="Om Dental Clinic Interior"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl border border-white/20 shadow-lg text-center">
              <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Patient-Centric Care
              </h3>
              <p className="text-blue-800">
                Your comfort and well-being are our top priorities.
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl border border-white/20 shadow-lg text-center">
              <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Excellence in Dentistry
              </h3>
              <p className="text-blue-800">
                We uphold the highest standards in every treatment.
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl border border-white/20 shadow-lg text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Integrity
              </h3>
              <p className="text-blue-800">
                Honesty and transparency guide our practice.
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl border border-white/20 shadow-lg text-center">
              <Lightbulb className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Innovation
              </h3>
              <p className="text-blue-800">
                We adopt cutting-edge technology for your care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctor Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="backdrop-blur-md bg-white/30 p-8 rounded-2xl border border-white/20 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/dr-choudhary.jpg"
                  alt="Dr. Mahendra Choudhary"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                  Dr. Mahendra Choudhary
                </h2>
                <p className="text-xl text-blue-800 mb-4">
                  Founder & Chief Dentist
                </p>
                <p className="text-blue-800 text-lg mb-4">
                  With over 10 years of experience, Dr. Mahendra Choudhary
                  brings expertise and compassion to every patient. A graduate
                  of [University Name], he specializes in [specializations] and
                  is committed to advancing dental care through the latest
                  techniques.
                </p>
                <p className="text-blue-800 italic text-lg">
                  &quot;A healthy smile changes lives, and at Om Dental Clinic,
                  we’re here to make that happen for you.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl border border-white/20 shadow-lg text-center">
              <Image
                src="/team-member1.jpg"
                alt="Dr. Priya Sharma"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Dr. Priya Sharma
              </h3>
              <p className="text-blue-800">Orthodontist</p>
            </div>
            <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl border border-white/20 shadow-lg text-center">
              <Image
                src="/team-member2.jpg"
                alt="Dr. Rajesh Patel"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Dr. Rajesh Patel
              </h3>
              <p className="text-blue-800">Cosmetic Dentist</p>
            </div>
            <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl border border-white/20 shadow-lg text-center">
              <Image
                src="/team-member3.jpg"
                alt="Anjali Desai"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Anjali Desai
              </h3>
              <p className="text-blue-800">Dental Hygienist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl border border-white/20 shadow-lg text-center">
              <Smile className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                General Dentistry
              </h3>
              <p className="text-blue-800">
                Check-ups, cleanings, and preventive care.
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl border border-white/20 shadow-lg text-center">
              <Sparkles className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Cosmetic Dentistry
              </h3>
              <p className="text-blue-800">
                Whitening, veneers, and smile enhancements.
              </p>
            </div>
            <div className="backdrop-blur-md bg-white/30 p-6 rounded-2xl border border-white/20 shadow-lg text-center">
              <Scissors className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Oral Surgery
              </h3>
              <p className="text-blue-800">
                Implants, extractions, and advanced procedures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
