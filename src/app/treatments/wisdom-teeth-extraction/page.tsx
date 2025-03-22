"use client";
import { motion } from "framer-motion";
import TreatmentStep from "@/app/components/TreatmentStep";
import { Clock, CheckCircle2, ArrowRight, AlertTriangle } from "lucide-react";

const benefits = [
  "Prevent pain and discomfort",
  "Avoid damage to adjacent teeth",
  "Prevent infection and gum disease",
  "Eliminate overcrowding issues",
  "Prevent cysts and tumors",
  "Reduce risk of jaw damage",
  "Improve oral hygiene",
  "Prevent future dental problems",
];

const warningSymptoms = [
  "Persistent pain in the back of the mouth",
  "Swollen, tender gums around the wisdom tooth",
  "Bleeding or red gums",
  "Jaw pain or stiffness",
  "Swelling around the jaw",
  "Bad breath or unpleasant taste",
  "Difficulty opening your mouth",
  "Headaches radiating from the back of the mouth",
];

export default function WisdomTeethExtractionPage() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Wisdom Teeth Extraction
        </h1>
        <p className="text-xl text-blue-600 max-w-3xl mx-auto mb-8">
          Safe, comfortable removal of problematic wisdom teeth by our
          experienced dental surgeons. Prevent pain, infection, and damage to
          your other teeth.
        </p>
        <button
          onClick={() => window.open("https://wa.me/919699614430", "_blank")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-flex items-center"
        >
          <Clock className="w-5 h-5 mr-2" />
          Schedule Consultation
        </button>
      </motion.div>

      {/* Warning Signs Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-red-50 rounded-2xl p-8 shadow-lg border border-red-100 mb-16"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <AlertTriangle className="w-8 h-8 text-red-600" />
          <h2 className="text-3xl font-bold text-red-700 text-center">
            Warning Signs You Need Wisdom Teeth Extraction
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {warningSymptoms.map((symptom, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
            >
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-red-700">{symptom}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Treatment Steps */}
      <div className="mb-16">
        <TreatmentStep
          step={1}
          title="Examination & Diagnosis"
          description="We'll perform a thorough examination including X-rays or 3D imaging to assess the position of your wisdom teeth and determine if extraction is necessary. We'll discuss your options and create a treatment plan."
          image="/images/treatments/wisdom-teeth/examination.jpg"
          imageAlt="Wisdom teeth examination and X-rays"
        />

        <TreatmentStep
          step={2}
          title="Pre-Extraction Preparation"
          description="We'll discuss anesthesia options (local anesthesia, sedation, or general anesthesia) based on your comfort level and the complexity of the extraction. We'll provide pre-procedure instructions to follow."
          image="/images/treatments/wisdom-teeth/preparation.jpg"
          imageAlt="Pre-extraction preparation"
          isReversed
        />

        <TreatmentStep
          step={3}
          title="Extraction Procedure"
          description="Our skilled dental surgeon will carefully remove the wisdom teeth. For impacted teeth, a small incision in the gum may be necessary. The procedure typically takes 45-90 minutes depending on complexity."
          image="/images/treatments/wisdom-teeth/extraction.jpg"
          imageAlt="Wisdom teeth extraction procedure"
        />

        <TreatmentStep
          step={4}
          title="Immediate Post-Operative Care"
          description="After the extraction, we'll place gauze over the extraction sites and provide immediate care instructions. You'll rest in our office until the initial effects of anesthesia wear off."
          image="/images/treatments/wisdom-teeth/immediate-care.jpg"
          imageAlt="Immediate post-operative care"
          isReversed
        />

        <TreatmentStep
          step={5}
          title="Recovery & Follow-up"
          description="We'll schedule a follow-up appointment to monitor your healing progress and remove any stitches if necessary. Complete recovery typically takes 1-2 weeks, with most patients returning to normal activities within a few days."
          image="/images/treatments/wisdom-teeth/examination.jpg"
          imageAlt="Recovery and follow-up care"
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
          Benefits of Wisdom Teeth Extraction
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

      {/* Recovery Tips Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg mb-16"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Recovery Tips After Wisdom Teeth Extraction
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-700">First 24 Hours</h3>
            <ul className="space-y-2 text-blue-500">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>
                  Apply ice packs to reduce swelling (20 minutes on, 20 minutes
                  off)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Bite down gently on gauze pads to control bleeding</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Take prescribed pain medication as directed</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Rest and avoid physical activity</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-700">First Week</h3>
            <ul className="space-y-2 text-blue-500">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Eat soft foods like yogurt, pudding, and soup</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Avoid using straws, smoking, or spitting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Gently rinse with salt water after 24 hours</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <span>Keep your head elevated while sleeping</span>
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
          Experiencing Wisdom Teeth Pain?
        </h2>
        <p className="text-xl mb-8">
          Don&apos;t wait until it becomes an emergency. Contact us today for a
          consultation.
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
