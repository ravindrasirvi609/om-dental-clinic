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
    default:
      "Om Dental Clinic | Best Dental Care in Hinjewadi, Pune | Top Dentist",
    template: "%s | Om Dental Clinic - Premier Dental Care in Hinjewadi, Pune",
  },
  description:
    "Om Dental Clinic is the leading dental care provider in Hinjewadi, Pune. Expert dentists offering advanced dental services including root canal treatment, dental implants, teeth whitening, orthodontics, and emergency dental care. Book your appointment today for world-class dental treatment in a modern, comfortable environment.",
  keywords: [
    "best dental clinic hinjewadi",
    "top dentist pune",
    "dental clinic near me hinjewadi",
    "dentist in hinjewadi phase 1",
    "root canal treatment pune",
    "dental implants hinjewadi",
    "teeth whitening pune",
    "cosmetic dentistry hinjewadi",
    "emergency dentist pune",
    "pediatric dentist hinjewadi",
    "orthodontist pune",
    "dental crown hinjewadi",
    "wisdom tooth extraction pune",
    "dental clinic wakad",
    "best dentist baner",
    "dental care aundh",
    "teeth cleaning hinjewadi",
    "dental checkup pune",
    "oral surgery hinjewadi",
    "dental bridge pune",
    "invisalign hinjewadi",
    "dental clinic pimple saudagar",
    "affordable dental care pune",
    "modern dental clinic hinjewadi",
    "family dentist pune",
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
    siteName: "Om Dental Clinic - Premier Dental Care in Hinjewadi, Pune",
    title:
      "Om Dental Clinic | Leading Dental Services in Hinjewadi, Pune | Expert Dentists",
    description:
      "Experience world-class dental care at Om Dental Clinic in Hinjewadi, Pune. Our expert dentists provide comprehensive dental services including root canal, implants, cosmetic dentistry, orthodontics and emergency care using advanced technology in a comfortable environment.",
    images: [
      {
        url: "/images/om-dental-clinic-dentist.jpeg",
        width: 1200,
        height: 630,
        alt: "Om Dental Clinic - Premier Dental Care Facility in Hinjewadi, Pune",
        type: "image/jpeg",
      },
      {
        url: "/images/gallery/WhatsApp Image 2025-07-09 at 13.20.02.jpeg",
        width: 1200,
        height: 630,
        alt: "Om Dental Clinic Interior - Modern Dental Facility in Hinjewadi",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Om Dental Clinic | Expert Dental Care in Hinjewadi, Pune | Leading Dentists",
    description:
      "Premier dental clinic in Hinjewadi, Pune offering comprehensive dental services. Expert dentists, modern technology, comfortable environment. Book your appointment today!",
    creator: "@omdentalclinic",
    images: ["/images/om-dental-clinic-dentist.jpeg"],
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
    { name: "Om Dental Clinic Team", url: "https://omdental.clinic" },
  ],
  category: "Healthcare",
  classification: "Dental Care Services",
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    "facebook-domain-verification": "your-facebook-verification-code",
    "geo.region": "IN-MH",
    "geo.placename": "Hinjewadi, Pune, Maharashtra",
    "geo.position": "18.5908;73.7384",
    ICBM: "18.5908, 73.7384",
    rating: "4.9",
    coverage: "Worldwide",
    distribution: "Global",
    target: "all",
    HandheldFriendly: "True",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
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
        <meta name="theme-color" content="#1e40af" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Om Dental Clinic" />
        <meta name="application-name" content="Om Dental Clinic" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Local Business Schema */}
        <meta
          property="business:contact_data:street_address"
          content="Phase 1, Hinjewadi"
        />
        <meta property="business:contact_data:locality" content="Pune" />
        <meta property="business:contact_data:region" content="Maharashtra" />
        <meta property="business:contact_data:postal_code" content="411057" />
        <meta property="business:contact_data:country_name" content="India" />
        <meta
          property="business:contact_data:phone_number"
          content="+91-96996 14430"
        />
        <meta property="business:hours:day" content="monday" />
        <meta property="business:hours:start" content="09:00" />
        <meta property="business:hours:end" content="20:00" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://omdental.clinic" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

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
