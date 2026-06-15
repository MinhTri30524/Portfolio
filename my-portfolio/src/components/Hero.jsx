import { motion } from "motion/react";
import Button from "./Button";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-6 md:px-10"
    >
      {/* Subtle accent glow — intentional, not a gradient blob */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto w-full max-w-6xl"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 text-base font-medium text-accent md:text-lg"
        >
          Hi, I'm Nguyễn Minh Trí
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Frontend &amp;{" "}
          <span className="text-accent">WordPress</span>{" "}
          Developer.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg"
        >
          I build clean, responsive, and user-friendly websites using React,
          WordPress, and modern web technologies.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="#projects" variant="primary">
            View Projects
          </Button>
          <Button href="#contact" variant="outline">
            Contact Me
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;