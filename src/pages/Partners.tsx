// src/pages/Partners.jsx
import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "UNICEF", logo: "/logos/unicef.png" },
  { name: "WHO", logo: "/logos/who.png" },
  { name: "UNDP", logo: "/logos/undp.png" },
  { name: "Red Cross", logo: "/logos/redcross.png" },
  { name: "Local NGO", logo: "/logos/localngo.png" },
];

const Partners = () => {
  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900">
          Our <span className="text-teal-600">Partners</span>
        </h2>
        <p className="mt-3 text-gray-600">
          We collaborate with global and local organizations to maximize our
          impact.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 max-w-5xl mx-auto">
        {partners.map((partner, i) => (
          <motion.div
            key={i}
            className="flex items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-14 object-contain grayscale hover:grayscale-0 transition"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
