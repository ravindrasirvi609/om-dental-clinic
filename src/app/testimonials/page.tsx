"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ThumbsUp, MessageCircle } from "lucide-react";
import Image from "next/image";

interface Rating {
  overall: number;
  service: number;
  cleanliness: number;
  communication: number;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  initial: string;
  rating: Rating;
  review: string;
  date: string;
  treatment?: string;
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Viren Gosar",
    initial: "VG",
    location: "Baner, Pune",
    rating: {
      overall: 5,
      service: 5,
      cleanliness: 5,
      communication: 5,
    },
    review:
      "Dr. Mahendra Choudhary is one of the finest dentist I have come across in Pune. I have been her patient for last few years and she is exceptional, empathetic and provides clear consultations to help patients. He is a specialist orthodontist offering a range of services and is meticulous in his work. Strongly recommend his!",
    date: "March 1, 2024",
    treatment: "Orthodontic Treatment",
    verified: true,
  },
  {
    id: 2,
    name: "Mridula Asher",
    initial: "MA",
    location: "Wakad, Pune",
    rating: {
      overall: 5,
      service: 5,
      cleanliness: 5,
      communication: 5,
    },
    review:
      "Dr Mahendra is the most empathetic doctor I have known. It is my pleasure to have found her. His expertise is beyond imagination. His gentle way and honest advice puts me at ease instantly. I was fearful of dentists from a young age, but Dr Mahendra made me overcome that fear in no time. Thank you!",
    date: "February 15, 2024",
    treatment: "Dental Consultation",
    verified: true,
  },
  {
    id: 3,
    name: "Chitra Gandhi",
    initial: "CG",
    location: "Hinjawadi, Pune",
    rating: {
      overall: 5,
      service: 5,
      cleanliness: 5,
      communication: 5,
    },
    review:
      "Excellent service. Most kind and gentle dentist ever! Truly understanding of your anxieties, fears or needs. Have found my dentist forever!",
    date: "February 28, 2024",
    verified: true,
  },
  {
    id: 4,
    name: "Leena Patil",
    initial: "LP",
    location: "Balewadi, Pune",
    rating: {
      overall: 5,
      service: 5,
      cleanliness: 5,
      communication: 5,
    },
    review:
      "Dr. Mahendra is a wonderful gentle dentist and takes personal interest in the patient and looks at long term care and solutions vs quick fixes or upselling services. The clinic is very clean and safe. The staff is also very helpful and friendly.",
    date: "March 5, 2024",
    treatment: "Dental Care",
    verified: true,
  },
  {
    id: 5,
    name: "Sonal Shah",
    initial: "SS",
    location: "Chinchwad, Pune",
    rating: {
      overall: 5,
      service: 5,
      cleanliness: 5,
      communication: 5,
    },
    review:
      "The team made my visit so comfortable! Dr. Mahendra is extremely gentle and patient. The clinic is clean and well maintained. Highly recommend!",
    date: "March 10, 2024",
    treatment: "General Dentistry",
    verified: true,
  },
  {
    id: 6,
    name: "Mike Lobo",
    initial: "ML",
    location: "Baner, Pune",
    rating: {
      overall: 5,
      service: 5,
      cleanliness: 5,
      communication: 5,
    },
    review:
      "Best dental care I've ever had! The entire experience from scheduling to treatment was seamless. Dr. Mahendra explains everything clearly and ensures you're comfortable throughout.",
    date: "March 15, 2024",
    treatment: "Dental Care",
    verified: true,
  },
];

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
          {testimonial.initial}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h3 className="text-lg font-semibold text-blue-800">
                {testimonial.name}
                {testimonial.verified && (
                  <span className="ml-2 text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    Verified Patient
                  </span>
                )}
              </h3>
              <Image
                src="/images/google-g-logo.png"
                alt="Google Review"
                width={18}
                height={18}
                className="ml-2"
              />
            </div>
            <span className="text-sm text-blue-600">{testimonial.date}</span>
          </div>
          <p className="text-sm text-blue-600">{testimonial.location}</p>
          <div className="mt-2">
            <RatingStars rating={testimonial.rating.overall} />
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-start space-x-2">
          <Quote className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
          <p className="text-blue-700">{testimonial.review}</p>
        </div>
      </div>

      {testimonial.treatment && (
        <div className="mt-4 pt-4 border-t border-blue-100">
          <div className="text-sm text-blue-600">
            Treatment:{" "}
            <span className="font-medium">{testimonial.treatment}</span>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-blue-600">Service:</span>
              <RatingStars rating={testimonial.rating.service} />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-blue-600">Cleanliness:</span>
              <RatingStars rating={testimonial.rating.cleanliness} />
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const TestimonialsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Patient Testimonials
          </h1>
          <p className="text-xl text-blue-600 max-w-2xl mx-auto">
            Read what our patients say about their experience at Om Dental
            Clinic
          </p>
          <div className="flex items-center justify-center mt-4">
            <Image
              src="/images/google-review.png"
              alt="Google Reviews"
              width={30}
              height={30}
              className="mr-2"
            />
            <div className="text-2xl font-bold text-blue-800 mr-2">4.9</div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-md border border-white/20 text-center"
          >
            <ThumbsUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-blue-800">4.9</div>
            <p className="text-blue-600">Average Rating</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-md border border-white/20 text-center"
          >
            <MessageCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-blue-800">800+</div>
            <p className="text-blue-600">Patient Reviews</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/70 backdrop-blur-md p-6 rounded-lg shadow-md border border-white/20 text-center"
          >
            <Star className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-3xl font-bold text-blue-800">5000+</div>
            <p className="text-blue-600">Satisfied Patients</p>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
              Share Your Experience
            </h2>
            <p className="text-blue-600 mb-6">
              Had a great experience at Om Dental Clinic? We&apos;d love to hear
              about it!
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              onClick={() => window.open("https://g.co/kgs/d2pZBPS", "_blank")}
            >
              Write a Review
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
