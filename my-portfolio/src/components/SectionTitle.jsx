import { motion } from "motion/react";

function SectionTitle({ label, title }) {
  return (
    <div className="mb-12 md:mb-16">
      {label && (
        <motion.p
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-3 text-sm font-medium tracking-wide uppercase text-accent"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        viewport={{ once: true }}
        className="font-heading text-3xl font-semibold text-white sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}

export default SectionTitle;
