import { motion } from "motion/react";

function SectionReveal({ children, className = "", ...props }) {
  return (
    <motion.section
      {...props}
      initial={{ opacity: 0, y: 65 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default SectionReveal;