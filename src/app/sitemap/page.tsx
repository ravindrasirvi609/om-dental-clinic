"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface SitemapSection {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

const SitemapPage = () => {
  const sitemapData: SitemapSection[] = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Testimonials", href: "/testimonials" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Dental Services",
      links: [
        { name: "General Dentistry", href: "/services#general-dentistry" },
        { name: "Cosmetic Dentistry", href: "/services#cosmetic-dentistry" },
        { name: "Orthodontics", href: "/services#orthodontics" },
        { name: "Oral Surgery", href: "/services#oral-surgery" },
        { name: "Pediatric Dentistry", href: "/services#pediatric-dentistry" },
        { name: "Emergency Dental Care", href: "/services#emergency-care" },
      ],
    },
    {
      title: "Legal Pages",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Sitemap", href: "/sitemap" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Sitemap
          </h1>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto">
            Find all pages on our website organized by category
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sitemapData.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20"
            >
              <h2 className="text-xl font-semibold text-blue-800 mb-4 pb-2 border-b border-blue-100">
                {section.title}
              </h2>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="flex items-center text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-600">
            Can&apos;t find what you&apos;re looking for?{" "}
            <Link
              href="/contact"
              className="text-blue-800 font-semibold hover:underline"
            >
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
