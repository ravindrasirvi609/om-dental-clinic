import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Om Dental Clinic | Best Dental Care in Hinjawadi, Pune",
  description:
    "Om Dental Clinic provides top-quality dental services in Hinjawadi, Pune. Our experienced dentists offer preventive care, cosmetic dentistry, and more. Schedule an appointment today!",
  keywords:
    "dental clinic, dentist, Hinjawadi, Pune, tooth extraction, root canal, dental implants, teeth whitening, dental checkup",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://omdentalclinic.com/",
    siteName: "Om Dental Clinic",
    title: "Om Dental Clinic | Top Dental Services in Hinjawadi, Pune",
    description:
      "Professional dental care services in Hinjawadi, Pune. Specializing in preventive care, cosmetic dentistry, root canal treatments, and more.",
    images: [
      {
        url: "/images/om-dental-clinic-og.jpg",
        width: 1200,
        height: 630,
        alt: "Om Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Dental Clinic | Hinjawadi, Pune",
    description: "Professional dental care services in Hinjawadi, Pune",
    creator: "@omdentalclinic",
    images: ["/images/om-dental-clinic-twitter.jpg"],
  },
  alternates: {
    canonical: "https://omdentalclinic.com",
  },
  authors: [{ name: "Om Dental Clinic" }],
  metadataBase: new URL("https://omdentalclinic.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Structured data for local business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Om Dental Clinic",
              image: "https://omdentalclinic.com/images/clinic-photo.jpg",
              "@id": "https://omdentalclinic.com",
              url: "https://omdentalclinic.com",
              telephone: "+91-9876543210",
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Phase 1",
                addressLocality: "Hinjawadi",
                postalCode: "411057",
                addressRegion: "Pune",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 18.5908,
                longitude: 73.7384,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "15:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/omdentalclinic",
                "https://www.instagram.com/omdentalclinic",
                "https://twitter.com/omdentalclinic",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 font-sans`}
      >
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
