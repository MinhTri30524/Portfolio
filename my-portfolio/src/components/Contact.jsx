import { motion } from "motion/react";
import SectionReveal from "./SectionReveal";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import { HiOutlineMail } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";

const socials = [
  {
    label: "View GitHub",
    href: "https://github.com/",
    icon: FiGithub,
  },
  {
    label: "View LinkedIn",
    href: "https://linkedin.com/in/",
    icon: FiLinkedin,
  },
  {
    label: "View Facebook",
    href: "https://facebook.com/",
    icon: FiFacebook,
  },
];

function Contact() {
  return (
    <SectionReveal id="contact" className="px-6 py-section md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <SectionTitle label="Get in Touch" title="Let's Work Together" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-10 text-base leading-relaxed text-text-secondary"
          >
            I'm currently open to freelance work and collaboration opportunities.
            Whether you have a project in mind or just want to connect, feel free to reach out.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              href="mailto:your.email@example.com"
              variant="primary"
              aria-label="Send email"
            >
              <HiOutlineMail size={18} />
              Send Email
            </Button>
            <Button
              href="/cv.pdf"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download CV"
            >
              Download CV
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="inline-flex items-center justify-center rounded-full border border-border bg-bg-card p-3 text-text-secondary transition-all duration-200 hover:border-accent/40 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent min-h-[44px] min-w-[44px]"
              >
                <social.icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
}

export default Contact;