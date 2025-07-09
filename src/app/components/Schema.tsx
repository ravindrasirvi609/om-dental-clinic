export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "MedicalOrganization", "LocalBusiness"],
        "@id": "https://omdental.clinic",
        name: "Om Dental Clinic",
        alternateName: [
          "Om Dental Care",
          "Best Dental Clinic Hinjewadi",
          "Top Dentist Pune",
        ],
        description:
          "Premier dental clinic in Hinjewadi, Pune providing comprehensive dental care including root canal, dental implants, teeth whitening, orthodontics and emergency dental services. Experienced dentists with modern technology.",
        image: {
          "@type": "ImageObject",
          url: "https://omdental.clinic/images/om-dental-clinic-dentist.jpeg",
          width: "1920",
          height: "1080",
          caption: "Om Dental Clinic - Best Dental Care in Hinjewadi, Pune",
        },
        logo: {
          "@type": "ImageObject",
          url: "https://omdental.clinic/images/logo.png",
          width: "300",
          height: "300",
        },
        url: "https://omdental.clinic",
        telephone: "+91-96996 14430",
        email: "info@omdental.clinic",
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: [
          "Cash",
          "Credit Card",
          "Debit Card",
          "UPI",
          "Insurance",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Phase 1, Near Rajiv Gandhi Infotech Park",
          addressLocality: "Hinjewadi",
          postalCode: "411057",
          addressRegion: "Pune, Maharashtra",
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
          "https://www.linkedin.com/company/om-dental-clinic",
          "https://www.youtube.com/@omdentalclinic",
        ],
        areaServed: [
          {
            "@type": "City",
            name: "Pune",
            containedInPlace: {
              "@type": "State",
              name: "Maharashtra",
            },
          },
          {
            "@type": "GeoCircle",
            geoMidpoint: {
              "@type": "GeoCoordinates",
              latitude: 18.5908,
              longitude: 73.7384,
            },
            geoRadius: "15000",
          },
        ],
        serviceArea: [
          "Hinjewadi",
          "Wakad",
          "Baner",
          "Aundh",
          "Pimple Saudagar",
          "Pimple Nilakh",
          "Ravet",
          "Tathawade",
          "Sus",
          "Marunji",
        ],
        medicalSpecialty: [
          "Dentistry",
          "Cosmetic Dentistry",
          "Orthodontics",
          "Pediatric Dentistry",
          "Oral Surgery",
          "Endodontics",
          "Periodontics",
          "Prosthodontics",
        ],
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Root Canal Treatment",
            description:
              "Expert root canal treatment with modern equipment in Hinjewadi, Pune",
            procedureType: "http://snomed.info/sct/234262008",
            howPerformed: "Using advanced endodontic techniques and equipment",
            preparation: ["X-ray examination", "Local anesthesia"],
            followup: "Post-treatment checkup after one week",
            offers: {
              "@type": "Offer",
              price: "3000",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          },
          {
            "@type": "MedicalProcedure",
            name: "Dental Implants",
            description:
              "High-quality dental implants for missing teeth in Hinjewadi, Pune",
            procedureType: "http://snomed.info/sct/401271004",
            howPerformed:
              "Using titanium implants and modern surgical techniques",
            preparation: ["3D imaging", "Bone density assessment"],
            followup: "Regular checkups during healing period",
            offers: {
              "@type": "Offer",
              price: "25000",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          },
          {
            "@type": "MedicalProcedure",
            name: "Teeth Whitening",
            description:
              "Professional teeth whitening services in Hinjewadi, Pune",
            procedureType: "http://snomed.info/sct/241615005",
            howPerformed: "Using professional-grade whitening agents",
            preparation: ["Dental cleaning", "Shade assessment"],
            followup: "Maintenance instructions provided",
            offers: {
              "@type": "Offer",
              price: "5000",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          },
          {
            "@type": "MedicalProcedure",
            name: "Dental Cleaning",
            description:
              "Professional dental cleaning and scaling in Hinjewadi, Pune",
            offers: {
              "@type": "Offer",
              price: "1500",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          },
          {
            "@type": "MedicalProcedure",
            name: "Orthodontic Treatment",
            description:
              "Braces and teeth alignment treatment in Hinjewadi, Pune",
            offers: {
              "@type": "Offer",
              price: "45000",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          },
          {
            "@type": "MedicalProcedure",
            name: "Dental Crown",
            description:
              "High-quality dental crowns and caps in Hinjewadi, Pune",
            offers: {
              "@type": "Offer",
              price: "8000",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          },
        ],

        employee: [
          {
            "@type": "Physician",
            name: "Dr. Mahendra Choudhary",
            jobTitle: "Lead Dentist & Clinic Director",
            image: "https://omdental.clinic/images/dr-mahendra.jpg",
            medicalSpecialty: [
              "General Dentistry",
              "Cosmetic Dentistry",
              "Oral Surgery",
            ],
            qualification: [
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "degree",
                educationalLevel: "Bachelor of Dental Surgery (BDS)",
                recognizedBy: "Dental Council of India",
              },
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "certification",
                educationalLevel: "Post Graduate Diploma in Dental Surgery",
                recognizedBy: "Maharashtra University of Health Sciences",
              },
            ],
            memberOf: [
              {
                "@type": "Organization",
                name: "Indian Dental Association",
              },
              {
                "@type": "Organization",
                name: "Maharashtra State Dental Council",
              },
            ],
            worksFor: {
              "@type": "MedicalOrganization",
              name: "Om Dental Clinic",
            },
            description:
              "Experienced dentist with over 10 years of practice in Hinjewadi, Pune. Specializes in advanced dental procedures and cosmetic dentistry.",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dental Services in Hinjewadi, Pune",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "New Patient Special Checkup",
                description:
                  "Complete dental checkup with X-rays and consultation for new patients in Hinjewadi",
              },
              price: "500",
              priceCurrency: "INR",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Emergency Dental Care",
                description:
                  "24/7 emergency dental services in Hinjewadi, Pune",
              },
              availability: "https://schema.org/InStock",
            },
          ],
        },
        review: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "250",
          bestRating: "5",
          worstRating: "1",
        },
        potentialAction: {
          "@type": "ReserveAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: "https://omdental.clinic/contact",
            inLanguage: "en-IN",
            actionPlatform: [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform",
            ],
          },
          result: {
            "@type": "Reservation",
            name: "Dental Appointment Booking",
          },
        },
        keywords: [
          "best dental clinic hinjewadi",
          "top dentist pune",
          "dental clinic near me",
          "teeth cleaning hinjewadi",
          "root canal treatment pune",
          "dental implants hinjewadi",
          "cosmetic dentistry pune",
          "emergency dentist hinjewadi",
          "teeth whitening pune",
          "pediatric dentist hinjewadi",
          "orthodontist pune",
          "dental crown hinjewadi",
          "wisdom tooth extraction pune",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://omdental.clinic/#website",
        url: "https://omdental.clinic/",
        name: "Om Dental Clinic - Best Dental Care in Hinjewadi, Pune",
        description:
          "Leading dental clinic in Hinjewadi, Pune offering comprehensive dental services including root canal, implants, cosmetic dentistry and emergency care.",
        publisher: {
          "@id": "https://omdental.clinic",
        },
        potentialAction: [
          {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate:
                "https://omdental.clinic/search?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
          },
        ],
        inLanguage: "en-IN",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
