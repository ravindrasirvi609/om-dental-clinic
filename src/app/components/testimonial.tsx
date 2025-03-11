"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

interface Testimonial {
  initial: string;
  name: string;
  text: string;
}

const Testimonial: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials: Testimonial[] = [
    {
      initial: "VG",
      name: "Viren Gosar",
      text: "Dr. Mahendra Choudhary is one of the finest dentist I have come across in Pune. I have been her patient for last few years and she is exceptional, empathetic and provides clear consultations to help patients. He is a specialist orthodontist offering a range of services and is meticulous in his work. Strongly recommend his!",
    },
    {
      initial: "MA",
      name: "Mridula Asher",
      text: "Dr Mahendra is the most empathetic doctor I have known. It is my pleasure to have found her. His expertise is beyond imagination. His gentle way and honest advice puts me at ease instantly. I was fearful of dentists from a young age, but Dr Mahendra made me overcome that fear in no time. Thank you!",
    },
    {
      initial: "CG",
      name: "Chitra Gandhi",
      text: "Excellent service. Most kind and gentle dentist ever! Truly understanding of your anxieties, fears or needs. Have found my dentist forever!",
    },
    {
      initial: "LP",
      name: "Leena Patil",
      text: "Dr. Mahendra is a wonderful gentle dentist and takes personal interest in the patient and looks at long term care and solutions vs quick fixes or upselling services. The clinic is very clean and safe. The staff is also very helpful and friendly.",
    },
    {
      initial: "SS",
      name: "Sonal Shah",
      text: "The team made my visit so comfortable! Dr. Mahendra is extremely gentle and patient. The clinic is clean and well maintained. Highly recommend!",
    },
    {
      initial: "ML",
      name: "Mike Lobo",
      text: "Best dental care I've ever had! The entire experience from scheduling to treatment was seamless. Dr. Mahendra explains everything clearly and ensures you're comfortable throughout.",
    },
  ];

  const addToCardsRef = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: () => -(sliderRef.current!.scrollWidth - window.innerWidth + 32),
        ease: "none",
        duration: 20,
        repeat: -1,
        yoyo: true,
        repeatDelay: 1,
      });
    }
    if (cardsRef.current.length > 0 && sectionRef.current) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-blue-50 to-blue-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12">
          What Our Patients Say
        </h2>
        <div
          ref={sliderRef}
          className="flex space-x-6 py-4 px-2"
          style={{ width: "fit-content" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={addToCardsRef}
              className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 shadow-lg flex-shrink-0"
              style={{ width: "320px" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-3 text-blue-800 font-bold">
                  {testimonial.initial}
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">
                    {testimonial.name}
                  </h3>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
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
              <p className="text-blue-800 line-clamp-4">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/testimonials"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300"
          >
            See More Reviews
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
