import { motion } from "motion/react";

function SkillTag({ label, index = 0 }) {
  const isHighlighted = label === "JavaScript" || label === "React";

  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      viewport={{ once: true }}
      className={`inline-flex items-center rounded-full px-4 py-2 text-sm transition-all duration-200 ${
        isHighlighted
          ? "border border-accent/45 bg-accent-dim text-accent font-semibold shadow-[0_0_12px_rgba(194,164,255,0.08)] hover:border-accent hover:bg-accent/10"
          : "border border-border bg-bg-elevated text-text-primary hover:border-accent/40 hover:text-accent"
      }`}
    >
      {label}
    </motion.span>
  );
}

export default SkillTag;
