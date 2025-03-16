"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/gallery/clinic-1.jpg",
    alt: "Modern dental clinic reception",
    title: "Our Modern Facility",
  },
  {
    src: "/images/gallery/treatment-1.jpg",
    alt: "Dental checkup procedure",
    title: "Comprehensive Checkups",
  },
  {
    src: "/images/gallery/smile-1.jpg",
    alt: "Patient with beautiful smile after treatment",
    title: "Beautiful Results",
  },
  {
    src: "/images/gallery/equipment-1.jpg",
    alt: "Advanced dental equipment",
    title: "State-of-the-Art Technology",
  },
  {
    src: "/images/gallery/doctor-1.jpg",
    alt: "Dentist consulting with patient",
    title: "Expert Consultation",
  },
  {
    src: "/images/gallery/treatment-2.jpg",
    alt: "Dental procedure in progress",
    title: "Gentle Procedures",
  },
  {
    src: "/images/gallery/smile-2.jpg",
    alt: "Family with healthy smiles",
    title: "Family Dental Care",
  },
  {
    src: "/images/gallery/clinic-2.jpg",
    alt: "Treatment room with modern equipment",
    title: "Comfortable Environment",
  },
];

const Gallery = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Our Clinic Gallery
          </h2>
          <p className="text-blue-600 max-w-3xl mx-auto">
            Take a virtual tour of our modern dental clinic. We&apos;ve created
            a comfortable environment with state-of-the-art technology to
            provide you with the best dental care experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl shadow-md"
            >
              <div className="aspect-w-4 aspect-h-3 relative h-64">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-all duration-300 z-10"></div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-blue-900/80 to-transparent z-20">
                  <h3 className="text-white font-medium text-sm">
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <button
            onClick={() => window.open("/gallery", "_self")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 shadow-md"
          >
            View Full Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
