"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "@/content/types";
import { useReducedMotion } from "@/lib/reduced-motion";

export function ProjectCard({ project }: { project: Project }) {
  const reducedMotion = useReducedMotion();

  return (
    <Link href={`/projects/${project.slug}`} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f5f0]">
      <motion.article
        whileHover={reducedMotion ? undefined : { y: -8, scale: 1.01 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden rounded-[2rem] border border-[#111111]/10 bg-[#f7f5f0] p-4 shadow-[0_20px_60px_-30px_rgba(17,17,17,0.35)]"
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#111111]">
          <Image
            src={project.cardImage.src}
            alt={project.cardImage.alt}
            fill
            className={`object-cover transition duration-500 ${reducedMotion ? "opacity-100" : "opacity-100 group-hover:opacity-0"}`}
            unoptimized={project.cardImage.src.startsWith("data:image")}
          />
          {!reducedMotion && (
            <AnimatePresence mode="wait">
              <motion.div
                key={project.hoverImage.src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0"
              >
                <Image
                  src={project.hoverImage.src}
                  alt={project.hoverImage.alt}
                  fill
                  className="object-cover"
                  unoptimized={project.hoverImage.src.startsWith("data:image")}
                />
              </motion.div>
            </AnimatePresence>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/30 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 rounded-full border border-[#f7f5f0]/20 bg-[#111111]/80 px-3 py-2 text-[10px] uppercase tracking-[0.3em] text-[#f7f5f0] backdrop-blur">
            {project.roles.join(" • ")}
          </div>
        </div>
        <div className="px-1 pb-1 pt-5">
          <p className="mb-3 text-[11px] uppercase tracking-[0.32em] text-[#111111]/60">{project.tagline}</p>
          <h3 className="text-2xl font-semibold text-[#111111]">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[#111111]/70">{project.hoverCaption}</p>
        </div>
      </motion.article>
    </Link>
  );
}
