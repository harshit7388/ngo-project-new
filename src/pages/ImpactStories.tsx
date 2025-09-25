// src/pages/ImpactStories.tsx
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Heart, Users } from "lucide-react";

const ImpactStories = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Impact Stories
      </motion.h1>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Stories of Change */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-teal-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Stories of Change
            </h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            From a young girl in a rural school who now dreams of becoming a
            doctor thanks to our education program, to a village hospital now
            equipped with vital health equipment saving lives—our stories are
            testaments of hope and resilience.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="bg-gradient-to-r from-teal-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-pink-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Testimonials
            </h2>
          </div>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li className="italic border-l-4 border-teal-500 pl-4">
              “The ration kits from Kalyan Ke Kadam Foundation kept my family alive during the hardest
              times. They didn’t just give food; they gave us hope.” <br />
              <span className="text-sm font-medium text-gray-500">
                – Beneficiary family from Uttar Pradesh
              </span>
            </li>
            <li className="italic border-l-4 border-pink-500 pl-4">
              “Our rural hospital now has essential equipment, and patients
              don’t have to travel miles for basic care. This is life-changing.”{" "}
              <br />
              <span className="text-sm font-medium text-gray-500">
                – A rural doctor from Haryana
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Partners Speak */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-8 h-8 text-indigo-600" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Partners Speak
            </h2>
          </div>
          <p className="text-gray-600 text-lg italic">
            “Collaborating with Kalyan Ke Kadam Foundation has amplified our own mission of social
            impact. Their transparency, dedication, and ground-level connect
            make them a trusted partner for change.”
          </p>
          <span className="text-sm font-medium text-gray-500 block mt-3">
            – Residency Hotels, Haryana
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactStories;
