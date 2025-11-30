import React from "react";
import { SKILLS } from "../constants";
import { Zap } from "lucide-react";
import { motion } from "framer-motion";

const Skills = () => {
  const colorStyles = [
    "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
    "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
    "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100",
  ];

  return (
    <section id="skills" className="py-12 bg-slate-50">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wide mb-3">
            <Zap size={14} /> My Arsenal
          </div>
          <h2 className="text-4xl font-bold text-slate-900">Skills & Expertise</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            A snapshot of my few Technical & Soft Skills on a single screen.
          </p>
        </div>

        {/* Masonry Grid (no scrolling needed) */}
        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {SKILLS.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
            >
              <h3 className="text-lg font-bold text-slate-800 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <span className={`w-2 h-6 rounded-full ${idx % 2 === 0 ? "bg-primary" : "bg-secondary"}`}></span>
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => {
                  const style = colorStyles[sIdx % colorStyles.length];
                  return (
                    <motion.span
                      key={sIdx}
                      className={`px-3 py-1 text-sm font-semibold rounded-lg border shadow-sm cursor-default ${style}`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {skill}
                    </motion.span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
