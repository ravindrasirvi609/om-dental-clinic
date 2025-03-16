"use client";
import { motion } from "framer-motion";
import Image from "next/image";

interface TreatmentStepProps {
  step: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  isReversed?: boolean;
}

export default function TreatmentStep({
  step,
  title,
  description,
  image,
  imageAlt,
  isReversed = false,
}: TreatmentStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      } gap-8 items-center mb-16`}
    >
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold">
            {step}
          </span>
          <h3 className="text-2xl font-bold text-blue-800">{title}</h3>
        </div>
        <p className="text-lg text-blue-600 leading-relaxed">{description}</p>
      </div>
      <div className="flex-1">
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </motion.div>
  );
}
