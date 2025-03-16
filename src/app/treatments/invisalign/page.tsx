"use client";
import { motion } from "framer-motion";
import TreatmentStep from "@/app/components/TreatmentStep";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  "Nearly invisible appearance",
  "Removable for eating and cleaning",
  "Comfortable to wear",
  "Fewer dental visits required",
  "No dietary restrictions",
  "Better oral hygiene",
  "Predictable results",
  "Custom-made for your teeth",
];

export default function InvisalignPage() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Teeth Aligners - Invisalign Treatment
        </h1>
        <p className="text-xl text-blue-600 max-w-3xl mx-auto mb-8">
          Transform your smile discreetly with Invisalign® clear aligners. A
          modern approach to teeth straightening without traditional braces.
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
          title="Initial Consultation"
          description="During your first visit, we'll examine your teeth and discuss your smile goals. We'll use advanced 3D scanning technology to create digital impressions of your teeth and show you a preview of your expected results."
          image="/images/treatments/invisalign/consultation.jpg"
          imageAlt="Invisalign consultation and 3D scanning"
        />

        <TreatmentStep
          step={2}
          title="Custom Treatment Plan"
          description="Based on your 3D scans, we'll create a personalized treatment plan. You'll receive a series of custom-made clear aligners designed to gradually move your teeth into their ideal positions."
          image="/images/treatments/invisalign/treatment-plan.jpg"
          imageAlt="Invisalign treatment planning"
          isReversed
        />

        <TreatmentStep
          step={3}
          title="Wearing Your Aligners"
          description="You'll wear each set of aligners for about 1-2 weeks, removing them only to eat, drink, brush, and floss. The aligners should be worn 20-22 hours per day for optimal results."
          image="/images/treatments/invisalign/wearing-aligners.jpg"
          imageAlt="Patient wearing Invisalign aligners"
        />

        <TreatmentStep
          step={4}
          title="Progress Monitoring"
          description="Regular check-ups every 6-8 weeks will ensure your treatment is progressing as planned. We'll provide you with new sets of aligners and make any necessary adjustments."
          image="/images/treatments/invisalign/progress-check.jpg"
          imageAlt="Invisalign progress monitoring"
          isReversed
        />

        <TreatmentStep
          step={5}
          title="Final Results"
          description="Once you've completed your series of aligners, we'll evaluate your results. You'll receive a retainer to maintain your new smile and prevent teeth from shifting back."
          image="/images/treatments/invisalign/final-results.jpg"
          imageAlt="Final results after Invisalign treatment"
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
          Benefits of Invisalign
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

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white"
      >
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Invisalign Journey?
        </h2>
        <p className="text-xl mb-8">
          Book a consultation to learn how Invisalign can transform your smile.
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
