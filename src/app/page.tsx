import React from "react";
import Hero from "./components/hero";
import Service from "./components/service";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import WhyChooseUs from "./components/whychooseus";
import CTABanner from "./components/CTABanner";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero />
      {/* Services Section */}
      <Service />
      {/* Why choose us */}
      <WhyChooseUs />
      {/* Testimonials Section */}
      <Testimonial />
      <CTABanner />
      {/* Contact Section */}
      <Contact />
    </div>
  );
}
