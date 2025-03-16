import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/header";
import Footer from "./components/footer";
import Schema from "./components/Schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omdental.clinic"),
  title: {
    default: "Om Dental Clinic | Best Dental Care in Hinjawadi, Pune",
    template: "%s | Om Dental Clinic",
  },
  description:
    "Om Dental Clinic provides top-quality dental services in Hinjawadi, Pune. Expert dentists offering preventive care, cosmetic dentistry, root canal, dental implants & more. Book your appointment today!",
  keywords: [
    "dental clinic",
    "dentist in Pune",
    "Hinjawadi dentist",
    "best dental clinic in Pune",
    "tooth extraction",
    "root canal treatment",
    "dental implants",
    "teeth whitening",
    "dental checkup",
    "cosmetic dentistry",
    "emergency dental care",
    "pediatric dentist",
    "orthodontics",
    "dental crown",
    "dental bridge",
    "dental cleaning",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://omdental.clinic/",
    siteName: "Om Dental Clinic",
    title: "Om Dental Clinic | Top Dental Services in Hinjawadi, Pune",
    description:
      "Professional dental care services in Hinjawadi, Pune. Specializing in preventive care, cosmetic dentistry, root canal treatments, and more. Book your appointment today!",
    images: [
      {
        url: "/images/om-dental-clinic-og.jpg",
        width: 1200,
        height: 630,
        alt: "Om Dental Clinic - Modern Dental Care Facility in Pune",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Dental Clinic | Expert Dental Care in Hinjawadi, Pune",
    description:
      "Professional dental care services in Hinjawadi, Pune. Book your appointment today!",
    creator: "@omdentalclinic",
    images: ["/images/om-dental-clinic-twitter.jpg"],
  },
  alternates: {
    canonical: "https://omdental.clinic",
    languages: {
      "en-US": "https://omdental.clinic/en-us",
      "hi-IN": "https://omdental.clinic/hi",
    },
  },
  authors: [
    { name: "Dr. Mahendra Choudhary", url: "https://omdental.clinic/about" },
  ],
  category: "Healthcare",
  classification: "Dental Care Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <Schema />
      </head>
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 font-sans`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
