"use client";
import React, { useEffect, useRef } from "react";
import { Star, Settings, Heart, Building } from "lucide-react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const pointsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
      },
    });
    tl.fromTo(
      textRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8 }
    );
    tl.fromTo(
      imageRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8 },
      "-=0.4"
    );
    tl.fromTo(
      pointsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "back.out(1.7)" },
      "-=0.4"
    );
  }, []);

  const addToPointsRef = (el: HTMLElement | null) => {
    if (el && !pointsRef.current.includes(el)) pointsRef.current.push(el);
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-blue-50 to-blue-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div ref={textRef} className="w-full md:w-1/2">
            <div className="backdrop-blur-md bg-white/70 p-8 rounded-xl shadow-lg border border-white/20">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">
                Why Choose Om Dental Clinic?
              </h2>
              <div className="space-y-6">
                <div ref={addToPointsRef} className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    <Star size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800">
                      Experienced Team
                    </h3>
                    <p className="text-blue-600 mt-1">
                      Our dentists bring years of expertise to provide top-notch
                      care.
                    </p>
                  </div>
                </div>
                <div ref={addToPointsRef} className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    <Settings size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800">
                      Advanced Technology
                    </h3>
                    <p className="text-blue-600 mt-1">
                      Cutting-edge tools for precise and comfortable treatments.
                    </p>
                  </div>
                </div>
                <div ref={addToPointsRef} className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800">
                      Patient Comfort
                    </h3>
                    <p className="text-blue-600 mt-1">
                      A welcoming environment with a gentle approach to care.
                    </p>
                  </div>
                </div>
                <div ref={addToPointsRef} className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    <Building size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-800">
                      State-of-the-Art Facility
                    </h3>
                    <p className="text-blue-600 mt-1">
                      Modern clinic equipped with the latest dental technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div ref={imageRef} className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/whychooseus.jpg"
                alt="Om Dental Clinic Interior"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
