"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "/images/gallery/WhatsApp Image 2025-07-09 at 13.20.02.jpeg",
    alt: "Om Dental Clinic modern interior view in Hinjewadi Pune - Best dental clinic facility",
    title: "Our Modern Dental Facility in Hinjewadi",
    description:
      "Spacious and modern dental clinic interior designed for patient comfort in Hinjewadi, Pune",
  },
  {
    src: "/images/gallery/WhatsApp Image 2025-07-09 at 13.20.04.jpeg",
    alt: "Clean and hygienic dental clinic environment in Hinjewadi Pune - Top dentist facility",
    title: "Clean & Hygienic Environment",
    description:
      "Maintaining highest standards of cleanliness and hygiene at our Hinjewadi dental clinic",
  },
  {
    src: "/images/gallery/WhatsApp Image 2025-07-09 at 13.20.05.jpeg",
    alt: "Quality patient care at Om Dental Clinic Hinjewadi Pune - Experienced dentist treatment",
    title: "Quality Patient Care in Hinjewadi",
    description:
      "Providing personalized and quality dental care to patients in Hinjewadi, Pune",
  },
  {
    src: "/images/gallery/WhatsApp Image 2025-07-09 at 13.20.06.jpeg",
    alt: "Expert dental care services in Hinjewadi Pune - Professional dentist treatment room",
    title: "Expert Dental Care Services",
    description:
      "Professional dental treatment room equipped with modern technology in Hinjewadi",
  },
  {
    src: "/images/gallery/WhatsApp Image 2025-07-09 at 13.20.07.jpeg",
    alt: "State-of-the-art dental technology at Om Dental Clinic Hinjewadi Pune - Advanced equipment",
    title: "State-of-the-Art Dental Technology",
    description:
      "Latest dental technology and equipment for advanced treatments in Hinjewadi, Pune",
  },
  {
    src: "/images/gallery/WhatsApp Image 2025-07-09 at 13.20.08 (1).jpeg",
    alt: "Proper sterilization procedures at dental clinic in Hinjewadi Pune - Safe dental treatment",
    title: "Proper Sterilization Procedures",
    description:
      "Strict sterilization protocols ensuring safe dental treatment in Hinjewadi",
  },
  {
    src: "/images/gallery/WhatsApp Image 2025-07-09 at 13.20.08 (2).jpeg",
    alt: "Modern interior design of dental clinic in Hinjewadi Pune - Comfortable patient environment",
    title: "Modern Interior Design",
    description:
      "Contemporary and comfortable interior design for relaxed dental experience in Hinjewadi",
  },
  {
    src: "/images/gallery/WhatsApp Image 2025-07-09 at 13.20.09 (2).jpeg",
    alt: "Complete dental treatment facility in Hinjewadi Pune - Comprehensive dental services",
    title: "Complete Treatment Facility",
    description:
      "Comprehensive dental treatment facility offering all services under one roof in Hinjewadi",
  },
  {
    src: "/images/gallery/WhatsApp Image 2025-07-09 at 13.20.09 (3).jpeg",
    alt: "Premium dental equipment at Om Dental Clinic Hinjewadi Pune - High-quality dental tools",
    title: "Premium Dental Equipment",
    description:
      "High-quality and premium dental equipment for precise treatments in Hinjewadi, Pune",
  },
  {
    src: "/images/gallery/WhatsApp Image 2025-07-09 at 13.20.09.jpeg",
    alt: "Spacious dental clinic layout in Hinjewadi Pune - Well-designed dental facility",
    title: "Spacious Clinic Layout",
    description:
      "Well-designed and spacious clinic layout for comfortable patient experience in Hinjewadi",
  },
  {
    src: "/images/gallery/WhatsApp Image 2025-07-09 at 13.20.10 (1).jpeg",
    alt: "Comfortable patient waiting area at dental clinic in Hinjewadi Pune - Relaxing environment",
    title: "Comfortable Patient Area",
    description:
      "Comfortable and relaxing patient waiting area at our Hinjewadi dental clinic",
  },
];

const Gallery = () => {
  // Schema markup for ImageGallery
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Om Dental Clinic Gallery - Best Dental Clinic in Hinjewadi, Pune",
    description:
      "Virtual tour of Om Dental Clinic's modern facility in Hinjewadi, Pune. See our state-of-the-art dental equipment, clean environment, and comfortable patient areas.",
    url: "https://omdental.clinic/gallery",
    provider: {
      "@type": "MedicalOrganization",
      name: "Om Dental Clinic",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Hinjewadi Phase 1",
        addressLocality: "Hinjewadi",
        addressRegion: "Pune",
        postalCode: "411057",
        addressCountry: "IN",
      },
    },
    image: galleryImages.map((img, index) => ({
      "@type": "ImageObject",
      url: `https://omdental.clinic${img.src}`,
      name: img.title,
      description: img.description,
      caption: img.alt,
      representativeOfPage: index === 0,
      contentLocation: {
        "@type": "Place",
        name: "Om Dental Clinic, Hinjewadi, Pune",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <section
        className="py-16 bg-gradient-to-b from-white to-blue-50"
        id="gallery"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Best Dental Clinic Gallery in Hinjewadi, Pune
            </h1>
            <p className="text-blue-600 max-w-3xl mx-auto text-lg">
              Take a virtual tour of Om Dental Clinic, the leading dental
              facility in Hinjewadi, Pune. We&apos;ve created a comfortable,
              modern environment with state-of-the-art technology to provide you
              with the best dental care experience in Hinjewadi and surrounding
              areas.
            </p>
            <div className="mt-4 text-sm text-blue-500">
              <p>
                📍 Located in Hinjewadi Phase 1, Pune | ⭐ Top-rated Dental
                Clinic | 🦷 Advanced Dental Care
              </p>
            </div>
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
                <article className="aspect-w-4 aspect-h-3 relative h-64">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/10 transition-all duration-300 z-10"></div>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading={index < 4 ? "eager" : "lazy"}
                    quality={85}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-blue-900/80 to-transparent z-20">
                    <h3 className="text-white font-medium text-sm mb-1">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-xs line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-10"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Visit the Best Dental Clinic in Hinjewadi, Pune
            </h2>
            <p className="text-blue-600 mb-6 max-w-2xl mx-auto">
              Experience world-class dental care at Om Dental Clinic. Book your
              appointment today and see why we&apos;re the most trusted dental
              clinic in Hinjewadi, Pune.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("/gallery", "_self")}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 shadow-md"
              >
                View Complete Gallery
              </button>
              <button
                onClick={() => window.open("/contact", "_self")}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors duration-300 shadow-md"
              >
                Book Appointment Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
