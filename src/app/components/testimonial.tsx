import React from "react";

const Testimonial = () => {
  return (
    <div>
      {" "}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-12">
            What Our Patients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-3 text-blue-800 font-bold">
                  SK
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Sarah K.</h3>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-800">
                &quot;The staff was friendly, and my visit was stress-free! Dr.
                Patel explained everything clearly and made me feel at ease
                throughout my treatment.&quot;
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-3 text-blue-800 font-bold">
                  JD
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">John D.</h3>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-800">
                &quot;I had severe dental anxiety before coming to Om Dental.
                The team was incredibly patient and made me comfortable. Now I
                actually look forward to my check-ups!&quot;
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="backdrop-blur-md bg-white/40 border border-white/30 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center mr-3 text-blue-800 font-bold">
                  AM
                </div>
                <div>
                  <h3 className="font-semibold text-blue-900">Aisha M.</h3>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-800">
                &quot;My children love coming here! The pediatric dentistry team
                is amazing with kids and makes dental care fun and educational.
                Highly recommend for families.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
