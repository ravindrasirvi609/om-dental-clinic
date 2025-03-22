"use client";
import { motion } from "framer-motion";
import TreatmentStep from "@/app/components/TreatmentStep";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  "Save your natural tooth",
  "Eliminate tooth pain",
  "Prevent infection spread",
  "Restore tooth function",
  "Long-lasting results",
  "Virtually painless procedure",
  "Cost-effective solution",
  "Quick recovery time",
];

export default function RootCanalPage() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Root Canal Treatment
        </h1>
        <p className="text-xl text-blue-600 max-w-3xl mx-auto mb-8">
          Save your natural tooth and eliminate pain with our advanced root
          canal therapy. Modern techniques ensure a comfortable, effective
          treatment.
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
          title="Diagnosis & Examination"
          description="We'll perform a thorough examination including X-rays to assess the extent of damage and confirm if root canal treatment is necessary. We'll explain the procedure and address any concerns."
          image="/images/treatments/root-canal/diagnosis.jpg"
          imageAlt="Dental examination and X-ray for root canal"
        />

        <TreatmentStep
          step={2}
          title="Preparation & Numbing"
          description="The area will be completely numbed using local anesthesia. We use modern techniques to ensure you're comfortable throughout the procedure. A dental dam is placed to keep the area dry and clean."
          image="/images/treatments/root-canal/preparation.jpg"
          imageAlt="Preparation for root canal treatment"
          isReversed
        />

        <TreatmentStep
          step={3}
          title="Cleaning & Shaping"
          description="We'll carefully remove the infected pulp and clean the root canals using specialized instruments. The canals are then shaped to prepare them for filling."
          image="/images/treatments/root-canal/cleaning.jpg"
          imageAlt="Root canal cleaning process"
        />

        <TreatmentStep
          step={4}
          title="Filling & Sealing"
          description="The cleaned canals are filled with a biocompatible material called gutta-percha. The tooth is then sealed with a temporary filling to protect it until the permanent crown is ready."
          image="/images/treatments/root-canal/filling.jpg"
          imageAlt="Root canal filling and sealing"
          isReversed
        />

        <TreatmentStep
          step={5}
          title="Crown Placement"
          description="In a follow-up appointment, we'll place a permanent crown to protect and strengthen your treated tooth, restoring its full function and appearance."
          image="/images/treatments/root-canal/diagnosis.jpg"
          imageAlt="Crown placement after root canal"
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
          Benefits of Root Canal Treatment
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

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg mb-16"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Common Questions About Root Canal
        </h2>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-blue-700">
              Is root canal treatment painful?
            </h3>
            <p className="text-blue-600">
              Modern root canal procedures are virtually painless thanks to
              advanced techniques and effective local anesthesia. Most patients
              report feeling comfortable throughout the treatment.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-blue-700">
              How long does the procedure take?
            </h3>
            <p className="text-blue-600">
              Most root canal treatments can be completed in 1-2 appointments,
              with each session lasting about 60-90 minutes depending on the
              complexity of the case.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-blue-700">
              What is the recovery like?
            </h3>
            <p className="text-blue-600">
              Recovery is typically quick, with most patients returning to
              normal activities the next day. Some mild discomfort may be felt
              for a few days but can be managed with over-the-counter pain
              medication.
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
        <h2 className="text-3xl font-bold mb-4">Experiencing Tooth Pain?</h2>
        <p className="text-xl mb-8">
          Don&apos;t wait until it gets worse. Contact us today for expert root
          canal treatment.
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
