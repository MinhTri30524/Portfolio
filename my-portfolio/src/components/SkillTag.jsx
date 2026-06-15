import { motion } from "motion/react";

function SkillTag({ label, index = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      viewport={{ once: true }}
      className="inline-flex items-center rounded-full border border-border bg-bg-elevated px-4 py-2 text-sm text-text-primary transition-colors duration-200 hover:border-accent/40 hover:text-accent"
    >
      {label}
    </motion.span>
  );
}

export default SkillTag;
