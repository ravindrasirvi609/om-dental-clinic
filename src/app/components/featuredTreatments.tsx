"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const treatments = [
  {
    id: "invisalign",
    title: "Invisalign",
    description: "Clear aligners for a straighter smile without metal braces.",
    image: "/images/treatments/invisalign/invisalign-main.jpg",
    link: "/treatments/invisalign",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "dental-implant",
    title: "Dental Implants",
    description:
      "Permanent tooth replacement that looks and functions naturally.",
    image: "/images/treatments/dental-implant/implant-main.jpg",
    link: "/treatments/dental-implant",
    color: "from-blue-600 to-blue-700",
  },
  {
    id: "root-canal",
    title: "Root Canal",
    description:
      "Save your natural tooth and relieve pain with modern techniques.",
    image: "/images/treatments/root-canal/root-canal-main.jpg",
    link: "/treatments/root-canal",
    color: "from-blue-700 to-blue-800",
  },
  {
    id: "crown-bridges",
    title: "Crown & Bridges",
    description:
      "Restore damaged teeth and replace missing teeth with custom solutions.",
    image: "/images/treatments/crown-and-bridges/crown-bridge-main.jpg",
    link: "/treatments/crown-and-bridges",
    color: "from-blue-500 to-blue-600",
  },
];

const FeaturedTreatments = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Our Specialized Treatments
          </h2>
          <p className="text-blue-600 max-w-3xl mx-auto">
            We offer a wide range of advanced dental treatments to address all
            your oral health needs. Our experienced team uses the latest
            techniques and technology for optimal results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${treatment.color} opacity-60`}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold px-4 text-center">
                    {treatment.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-blue-700 mb-4">{treatment.description}</p>
                <Link
                  href={treatment.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/treatments"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 shadow-md inline-flex items-center"
          >
            View All Treatments <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div> */}

        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Personalized Treatment Plans
              </h3>
              <p className="text-blue-600 mb-6">
                At Om Dental Clinic, we understand that every patient is unique.
                Our dentists create customized treatment plans tailored to your
                specific needs, ensuring the best possible outcomes for your
                oral health.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex-shrink-0 mt-1"></div>
                  <span>Comprehensive initial assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex-shrink-0 mt-1"></div>
                  <span>Detailed treatment options</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex-shrink-0 mt-1"></div>
                  <span>Transparent pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-blue-600 flex-shrink-0 mt-1"></div>
                  <span>Ongoing care and follow-up</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-64 md:h-80 rounded-xl overflow-hidden"
            >
              <Image
                src="/images/consultation.jpg"
                alt="Dental consultation"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreatments;
