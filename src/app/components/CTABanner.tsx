"use client";
import React, { useRef } from "react";

const CTABanner: React.FC = () => {
  const bannerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={bannerRef} className="w-full py-12 px-6">
      <div className="flex justify-center items-center flex-col md:flex-row md:justify-between relative overflow-hidden max-w-6xl mx-auto bg-white/70 backdrop-blur-md rounded-lg shadow-lg border border-white/20">
        <div className="text-center md:text-left md:mr-6 md:max-w-xl p-6">
          <h3 className="text-blue-800 text-2xl font-semibold mb-2">
            Experience Exceptional Dental Care
          </h3>
          <p className="text-blue-600 text-lg mb-2">
            Book your appointment today and join our community of happy
            patients.
          </p>
          <p className="text-blue-600 text-sm italic mt-4">
            &quot;Best dental experience I’ve ever had!&quot; - Happy Patient
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center p-6">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 flex items-center"
            onClick={() => window.open("https://wa.me/919699614430", "_blank")}
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Schedule Now
          </button>
          <span className="text-blue-800 text-xs mt-3 md:mt-0 md:ml-4">
            Or call us at 96996 14430
          </span>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
