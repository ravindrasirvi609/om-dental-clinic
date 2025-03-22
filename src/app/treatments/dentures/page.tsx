"use client";
import { motion } from "framer-motion";
import TreatmentStep from "@/app/components/TreatmentStep";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  "Restore your smile and confidence",
  "Improve eating and speaking ability",
  "Support facial muscles and structure",
  "Prevent remaining teeth from shifting",
  "Customized for comfort and appearance",
  "Removable for easy cleaning",
  "Cost-effective tooth replacement",
  "Quick treatment process",
];

export default function DenturesPage() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Dentures Treatment
        </h1>
        <p className="text-xl text-blue-600 max-w-3xl mx-auto mb-8">
          Restore your smile and improve your quality of life with custom-made
          dentures. Modern, comfortable solutions for missing teeth.
        </p>
        <button
          onClick={() => window.open("https://wa.me/919699614430", "_blank")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-flex items-center"
        >
          <Clock className="w-5 h-5 mr-2" />
          Schedule Consultation
        </button>
      </motion.div>

      {/* Types of Dentures */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20 mb-16"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Types of Dentures We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Complete Dentures
            </h3>
            <p className="text-blue-600 mb-4">
              Replace all teeth in the upper or lower jaw. These are custom-made
              to fit comfortably and look natural, restoring your full smile.
            </p>
            <ul className="space-y-2 text-blue-500">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Full arch replacement</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Natural-looking appearance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Improved facial structure</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Partial Dentures
            </h3>
            <p className="text-blue-600 mb-4">
              Replace multiple missing teeth while preserving your healthy
              natural teeth. These attach to your existing teeth for stability.
            </p>
            <ul className="space-y-2 text-blue-500">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Preserve natural teeth</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Prevent teeth shifting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Easy to remove and clean</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Immediate Dentures
            </h3>
            <p className="text-blue-600 mb-4">
              Placed immediately after tooth extraction, ensuring you never have
              to go without teeth during the healing process.
            </p>
            <ul className="space-y-2 text-blue-500">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>No waiting period</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Immediate aesthetic solution</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Protects extraction sites</span>
              </li>
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Implant-Supported Dentures
            </h3>
            <p className="text-blue-600 mb-4">
              Secured by dental implants for maximum stability and comfort.
              These prevent bone loss and provide a more natural feel.
            </p>
            <ul className="space-y-2 text-blue-500">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Superior stability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Prevents bone loss</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Improved chewing function</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Treatment Steps */}
      <div className="mb-16">
        <TreatmentStep
          step={1}
          title="Consultation & Planning"
          description="We'll examine your oral health, discuss your needs and preferences, and determine the best type of dentures for you. We'll explain the process and answer any questions you may have."
          image="/images/treatments/dentures/consultation.jpg"
          imageAlt="Dentures consultation and planning"
        />

        <TreatmentStep
          step={2}
          title="Impressions & Measurements"
          description="We'll take precise impressions and measurements of your mouth to create dentures that fit perfectly and look natural. This ensures comfort and functionality."
          image="/images/treatments/dentures/impressions.jpg"
          imageAlt="Taking dental impressions for dentures"
          isReversed
        />

        <TreatmentStep
          step={3}
          title="Custom Fabrication"
          description="Our dental laboratory will craft your custom dentures using high-quality materials. We'll select the appropriate tooth shape, size, and color to match your facial features and create a natural appearance."
          image="/images/treatments/dentures/fabrication.jpg"
          imageAlt="Custom denture fabrication"
        />

        <TreatmentStep
          step={4}
          title="Fitting & Adjustments"
          description="You'll try on your new dentures, and we'll make any necessary adjustments to ensure a comfortable fit. We'll check your bite alignment and make sure the dentures look natural."
          image="/images/treatments/dentures/fitting.jpg"
          imageAlt="Denture fitting and adjustments"
          isReversed
        />

        <TreatmentStep
          step={5}
          title="Follow-up Care"
          description="We'll schedule follow-up appointments to address any concerns and make additional adjustments if needed. We'll also provide detailed instructions on caring for your dentures to ensure their longevity."
          image="/images/treatments/dentures/consultation.jpg"
          imageAlt="Denture follow-up care"
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
          Benefits of Dentures
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

      {/* Denture Care Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg mb-16"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Caring for Your Dentures
        </h2>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-blue-700">Daily Cleaning</h3>
            <p className="text-blue-600">
              Remove and rinse dentures after eating. Brush dentures daily with
              a soft-bristled brush and denture cleaner. Soak dentures overnight
              in a denture-cleaning solution.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-blue-700">
              Handling with Care
            </h3>
            <p className="text-blue-600">
              Handle dentures carefully to avoid dropping them. Stand over a
              folded towel or basin of water when handling dentures. Keep
              dentures moist when not wearing them to prevent warping.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-blue-700">
              Regular Check-ups
            </h3>
            <p className="text-blue-600">
              Visit us regularly for professional denture cleaning and to check
              the fit. Ill-fitting dentures can cause irritation and infections.
              We recommend check-ups every six months.
            </p>
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
          Ready to Restore Your Smile?
        </h2>
        <p className="text-xl mb-8">
          Book a consultation to learn how our custom dentures can help you
          smile, eat, and speak with confidence again.
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
