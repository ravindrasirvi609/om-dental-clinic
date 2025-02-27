import React from "react";

const Service = () => {
  return (
    <div>
      {" "}
      <section className="py-16 bg-gradient-to-b from-transparent to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                General Dentistry
              </h3>
              <p className="text-blue-800">
                Routine check-ups and preventive care to maintain your dental
                health.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Cosmetic Dentistry
              </h3>
              <p className="text-blue-800">
                Enhance your smile with professional whitening and veneers.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Orthodontics
              </h3>
              <p className="text-blue-800">
                Straighten teeth with modern braces or clear aligners for all
                ages.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="backdrop-blur-md bg-white/50 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Oral Surgery
              </h3>
              <p className="text-blue-800">
                Expert care for dental implants and extractions with minimized
                discomfort.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
