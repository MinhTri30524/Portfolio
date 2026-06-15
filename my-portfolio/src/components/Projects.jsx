import SectionReveal from "./SectionReveal";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <SectionReveal id="projects" className="px-6 py-section md:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionTitle label="Selected Work" title="Projects" />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i} />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

export default Projects;