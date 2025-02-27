"use client";
import React, { useEffect, useRef } from "react";
import { Star, Settings, Heart } from "lucide-react";
import Image from "next/image";

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const pointsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Import GSAP dynamically to avoid SSR issues
    import("gsap").then(({ gsap }) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Text animation
      tl.fromTo(
        textRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 }
      );

      // Image animation
      tl.fromTo(
        imageRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.4" // Start slightly before the text animation finishes
      );

      // Points stagger animation
      tl.fromTo(
        pointsRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "back.out(1.7)", // Bounce effect
        },
        "-=0.4"
      );
    });
  }, []);

  // Add points to the ref array
  const addToPointsRef = (el: HTMLElement | null) => {
    if (el && !pointsRef.current.includes(el)) {
      pointsRef.current = [...pointsRef.current, el];
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Column - Text Content in Glassmorphic Box */}
          <div ref={textRef} className="w-full md:w-1/2">
            <div className="backdrop-blur-md bg-white/70 p-8 rounded-xl shadow-lg border border-white/20">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">
                Why Choose Om Dental Clinic?
              </h2>

              <div className="space-y-6">
                {/* Point 1 */}
                <div ref={addToPointsRef} className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    <Star size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Experienced Team
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Our dentists bring years of expertise and continuous
                      education to provide the best care possible.
                    </p>
                  </div>
                </div>

                {/* Point 2 */}
                <div ref={addToPointsRef} className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    <Settings size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Advanced Technology
                    </h3>
                    <p className="text-gray-600 mt-1">
                      We invest in cutting-edge dental technology for precise
                      diagnostics and comfortable treatments.
                    </p>
                  </div>
                </div>

                {/* Point 3 */}
                <div ref={addToPointsRef} className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Patient Comfort
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Your comfort is our priority, from our welcoming
                      environment to our gentle approach to dental care.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div ref={imageRef} className="w-full md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/whychooseus.jpg"
                alt="Om Dental Clinic Interior"
                className="w-full h-full object-cover"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
