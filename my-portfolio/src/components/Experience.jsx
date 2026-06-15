import { motion } from "motion/react";
import SectionReveal from "./SectionReveal";
import SectionTitle from "./SectionTitle";
import { experience } from "../data/experience";
import { HiOutlineBriefcase, HiOutlineCheckCircle } from "react-icons/hi";

function Experience() {
  return (
    <SectionReveal id="experience" className="px-6 py-section md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle label="Work Experience" title="Freelance & Practice" />

        <div className="space-y-6">
          {experience.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border bg-bg-card p-6 md:p-8"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-xl bg-accent-dim p-2.5 text-accent">
                    <HiOutlineBriefcase size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white md:text-xl">
                      {job.title}
                    </h3>
                    <p className="text-sm text-text-muted">{job.period}</p>
                  </div>
                </div>
              </div>

              <p className="mb-5 text-sm leading-relaxed text-text-secondary">
                {job.description}
              </p>

              <ul className="space-y-2.5">
                {job.highlights.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + idx * 0.06 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2.5 text-sm text-text-secondary"
                  >
                    <HiOutlineCheckCircle
                      size={16}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default Experience;
