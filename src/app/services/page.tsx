"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Smile,
  Crown,
  Syringe,
  Stethoscope,
  Baby,
  Bone,
  Sparkles,
  Shield,
  Clock,
} from "lucide-react";

const services = [
  {
    icon: <Smile className="w-8 h-8 text-blue-600" />,
    title: "General Dentistry",
    description:
      "Comprehensive dental care including cleanings, fillings, and preventive treatments.",
    treatments: [
      "Dental Check-ups",
      "Teeth Cleaning",
      "Cavity Fillings",
      "Root Canal Treatment",
    ],
  },
  {
    icon: <Crown className="w-8 h-8 text-blue-600" />,
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with our advanced cosmetic dental procedures.",
    treatments: [
      "Teeth Whitening",
      "Dental Veneers",
      "Dental Bonding",
      "Smile Makeover",
    ],
  },
  {
    icon: <Bone className="w-8 h-8 text-blue-600" />,
    title: "Oral Surgery",
    description: "Expert surgical procedures for complex dental issues.",
    treatments: [
      "Tooth Extraction",
      "Wisdom Teeth Removal",
      "Dental Implants",
      "Bone Grafting",
    ],
  },
  {
    icon: <Baby className="w-8 h-8 text-blue-600" />,
    title: "Pediatric Dentistry",
    description:
      "Specialized dental care for children in a friendly environment.",
    treatments: [
      "Child Dental Check-ups",
      "Fluoride Treatment",
      "Dental Sealants",
      "Child-friendly Procedures",
    ],
  },
  {
    icon: <Smile className="w-8 h-8 text-blue-600" />,
    title: "Orthodontics",
    description: "Straighten your teeth and achieve the perfect smile.",
    treatments: [
      "Traditional Braces",
      "Clear Aligners",
      "Retainers",
      "Orthodontic Consultation",
    ],
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-blue-600" />,
    title: "Emergency Dental Care",
    description: "Immediate care for dental emergencies and pain relief.",
    treatments: [
      "Emergency Tooth Repair",
      "Pain Management",
      "Urgent Care Services",
      "24/7 Support",
    ],
  },
];

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  treatments: string[];
}

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        {service.icon}
        <h3 className="text-xl font-semibold text-blue-800 ml-3">
          {service.title}
        </h3>
      </div>
      <p className="text-blue-600 mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.treatments.map((treatment: string, index: number) => (
          <li key={index} className="flex items-center text-blue-700">
            <Shield className="w-4 h-4 mr-2 text-blue-500" />
            {treatment}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Our Dental Services
          </h1>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto">
            Comprehensive dental care solutions with state-of-the-art technology
            and experienced professionals.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center bg-white/70 backdrop-blur-md p-4 rounded-lg shadow-md border border-white/20"
          >
            <Clock className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h3 className="font-semibold text-blue-800">Extended Hours</h3>
              <p className="text-blue-600">
                Flexible scheduling for your convenience
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center bg-white/70 backdrop-blur-md p-4 rounded-lg shadow-md border border-white/20"
          >
            <Sparkles className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h3 className="font-semibold text-blue-800">Modern Equipment</h3>
              <p className="text-blue-600">
                State-of-the-art dental technology
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center bg-white/70 backdrop-blur-md p-4 rounded-lg shadow-md border border-white/20"
          >
            <Syringe className="w-8 h-8 text-blue-600 mr-3" />
            <div>
              <h3 className="font-semibold text-blue-800">
                Painless Treatment
              </h3>
              <p className="text-blue-600">Comfortable and gentle procedures</p>
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
            Ready to Schedule Your Appointment?
          </h2>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 flex items-center mx-auto"
            onClick={() => window.open("https://wa.me/919699614430", "_blank")}
          >
            <Clock className="w-5 h-5 mr-2" />
            Book Appointment
          </button>
          <p className="mt-4 text-blue-600">
            Or call us at: <span className="font-semibold">96996 14430</span>
          </p>
        </div>
      </div>
    </div>
  );
}
