import React from "react";
import Hero from "./components/hero";
import Service from "./components/service";
import Testimonial from "./components/testimonial";
import WhyChooseUs from "./components/whychooseus";
import CTABanner from "./components/CTABanner";
import Gallery from "./components/gallery";
import FeaturedTreatments from "./components/featuredTreatments";
import Statistics from "./components/statistics";
import { Metadata } from "next";
import { generateMetadata } from "./components/SEO";

export const metadata: Metadata = generateMetadata({
  title: "Om Dental Clinic | Best Dental Care in Hinjawadi, Pune",
  description:
    "Om Dental Clinic provides expert dental care in Hinjawadi, Pune. Our experienced dentists offer comprehensive dental services using modern technology in a comfortable environment.",
  keywords: [
    "best dental clinic in Hinjawadi",
    "top dentist in Pune",
    "affordable dental care",
    "family dentistry",
    "modern dental clinic",
    "dental consultation",
  ],
});

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Service />

      {/* Featured Treatments Section */}
      <FeaturedTreatments />

      {/* Gallery Section */}
      <Gallery />

      {/* Statistics Section */}
      <Statistics />

      {/* Why choose us */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <Testimonial />

      {/* Call to Action Banner */}
      <CTABanner />
    </div>
  );
}
