import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogImageAlt?: string;
  canonical?: string;
  pageType?: "website" | "article";
  path?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/images/om-dental-clinic-og.jpg",
  ogImageAlt = "Om Dental Clinic",
  canonical,
  pageType = "website",
  path = "",
}: SEOProps): Metadata {
  const defaultKeywords = [
    "dental clinic",
    "dentist in Pune",
    "Hinjawadi dentist",
    "dental care",
  ];

  const baseUrl = "https://omdental.clinic";
  const canonicalUrl = canonical || `${baseUrl}${path}`;

  return {
    title: title,
    description: description,
    keywords: [...defaultKeywords, ...keywords],
    openGraph: {
      title: title,
      description: description,
      type: pageType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
