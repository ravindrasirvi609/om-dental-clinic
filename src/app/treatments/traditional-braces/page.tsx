"use client";
import { motion } from "framer-motion";
import TreatmentStep from "@/app/components/TreatmentStep";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  "Highly effective for complex cases",
  "Suitable for all age groups",
  "Cannot be lost or misplaced",
  "More affordable than clear aligners",
  "Faster treatment for severe cases",
  "Colorful bands options for kids",
  "Proven track record",
  "Continuous tooth movement",
];

export default function TraditionalBracesPage() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Traditional Braces Treatment
        </h1>
        <p className="text-xl text-blue-600 max-w-3xl mx-auto mb-8">
          Achieve a perfectly aligned smile with traditional braces.
          Time-tested, effective orthodontic treatment for all types of dental
          misalignment.
        </p>
        <button
          onClick={() => window.open("https://wa.me/919699614430", "_blank")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-flex items-center"
        >
          <Clock className="w-5 h-5 mr-2" />
          Schedule Consultation
        </button>
      </motion.div>

      {/* Treatment Steps */}
      <div className="mb-16">
        <TreatmentStep
          step={1}
          title="Initial Consultation & Assessment"
          description="We'll examine your teeth, take X-rays, and discuss your orthodontic needs. This helps us understand the complexity of your case and determine if traditional braces are the best option for you."
          image="/images/treatments/traditional-braces/consultation.jpg"
          imageAlt="Dental consultation for traditional braces"
        />

        <TreatmentStep
          step={2}
          title="Treatment Planning"
          description="Based on your examination, we'll create a detailed treatment plan. We'll explain the expected duration, process, and show you examples of similar cases we've treated successfully."
          image="/images/treatments/traditional-braces/planning.jpg"
          imageAlt="Treatment planning for braces"
          isReversed
        />

        <TreatmentStep
          step={3}
          title="Braces Installation"
          description="We'll clean and prepare your teeth, then carefully place the brackets and wires. The process is painless and typically takes 1-2 hours. We'll also provide detailed care instructions."
          image="/images/treatments/traditional-braces/installation.jpg"
          imageAlt="Braces installation process"
        />

        <TreatmentStep
          step={4}
          title="Regular Adjustments"
          description="You'll visit us every 4-6 weeks for adjustments. During these visits, we'll change the wires or elastic bands, check your progress, and make necessary modifications to your treatment."
          image="/images/treatments/traditional-braces/adjustment.jpg"
          imageAlt="Regular braces adjustment"
          isReversed
        />

        <TreatmentStep
          step={5}
          title="Braces Removal & Retention"
          description="Once your teeth are properly aligned, we'll remove your braces and provide you with retainers. Wearing retainers as directed is crucial for maintaining your new smile."
          image="/images/treatments/traditional-braces/consultation.jpg"
          imageAlt="Braces removal and final results"
        />
      </div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20 mb-16"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Benefits of Traditional Braces
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg"
            >
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
              <p className="text-blue-700">{benefit}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Care Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg mb-16"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Caring for Your Braces
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-700">Do&apos;s:</h3>
            <ul className="space-y-2 text-blue-500">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Brush after every meal</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Use a water flosser or orthodontic flosser</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Attend all adjustment appointments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <span>Cut food into smaller pieces</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-700">Don&apos;ts:</h3>
            <ul className="space-y-2 text-blue-500">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Eat sticky or hard foods</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Chew on ice or hard objects</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Skip brushing or flossing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Miss adjustment appointments</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Smile?
        </h2>
        <p className="text-xl mb-8">
          Book a consultation to learn how traditional braces can help you
          achieve the perfect smile.
        </p>
        <button
          onClick={() => window.open("https://wa.me/919699614430", "_blank")}
          className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-flex items-center"
        >
          Book Now
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </motion.div>
    </div>
  );
}
