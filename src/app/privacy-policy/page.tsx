"use client";
import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/20 max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            Privacy Policy
          </h1>
          <p className="text-blue-600 mb-8">
            Last Updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>

          <div className="space-y-6 text-blue-700">
            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                1. Introduction
              </h2>
              <p>
                At Om Dental Clinic, we respect your privacy and are committed
                to protecting your personal data. This privacy policy will
                inform you about how we look after your personal data when you
                visit our website and tell you about your privacy rights and how
                the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                2. The Data We Collect About You
              </h2>
              <p>
                Personal data, or personal information, means any information
                about an individual from which that person can be identified. We
                may collect, use, store and transfer different kinds of personal
                data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Identity Data: includes first name, last name, username or
                  similar identifier, date of birth.
                </li>
                <li>
                  Contact Data: includes billing address, delivery address,
                  email address and telephone numbers.
                </li>
                <li>
                  Medical Data: includes your medical history, current
                  medications, allergies, and other health-related information
                  necessary for your dental treatment.
                </li>
                <li>
                  Technical Data: includes internet protocol (IP) address,
                  browser type and version, time zone setting and location,
                  browser plug-in types and versions, operating system and
                  platform, and other technology on the devices you use to
                  access this website.
                </li>
                <li>
                  Usage Data: includes information about how you use our
                  website, products, and services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                3. How We Use Your Personal Data
              </h2>
              <p>
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>To register you as a new patient.</li>
                <li>To provide dental care and treatment.</li>
                <li>To manage our relationship with you.</li>
                <li>
                  To improve our website, products/services, marketing, or
                  customer relationships.
                </li>
                <li>
                  To recommend products or services which may be of interest to
                  you.
                </li>
                <li>To comply with a legal or regulatory obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                4. Data Security
              </h2>
              <p>
                We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used, or
                accessed in an unauthorized way, altered, or disclosed. In
                addition, we limit access to your personal data to those
                employees, agents, contractors, and other third parties who have
                a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                5. Data Retention
              </h2>
              <p>
                We will only retain your personal data for as long as necessary
                to fulfill the purposes we collected it for, including for the
                purposes of satisfying any legal, accounting, or reporting
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                6. Your Legal Rights
              </h2>
              <p>
                Under certain circumstances, you have rights under data
                protection laws in relation to your personal data, including the
                right to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                7. Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy or our
                privacy practices, please contact us at:
              </p>
              <div className="mt-2">
                <p>Om Dental Clinic</p>
                <p>123 Dental Plaza, Baner Road</p>
                <p>Pune, Maharashtra 411045</p>
                <p>Email: info@omdentalclinic.com</p>
                <p>Phone: +91 96996 14430</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
