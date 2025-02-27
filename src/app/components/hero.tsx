import React from "react";
import { Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <div className="md:w-1/2 mb-8 md:mb-0 z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
              Welcome to Om Dental Clinic
            </h2>
            <p className="text-blue-800 text-lg mb-6">
              Providing comprehensive dental care in a comfortable and friendly
              environment. Our team of experienced dentists is dedicated to
              helping you achieve and maintain a healthy, beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full backdrop-blur-sm bg-opacity-90 shadow-md transition duration-300 flex items-center justify-center">
                <Calendar size={18} className="mr-2" />
                Book an Appointment
              </button>
              <button className="px-6 py-3 bg-white hover:bg-blue-50 text-blue-800 rounded-full backdrop-blur-md bg-opacity-50 border border-white/40 shadow-sm transition duration-300 flex items-center justify-center">
                Learn More About Us
                <ChevronRight size={18} className="ml-1" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="md:w-1/2 z-10">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-200 absolute -top-6 -left-6 z-0"></div>
              <div className="backdrop-blur-sm bg-white/30 border border-white/40 rounded-2xl p-3 shadow-xl relative z-10">
                <Image
                  src="/om-clinic.jpg"
                  alt="Dental clinic with modern equipment"
                  className="rounded-xl w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
