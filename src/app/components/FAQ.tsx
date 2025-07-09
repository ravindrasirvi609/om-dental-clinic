"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqData = [
  {
    id: 1,
    question:
      "What makes Om Dental Clinic the best dental clinic in Hinjewadi?",
    answer:
      "Om Dental Clinic stands out as the leading dental facility in Hinjewadi, Pune due to our experienced team of dentists, state-of-the-art technology, comprehensive range of services, and commitment to patient comfort. We maintain the highest standards of hygiene and sterilization, offer affordable pricing, and provide personalized treatment plans for each patient.",
  },
  {
    id: 2,
    question: "What dental services are available at your Hinjewadi clinic?",
    answer:
      "We offer a complete range of dental services including general dentistry (cleanings, fillings, extractions), cosmetic dentistry (teeth whitening, veneers), orthodontics (braces, Invisalign), oral surgery (wisdom tooth removal, dental implants), root canal treatment, dental crowns and bridges, pediatric dentistry, and emergency dental care.",
  },
  {
    id: 3,
    question: "Do you provide emergency dental services in Hinjewadi, Pune?",
    answer:
      "Yes, Om Dental Clinic provides emergency dental services in Hinjewadi and surrounding areas including Wakad, Baner, and Aundh. We understand dental emergencies can happen anytime, so we offer prompt care for dental pain, broken teeth, dental trauma, and other urgent dental issues. Contact us immediately for emergency appointments.",
  },
  {
    id: 4,
    question: "How much do dental treatments cost at your Hinjewadi clinic?",
    answer:
      "Our dental treatment costs are highly competitive and affordable in Hinjewadi, Pune. Prices vary based on the treatment: basic cleaning starts from ₹1,500, root canal treatment from ₹3,000, dental implants from ₹25,000, and teeth whitening from ₹5,000. We also accept insurance and offer flexible payment options to make dental care accessible to all.",
  },
  {
    id: 5,
    question: "What are your clinic timings and location in Hinjewadi?",
    answer:
      "Om Dental Clinic is located in Hinjewadi Phase 1, near Rajiv Gandhi Infotech Park, Pune. We are open Monday to Saturday from 9:00 AM to 8:00 PM, and Sunday from 10:00 AM to 3:00 PM. We are easily accessible from Wakad, Baner, Aundh, Pimple Saudagar, and other nearby areas.",
  },
  {
    id: 6,
    question: "Do you have experienced dentists for children in Hinjewadi?",
    answer:
      "Yes, we have specialized pediatric dentists who are experienced in treating children at our Hinjewadi clinic. Our child-friendly environment and gentle approach help children feel comfortable during their dental visits. We provide preventive care, dental cleanings, fluoride treatments, and other pediatric dental services for kids of all ages.",
  },
  {
    id: 7,
    question: "How can I book an appointment at Om Dental Clinic in Hinjewadi?",
    answer:
      "You can easily book an appointment at our Hinjewadi dental clinic by calling us at +91-96996 14430, visiting our clinic directly, or using our online appointment booking system on our website. We offer convenient appointment slots and try to accommodate urgent cases as quickly as possible.",
  },
  {
    id: 8,
    question: "What safety measures do you follow at your dental clinic?",
    answer:
      "At Om Dental Clinic in Hinjewadi, we follow strict infection control protocols and maintain the highest standards of hygiene. All instruments are properly sterilized using autoclaves, we use disposable items where possible, maintain clean treatment rooms, and follow all COVID-19 safety guidelines to ensure patient and staff safety.",
  },
];

const FAQ = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  // FAQ Schema markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-16 bg-white" id="faq">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-blue-600 max-w-3xl mx-auto text-lg">
              Find answers to common questions about dental care at Om Dental
              Clinic in Hinjewadi, Pune. Our expert team is here to help you
              with all your dental concerns.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mb-4"
              >
                <div className="border border-blue-200 rounded-lg overflow-hidden shadow-sm">
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left bg-blue-50 hover:bg-blue-100 transition-colors duration-200 flex justify-between items-center"
                  >
                    <h3 className="text-lg font-medium text-blue-800 pr-4">
                      {faq.question}
                    </h3>
                    {activeId === faq.id ? (
                      <ChevronUp
                        className="text-blue-600 flex-shrink-0"
                        size={20}
                      />
                    ) : (
                      <ChevronDown
                        className="text-blue-600 flex-shrink-0"
                        size={20}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {activeId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 bg-white border-t border-blue-200">
                          <p className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-blue-600 mb-6">
              Still have questions? Our friendly team at Om Dental Clinic in
              Hinjewadi is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("/contact", "_self")}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 shadow-md"
              >
                Contact Us Today
              </button>
              <button
                onClick={() => window.open("tel:+919699614430", "_self")}
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors duration-300 shadow-md"
              >
                Call +91-96996 14430
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
