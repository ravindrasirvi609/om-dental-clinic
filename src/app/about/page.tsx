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
              Meet Dr. Mahendra Kumar
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
                Founded in 2010 by Dr. Mahendra Kumar, Om Dental Clinic emerged
                with a mission to deliver top-tier dental care in a warm,
                welcoming setting. With over a decade of service, we&apos;ve
                become a trusted name in the community, treating thousands of
                patients with a focus on excellence, innovation, and patient
                comfort. Our state-of-the-art facility combines modern
                technology with compassionate care to ensure every visit is a
                positive experience.
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
                  alt="Dr. Mahendra Kumar"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
                  Dr. Mahendra Kumar
                </h2>
                <p className="text-xl text-blue-800 mb-4">
                  Founder & Chief Dentist
                </p>
                <p className="text-blue-800 text-lg mb-4">
                  With over 15 years of experience, Dr. Mahendra Kumar brings
                  exceptional expertise and compassion to every patient. A
                  graduate of Rajasthan Dental College, he specializes in
                  Cosmetic Dentistry and Implantology and is committed to
                  advancing dental care through continuous education and
                  adopting the latest techniques. Dr. Kumar regularly attends
                  international dental conferences to stay at the forefront of
                  dental innovation.
                </p>
                <p className="text-blue-800 italic text-lg">
                  &quot;A healthy smile changes lives, and at Om Dental Clinic,
                  we&apos;re here to make that happen for you.&quot;
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
          <div className="mt-12 text-center">
            <p className="text-blue-800 text-lg mb-6">
              At Om Dental Clinic, we believe in providing comprehensive dental
              care under one roof. Our team is dedicated to creating
              personalized treatment plans that address your unique needs.
            </p>
            <a
              href="/services"
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 text-lg inline-block"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-4">
            Our Philosophy
          </h2>
          <p className="text-blue-800 text-lg text-center max-w-2xl mx-auto mb-12">
            Guiding principles that shape our commitment to exceptional dental
            care
          </p>
          <div className="backdrop-blur-md bg-white/30 p-8 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-blue-800 text-lg mb-12 text-center max-w-3xl mx-auto">
              At Om Dental Clinic, we believe that optimal dental health is
              essential to overall well-being. Our philosophy centers around
              three core principles:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-blue-50 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  Prevention First
                </h3>
                <p className="text-blue-800">
                  We emphasize preventive care to help you maintain a healthy
                  smile for life.
                </p>
              </div>
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-blue-50 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <Heart className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  Personalized Approach
                </h3>
                <p className="text-blue-800">
                  We recognize that each patient is unique and tailor our
                  treatments accordingly.
                </p>
              </div>
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-blue-50 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <Smile className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  Painless Dentistry
                </h3>
                <p className="text-blue-800">
                  We utilize advanced techniques to ensure comfortable,
                  stress-free treatments.
                </p>
              </div>
            </div>
            <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
              <p className="text-blue-800 text-lg text-center italic">
                &ldquo;Our commitment to these principles has earned us the
                trust and loyalty of our patients, many of whom have been with
                us since we opened our doors.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
