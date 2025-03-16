"use client";
import { motion } from "framer-motion";
import TreatmentStep from "@/app/components/TreatmentStep";
import { Clock, CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  "Permanent tooth replacement",
  "Preserves jawbone health",
  "Looks and functions like natural teeth",
  "No impact on adjacent teeth",
  "Prevents facial structure changes",
  "High success rate (95-98%)",
  "Improves speech and comfort",
  "Easy maintenance",
];

export default function DentalImplantPage() {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
          Dental Implant Treatment
        </h1>
        <p className="text-xl text-blue-600 max-w-3xl mx-auto mb-8">
          Restore your smile with permanent, natural-looking dental implants.
          The gold standard in tooth replacement for a confident, functional
          smile.
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
          description="We'll conduct a comprehensive examination including 3D imaging to assess your bone structure, gum health, and determine if you're a suitable candidate for dental implants. We'll discuss your options and create a personalized treatment plan."
          image="/images/treatments/dental-implant/consultation.jpg"
          imageAlt="Dental implant consultation and 3D imaging"
        />

        <TreatmentStep
          step={2}
          title="Pre-Implant Preparation"
          description="If needed, we'll perform preparatory procedures such as bone grafting to ensure sufficient bone density, or tooth extraction if replacing a damaged tooth. Some patients may require gum disease treatment before proceeding."
          image="/images/treatments/dental-implant/preparation.jpg"
          imageAlt="Pre-implant preparation procedures"
          isReversed
        />

        <TreatmentStep
          step={3}
          title="Implant Placement Surgery"
          description="Using advanced techniques, we'll surgically place the titanium implant into your jawbone. The procedure is performed under local anesthesia and is relatively comfortable. The implant will serve as an artificial tooth root."
          image="/images/treatments/dental-implant/surgery.jpg"
          imageAlt="Dental implant placement surgery"
        />

        <TreatmentStep
          step={4}
          title="Healing & Osseointegration"
          description="Over the next 3-6 months, the implant will fuse with your jawbone in a process called osseointegration. During this period, we may provide a temporary crown so you won't have a gap in your smile."
          image="/images/treatments/dental-implant/healing.jpg"
          imageAlt="Healing and osseointegration phase"
          isReversed
        />

        <TreatmentStep
          step={5}
          title="Abutment & Crown Placement"
          description="Once healing is complete, we'll attach an abutment to the implant and take impressions for your custom crown. The final crown is designed to match your natural teeth in color, shape, and size, completing your smile restoration."
          image="/images/treatments/dental-implant/crown-placement.jpg"
          imageAlt="Abutment and crown placement"
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
          Benefits of Dental Implants
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

      {/* Implant Care Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg mb-16"
      >
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Caring for Your Dental Implants
        </h2>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-blue-700">
              Daily Maintenance
            </h3>
            <p className="text-blue-600">
              Brush twice daily with a soft-bristled toothbrush, floss daily
              around the implant, and use an antimicrobial mouthwash. Treat your
              implant like a natural tooth with consistent oral hygiene.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-blue-700">
              Regular Check-ups
            </h3>
            <p className="text-blue-600">
              Visit us every 6 months for professional cleanings and to check
              the condition of your implant. Early detection of any issues
              ensures the longevity of your dental implant.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-blue-700">
              Lifestyle Considerations
            </h3>
            <p className="text-blue-600">
              Avoid smoking as it can impair healing and reduce implant success
              rates. Limit consumption of hard, sticky foods that could damage
              the crown, and avoid using your teeth as tools to open packages.
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
          Book a consultation to learn how dental implants can transform your
          smile and improve your quality of life.
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
