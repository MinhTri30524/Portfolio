import { motion } from "motion/react";
import SectionReveal from "./SectionReveal";
import SectionTitle from "./SectionTitle";
import SkillTag from "./SkillTag";
import { skills } from "../data/skills";

function Skills() {
    let globalIndex = 0;

    return (
        <SectionReveal id="skills" className="px-6 py-section md:px-10">
            <div className="mx-auto max-w-6xl">
                <SectionTitle label="Technical Skills" title="Tools & Technologies" />

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {skills.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                                {group.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((skill) => {
                                    const idx = globalIndex++;
                                    return <SkillTag key={skill} label={skill} index={idx} />;
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionReveal>
    );
}

export default Skills;