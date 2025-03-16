"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Calendar, Award, Smile } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-10 h-10 text-blue-500" />,
    value: "5000+",
    label: "Happy Patients",
    description: "Trusted by thousands of patients in Hinjawadi and beyond",
  },
  {
    icon: <Calendar className="w-10 h-10 text-blue-500" />,
    value: "10+",
    label: "Years of Experience",
    description: "Providing quality dental care for over a decade",
  },
  {
    icon: <Award className="w-10 h-10 text-blue-500" />,
    value: "15+",
    label: "Dental Procedures",
    description: "Comprehensive range of dental treatments",
  },
  {
    icon: <Smile className="w-10 h-10 text-blue-500" />,
    value: "99%",
    label: "Satisfaction Rate",
    description: "Our patients love their experience with us",
  },
];

const Statistics = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Why Patients Choose Us
          </h2>
          <p className="text-blue-600 max-w-3xl mx-auto">
            Our commitment to excellence in dental care has made us the
            preferred choice for families in Hinjawadi. Here&apos;s why patients
            trust us with their smiles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-blue-800 mb-2">
                {stat.value}
              </h3>
              <h4 className="text-xl font-semibold text-blue-700 mb-3">
                {stat.label}
              </h4>
              <p className="text-blue-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-blue-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Experience the Difference</h3>
          <p className="max-w-3xl mx-auto mb-6">
            Join thousands of satisfied patients who have transformed their
            smiles with us. Our team is dedicated to providing you with the
            highest quality dental care in a comfortable and welcoming
            environment.
          </p>
          <button
            onClick={() => window.open("https://wa.me/919699614430", "_blank")}
            className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-full transition-colors duration-300 shadow-md font-medium"
          >
            Book Your Appointment Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;
