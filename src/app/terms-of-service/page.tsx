"use client";
import React from "react";
import { motion } from "framer-motion";

const TermsOfServicePage = () => {
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
            Terms of Service
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
                Welcome to Om Dental Clinic. These terms and conditions outline
                the rules and regulations for the use of our website and
                services.
              </p>
              <p className="mt-2">
                By accessing this website, we assume you accept these terms and
                conditions in full. Do not continue to use Om Dental Clinic's
                website if you do not accept all of the terms and conditions
                stated on this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                2. Dental Services
              </h2>
              <p>
                Om Dental Clinic provides various dental services including but
                not limited to general dentistry, cosmetic dentistry,
                orthodontics, oral surgery, pediatric dentistry, and emergency
                dental care.
              </p>
              <p className="mt-2">
                All dental services are provided by licensed dental
                professionals in accordance with applicable laws and
                regulations. The specific treatment plan, procedures, and costs
                will be discussed and agreed upon before any treatment begins.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                3. Appointments and Cancellations
              </h2>
              <p>
                Appointments can be scheduled through our website, by phone, or
                in person. We request that you arrive 15 minutes before your
                scheduled appointment time to complete any necessary paperwork.
              </p>
              <p className="mt-2">
                If you need to cancel or reschedule an appointment, please
                provide at least 24 hours' notice. Failure to do so may result
                in a cancellation fee.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                4. Payment Terms
              </h2>
              <p>
                Payment is expected at the time services are rendered unless
                prior arrangements have been made. We accept cash, credit cards,
                and select insurance plans.
              </p>
              <p className="mt-2">
                For treatments that require multiple visits, a payment plan may
                be arranged. Details will be provided and agreed upon before
                treatment begins.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                5. Insurance
              </h2>
              <p>
                We accept many dental insurance plans. As a courtesy to our
                patients, we will file insurance claims on your behalf. However,
                it is your responsibility to know your insurance benefits and
                limitations.
              </p>
              <p className="mt-2">
                Please note that your insurance policy is a contract between you
                and your insurance company. We are not a party to that contract.
                Any denied claims or unpaid portions remain your responsibility.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                6. Website Use
              </h2>
              <p>
                The content of the pages of this website is for your general
                information and use only. It is subject to change without
                notice.
              </p>
              <p className="mt-2">
                This website contains material which is owned by or licensed to
                us. This material includes, but is not limited to, the design,
                layout, look, appearance, and graphics. Reproduction is
                prohibited other than in accordance with the copyright notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                While we strive to provide the highest quality dental care, we
                cannot guarantee specific results from treatments. Dental
                procedures carry inherent risks which will be explained to you
                before treatment.
              </p>
              <p className="mt-2">
                To the maximum extent permitted by applicable law, we exclude
                all representations, warranties, and conditions relating to our
                website and the use of this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                8. Changes to Terms
              </h2>
              <p>
                We reserve the right to revise these terms of service at any
                time without notice. By using this website, you are agreeing to
                be bound by the current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-blue-800 mb-3">
                9. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms of Service, please
                contact us at:
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

export default TermsOfServicePage;
