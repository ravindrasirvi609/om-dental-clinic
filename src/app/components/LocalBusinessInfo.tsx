"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Star, Car, Bus, Train } from "lucide-react";

const LocalBusinessInfo = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://omdental.clinic/#LocalBusiness",
    name: "Om Dental Clinic",
    image: [
      "https://omdental.clinic/images/om-dental-clinic-dentist.jpeg",
      "https://omdental.clinic/images/gallery/WhatsApp Image 2025-07-09 at 13.20.02.jpeg",
    ],
    priceRange: "₹₹",
    telephone: "+91-96996 14430",
    email: "info@omdental.clinic",
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
    url: "https://omdental.clinic",
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
    servedCuisine: null,
    hasMenu: null,
    acceptsReservations: true,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "250",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Priya Sharma",
        },
        datePublished: "2024-12-15",
        reviewBody:
          "Excellent dental clinic in Hinjewadi! Dr. Mahendra is very skilled and the staff is friendly. Got my root canal done painlessly.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Rajesh Kumar",
        },
        datePublished: "2024-12-10",
        reviewBody:
          "Best dental clinic in Hinjewadi area. Modern equipment, clean environment and affordable prices. Highly recommended!",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
        },
      },
    ],
  };

  const nearbyAreas = [
    "Wakad",
    "Baner",
    "Aundh",
    "Pimple Saudagar",
    "Pimple Nilakh",
    "Ravet",
    "Tathawade",
    "Sus",
    "Marunji",
    "Balewadi",
  ];

  const transportOptions = [
    {
      icon: Car,
      title: "By Car",
      description:
        "Free parking available. Located near Rajiv Gandhi Infotech Park",
    },
    {
      icon: Bus,
      title: "By Bus",
      description: "PMPML bus routes 106, 115, 133 stop nearby",
    },
    {
      icon: Train,
      title: "By Metro",
      description: "Nearest metro station: Hinjewadi (under construction)",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <section
        className="py-16 bg-gradient-to-b from-blue-50 to-white"
        id="location-info"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
              Best Dental Clinic in Hinjewadi, Pune
            </h2>
            <p className="text-blue-600 max-w-3xl mx-auto text-lg">
              Conveniently located in Hinjewadi Phase 1, Om Dental Clinic serves
              patients from across Pune with world-class dental care. Easily
              accessible from all major areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Location Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">
                  Visit Our Modern Dental Facility
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-800">Address</h4>
                      <p className="text-gray-600">
                        Phase 1, Near Rajiv Gandhi Infotech Park
                        <br />
                        Hinjewadi, Pune, Maharashtra 411057
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+91-96996 14430</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="text-blue-600 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-800">Timings</h4>
                      <p className="text-gray-600">
                        Mon - Sat: 9:00 AM - 8:00 PM
                        <br />
                        Sunday: 10:00 AM - 3:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Star className="text-yellow-500 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-800">Rating</h4>
                      <div className="flex items-center">
                        <span className="text-yellow-500 font-bold text-lg mr-1">
                          4.9
                        </span>
                        <div className="flex text-yellow-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                          ))}
                        </div>
                        <span className="text-gray-600 ml-2">
                          (250+ reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Areas We Serve
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {nearbyAreas.map((area, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* How to Reach */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100 mb-6">
                <h3 className="text-2xl font-bold text-blue-800 mb-6">
                  How to Reach Us
                </h3>

                <div className="space-y-6">
                  {transportOptions.map((option, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <option.icon className="text-blue-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {option.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1234567890123!2d73.7384!3d18.5908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM1JzI3LjAiTiA3M8KwNDQnMTguNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Om Dental Clinic Location in Hinjewadi, Pune"
                  ></iframe>
                </div>
                <div className="p-4">
                  <button
                    onClick={() =>
                      window.open(
                        "https://maps.google.com/?q=Om+Dental+Clinic+Hinjewadi+Pune",
                        "_blank"
                      )
                    }
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocalBusinessInfo;
