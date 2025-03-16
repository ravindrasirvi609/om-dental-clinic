export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "MedicalOrganization", "LocalBusiness"],
        "@id": "https://omdental.clinic",
        name: "Om Dental Clinic",
        image: {
          "@type": "ImageObject",
          url: "https://omdental.clinic/images/clinic-exterior.jpg",
          width: "1920",
          height: "1080",
        },
        url: "https://omdental.clinic",
        telephone: "+91-96996 14430",
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
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 18.5908,
            longitude: 73.7384,
          },
          geoRadius: "10000",
        },
        medicalSpecialty: [
          "Dentistry",
          "Cosmetic Dentistry",
          "Orthodontics",
          "Pediatric Dentistry",
        ],
        availableService: [
          {
            "@type": "MedicalProcedure",
            name: "Root Canal Treatment",
            description: "Expert root canal treatment with modern equipment",
            procedureType: "http://snomed.info/sct/234262008",
            howPerformed: "Using advanced endodontic techniques and equipment",
            preparation: ["X-ray examination", "Local anesthesia"],
            followup: "Post-treatment checkup after one week",
          },
          {
            "@type": "MedicalProcedure",
            name: "Dental Implants",
            description: "High-quality dental implants for missing teeth",
            procedureType: "http://snomed.info/sct/401271004",
            howPerformed:
              "Using titanium implants and modern surgical techniques",
            preparation: ["3D imaging", "Bone density assessment"],
            followup: "Regular checkups during healing period",
          },
          {
            "@type": "MedicalProcedure",
            name: "Teeth Whitening",
            description: "Professional teeth whitening services",
            procedureType: "http://snomed.info/sct/241615005",
            howPerformed: "Using professional-grade whitening agents",
            preparation: ["Dental cleaning", "Shade assessment"],
            followup: "Maintenance instructions provided",
          },
        ],
        employee: [
          {
            "@type": "Physician",
            name: "Dr. Mahendra Choudhary",
            jobTitle: "Lead Dentist",
            image: "https://omdental.clinic/images/dr-mahendra.jpg",
            medicalSpecialty: ["General Dentistry", "Cosmetic Dentistry"],
            qualification: [
              {
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "degree",
                educationalLevel: "Bachelor of Dental Surgery (BDS)",
                recognizedBy: "Dental Council of India",
              },
            ],
            memberOf: [
              {
                "@type": "Organization",
                name: "Indian Dental Association",
              },
            ],
          },
          // Add more staff members here
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Dental Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "New Patient Special",
                description: "Complete dental checkup with X-rays",
              },
            },
          ],
        },
        review: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "150",
        },
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
