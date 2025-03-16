"use client";
import { motion } from "framer-motion";
import TreatmentStep from "@/app/components/TreatmentStep";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";

const crownBenefits = [
  "Restore damaged teeth",
  "Protect weak teeth from fracturing",
  "Cover discolored or misshapen teeth",
  "Support teeth with large fillings",
  "Long-lasting solution (10-15 years)",
  "Natural appearance",
  "Improved chewing function",
  "Quick treatment process",
];

const bridgeBenefits = [
  "Replace missing teeth",
  "Prevent remaining teeth from shifting",
  "Restore your smile and confidence",
  "Maintain face shape and structure",
  "Improve speech and pronunciation",
  "Distribute bite forces properly",
  "Fixed solution (not removable)",
  "Long-lasting results",
];

export default function CrownAndBridgesPage() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Dental Crown & Bridges Treatment
        </h1>
        <p className="text-xl text-blue-600 max-w-3xl mx-auto mb-8">
          Restore your smile with custom-made dental crowns and bridges.
          Durable, natural-looking solutions for damaged or missing teeth.
        </p>
        <button
          onClick={() => window.open("https://wa.me/919699614430", "_blank")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 inline-flex items-center"
        >
          <Clock className="w-5 h-5 mr-2" />
          Schedule Consultation
        </button>
      </motion.div>

      {/* Types Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
              Dental Crowns
            </h2>
            <p className="text-blue-600 mb-6">
              A dental crown is a tooth-shaped cap placed over a damaged tooth
              to restore its shape, size, strength, and appearance. Crowns are
              custom-made to fit your teeth perfectly and are designed to look
              natural.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-700">
                When You Need a Crown:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>To protect a weak tooth from breaking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>To restore an already broken tooth</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>To cover a tooth with a large filling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>To cover a dental implant</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>After root canal treatment</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
              Dental Bridges
            </h2>
            <p className="text-blue-600 mb-6">
              A dental bridge literally bridges the gap created by one or more
              missing teeth. It consists of two or more crowns for the teeth on
              either side of the gap and a false tooth/teeth in between.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-blue-700">
                When You Need a Bridge:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>To replace one or more missing teeth</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>To prevent remaining teeth from drifting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>To restore chewing and speaking ability</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>To maintain face shape and smile</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>As an alternative to dentures</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Treatment Steps */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">
          Crown & Bridge Treatment Process
        </h2>
        <TreatmentStep
          step={1}
          title="Consultation & Examination"
          description="We'll examine your teeth, take X-rays, and discuss your treatment options. We'll determine if a crown or bridge is the best solution for your specific dental needs."
          image="/images/treatments/crown-bridge/consultation.jpg"
          imageAlt="Dental crown and bridge consultation"
        />

        <TreatmentStep
          step={2}
          title="Tooth Preparation"
          description="We'll prepare the affected tooth/teeth by removing a small amount of the outer surface to make room for the crown or bridge. For bridges, the adjacent teeth that will support the bridge are prepared."
          image="/images/treatments/crown-bridge/preparation.jpg"
          imageAlt="Tooth preparation for crown or bridge"
          isReversed
        />

        <TreatmentStep
          step={3}
          title="Impressions & Temporary Restoration"
          description="We'll take precise impressions of your prepared teeth to create your custom crown or bridge. A temporary crown/bridge will be placed to protect your teeth while the permanent restoration is being made."
          image="/images/treatments/crown-bridge/impressions.jpg"
          imageAlt="Taking dental impressions for crown or bridge"
        />

        <TreatmentStep
          step={4}
          title="Fabrication"
          description="Our dental laboratory will craft your custom crown or bridge using high-quality materials. We'll select the appropriate shade to match your natural teeth for a seamless appearance."
          image="/images/treatments/crown-bridge/fabrication.jpg"
          imageAlt="Crown and bridge fabrication"
          isReversed
        />

        <TreatmentStep
          step={5}
          title="Placement & Adjustment"
          description="Once your permanent crown or bridge is ready, we'll remove the temporary restoration and place the new one. We'll check the fit, make any necessary adjustments, and ensure your bite is comfortable."
          image="/images/treatments/crown-bridge/placement.jpg"
          imageAlt="Crown and bridge placement"
        />
      </div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
      >
        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            Benefits of Dental Crowns
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {crownBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-blue-700 text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/20">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            Benefits of Dental Bridges
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bridgeBenefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-blue-700 text-sm">{benefit}</p>
              </div>
            ))}
          </div>
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
          Caring for Your Crown or Bridge
        </h2>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-blue-700">
              Daily Maintenance
            </h3>
            <p className="text-blue-600">
              Brush twice daily and floss around your crown or bridge carefully.
              Pay special attention to the area where the crown meets the gum
              line. For bridges, use a floss threader or interdental brush to
              clean under the bridge.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-blue-700">
              Dietary Considerations
            </h3>
            <p className="text-blue-600">
              Avoid chewing on hard foods like ice or hard candy, which can
              damage your crown or bridge. Minimize sticky foods that might
              dislodge your restoration. If you grind your teeth, consider using
              a nightguard to protect your dental work.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-blue-700">
              Regular Check-ups
            </h3>
            <p className="text-blue-600">
              Visit us for regular check-ups to ensure your crown or bridge is
              in good condition. Professional cleanings help maintain the health
              of the supporting teeth and gums, extending the life of your
              restoration.
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
          Book a consultation to learn how dental crowns and bridges can help
          you achieve a beautiful, functional smile.
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
