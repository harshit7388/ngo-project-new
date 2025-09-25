// src/pages/Programs.jsx
import React from "react";
import {
  Heart,
  BookOpen,
  Stethoscope,
  Users,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";

// Program data
const programs = [
  {
    icon: Heart,
    title: "COVID Relief Work",
    desc: "Providing essential food and nutrition support to families in need across multiple states.",
    color: "from-pink-500 to-red-400",
  },
  {
    icon: BookOpen,
    title: "School Education Programs",
    desc: "Supporting government schools with resources, after-school clubs, and digital literacy initiatives.",
    color: "from-indigo-500 to-purple-400",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Support",
    desc: "Supplying rural hospitals with critical health equipment and running preventive health camps.",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: Users,
    title: "Skill Development & Empowerment",
    desc: "Training women and youth to build livelihoods, ensuring financial independence and resilience.",
    color: "from-orange-500 to-yellow-400",
  },
  {
    icon: Leaf,
    title: "Sustainability Drives",
    desc: "Organizing environmental awareness campaigns and encouraging eco-friendly practices.",
    color: "from-teal-500 to-cyan-400",
  },
];

const Programs = () => {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(45,212,191,0.15),transparent_40%)]"></div>

      {/* Section Header */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Our <span className="text-teal-600">Programs</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          We design impactful initiatives that tackle hunger, healthcare,
          education, empowerment, and sustainability — creating lasting change
          across communities.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {programs.map((prog, i) => {
          const Icon = prog.icon;
          return (
            <motion.div
              key={i}
              className="relative group rounded-3xl p-8 shadow-xl bg-white/80 backdrop-blur-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Gradient circle background */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 blur-2xl bg-gradient-to-br ${prog.color}`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br ${prog.color} text-white mb-6`}
                >
                  <Icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {prog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {prog.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-t from-teal-200/30 to-transparent blur-3xl"></div>
    </section>
  );
};

export default Programs;
