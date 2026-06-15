import { motion } from "motion/react";
import SectionReveal from "./SectionReveal";
import SectionTitle from "./SectionTitle";
import { HiOutlineCode, HiOutlineGlobe, HiOutlineAcademicCap } from "react-icons/hi";

const highlights = [
  {
    icon: HiOutlineAcademicCap,
    title: "Education",
    text: "Final-year IT student at Ho Chi Minh City Open University, specializing in web development and software engineering.",
  },
  {
    icon: HiOutlineCode,
    title: "What I Do",
    text: "I focus on building responsive web interfaces using JavaScript, React, HTML, CSS, and Tailwind CSS. I also customize WordPress websites for client projects as a supporting service.",
  },
  {
    icon: HiOutlineGlobe,
    title: "My Approach",
    text: "I enjoy creating clean, accessible user interfaces with smooth transitions, responsive layouts, and modern front-end engineering practices.",
  },
];

function About() {
  return (
    <SectionReveal id="about" className="px-6 py-section md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle label="About Me" title="A Bit About Myself" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-border bg-bg-card p-6 transition-colors duration-200 hover:border-accent/30"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent-dim p-3 text-accent transition-colors group-hover:bg-accent-glow">
                <item.icon size={22} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default About;