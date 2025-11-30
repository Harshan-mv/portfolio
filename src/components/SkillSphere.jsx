import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React", "Node.js", "Express", "MongoDB", "Tailwind",
  "JavaScript", "Java", "Spring", "Docker", "Git",
  "APIs", "Firebase", "Linux", "WebRTC", "Socket.IO"
];

// Animation Variants
const skillVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    }
  }),
  float: {
    y: [0, -10, 10, -5, 0],
    x: [0, 5, -5, 3, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
    }
  }
};

export default function SkillSphere() {
  return (
    <div className="
      w-full h-full flex flex-wrap gap-3 p-4 rounded-2xl
      bg-gradient-to-br from-white/30 to-slate-200/30
      backdrop-blur-xl shadow-lg border border-white/40
      justify-center items-center
    ">
      {skills.map((skill, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={skillVariants}
          initial="hidden"
          animate={["visible", "float"]}
          className="
            px-4 py-2 text-sm font-semibold rounded-xl
            bg-white/40 backdrop-blur-md
            border border-white/50 shadow-md
            hover:shadow-xl hover:scale-110
            transition cursor-default
          "
          whileHover={{ y: -5 }}
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );
}
