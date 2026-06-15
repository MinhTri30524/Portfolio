import { motion } from "motion/react";
import { HiOutlineExternalLink, HiOutlineCode } from "react-icons/hi";

function ProjectCard({ title, type, description, tech, role, liveUrl, githubUrl, index = 0 }) {
  const hasLive = liveUrl && liveUrl.length > 0;
  const hasGithub = githubUrl && githubUrl.length > 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ y: -10 }}
      className="group flex flex-col rounded-2xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_12px_30px_-10px_rgba(194,164,255,0.12)] md:p-8"
    >
      {/* Type badge */}
      <span className="mb-4 inline-flex w-fit rounded-full border border-accent/20 bg-accent-dim px-3 py-1 text-xs font-medium text-accent">
        {type}
      </span>

      {/* Title */}
      <h3 className="mb-3 font-heading text-xl font-semibold text-white md:text-2xl">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>

      {/* Role */}
      {role && (
        <p className="mb-5 text-sm text-text-muted">
          <span className="font-medium text-text-secondary">Role:</span> {role}
        </p>
      )}

      {/* Tech stack */}
      <div className="mb-6 mt-auto flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-text-primary"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Links — only render if at least one exists */}
      {(hasLive || hasGithub) && (
        <div className="flex gap-4 border-t border-border pt-5">
          {hasLive && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent min-h-[44px]"
              aria-label={`View live demo of ${title}`}
            >
              <HiOutlineExternalLink size={16} />
              View Live
            </a>
          )}
          {hasGithub && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent min-h-[44px]"
              aria-label={`View source code of ${title}`}
            >
              <HiOutlineCode size={16} />
              Source Code
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

export default ProjectCard;