// src/pages/Reach.jsx
import React from "react";
import { motion } from "framer-motion";
import { Users, MapPin, HeartHandshake } from "lucide-react";
import map2 from "../assets/map2.png";
const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Lives Impacted",
    color: "from-pink-500 to-rose-400",
  },
  {
    icon: MapPin,
    value: "4",
    label: "States Covered",
    color: "from-indigo-500 to-sky-400",
  },
  {
    icon: HeartHandshake,
    value: "50+",
    label: "Communities Served",
    color: "from-green-500 to-emerald-400",
  },
];

const Reach = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-gray-50 px-0 sm:px-0 md:px-0">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-extrabold text-gray-900">
          Our <span className="text-teal-600">Reach</span>
        </h2>
        <p className="mt-3 text-gray-600">
          <b>Kalyan Ke Kadam Foundation</b> has expanded from its base in Haryana to a PAN-India presence,
          reaching urban slums, rural villages, and disaster-affected regions.
          Our programs now touch thousands of lives across states, ensuring food
          security, education, and healthcare access where it is needed most.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={i}
              className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition-transform hover:-translate-y-2 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`}
              ></div>
              <Icon className="w-12 h-12 mx-auto text-teal-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          );
        })}
      </div>
    
         <section className="py-12 sm:py-16 bg-gray-50">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
                  Our Reach
                </h2>
                <div className="flex justify-center">
                  <img
                    src={map2}
                    alt="Our NGO Reach"
                    className="rounded-2xl shadow-lg max-w-2xl w-full sm:w-1/2 md:w-1/2 lg:w-1/2"
                  />
                </div>
              </section>

    </section>

    
  );
};

export default Reach;
