// src/pages/Impact.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Utensils, BookOpen, Stethoscope, Users } from "lucide-react";

const IMPACT_ITEMS = [
  {
    key: "hunger",
    title: "Hunger Relief",
    desc:
      "Thousands of ration kits distributed during emergencies and ongoing hunger eradication programs.",
    Icon: Utensils,
  },
  {
    key: "education",
    title: "Education",
    desc:
      "Hundreds of children enrolled in school support programs and literacy initiatives.",
    Icon: BookOpen,
  },
  {
    key: "healthcare",
    title: "Healthcare",
    desc:
      "Rural hospitals equipped with life-saving medical equipment and regular health camps benefiting entire communities.",
    Icon: Stethoscope,
  },
  {
    key: "empowerment",
    title: "Empowerment",
    desc:
      "Women and youth trained to build sustainable livelihoods, reducing dependency on aid.",
    Icon: Users,
  },
];

const cardEnter = { opacity: 0, y: 20 };
const cardAnimate = { opacity: 1, y: 0 };

const Impact = () => {
const [openKeys, setOpenKeys] = useState<string[]>([]);

  const toggle = (key:any) => {
    setOpenKeys((prev:any) => (prev.includes(key) ? prev.filter((k:any) => k !== key) : [...prev, key]));
  };

  const expandAll = () => setOpenKeys(IMPACT_ITEMS.map((i) => i.key));
  const collapseAll = () => setOpenKeys([]);

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900">Our Impact</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A snapshot of the concrete ways Kalyan Ke Kadam Foundation creates change.
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex items-center justify-end gap-3 mb-6">
          <button
            onClick={expandAll}
            className="text-sm px-3 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700 transition"
            aria-label="Expand all"
          >
            Expand all
          </button>
          <button
            onClick={collapseAll}
            className="text-sm px-3 py-2 rounded-md border border-gray-200 bg-white hover:bg-gray-50 transition"
            aria-label="Collapse all"
          >
            Collapse all
          </button>
        </div>

        {/* Cards / Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {IMPACT_ITEMS.map((item, idx) => {
            const isOpen = openKeys.includes(item.key);
            const Icon = item.Icon;

            return (
              <motion.div
                key={item.key}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                initial={cardEnter}
                animate={cardAnimate}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
              >
                <button
                  onClick={() => toggle(item.key)}
                  className="w-full text-left p-6 flex items-start gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  {/* Left accent */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-400 text-white shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title and chevron */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                      <svg
                        className={`w-5 h-5 text-gray-400 transform transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{item.desc}</p>
                  </div>
                </button>

                {/* Expandable content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-6 pb-6"
                    >
                      <div className="text-gray-700 text-sm leading-relaxed pt-2">
                        {/* EXACT content provided by you (no additions) */}
                        {item.desc}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Small footer note */}
        <motion.p
          className="mt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Click any card to expand details.
        </motion.p>
      </div>
    </section>
  );
};

export default Impact;
