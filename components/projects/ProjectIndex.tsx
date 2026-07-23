"use client";

import { motion } from "framer-motion";
import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function ProjectIndex() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 md:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-[#111111]/60">Selected work</p>
          <h2 className="text-4xl leading-tight text-[#111111] sm:text-5xl">
            The same practice carries across data, design, and code.
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
