import { Metadata } from "next";
import { generateMetadata } from "../components/SEO";

export const metadata: Metadata = generateMetadata({
  title: "Dental Services | Expert Dental Care in Hinjawadi",
  description:
    "Comprehensive dental services including general dentistry, cosmetic procedures, orthodontics, and emergency care. Expert dentists using modern technology in Hinjawadi, Pune.",
  keywords: [
    "dental services",
    "cosmetic dentistry",
    "root canal treatment",
    "dental implants",
    "teeth whitening",
    "orthodontics",
    "emergency dental care",
    "pediatric dentistry",
    "dental crown",
    "dental bridge",
  ],
  pageType: "article",
  path: "/services",
});
