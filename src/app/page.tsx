import React from "react";
import Hero from "./components/hero";
import Service from "./components/service";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import WhyChooseUs from "./components/whychooseus";

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

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
