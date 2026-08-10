import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';
import { useAppState } from '../context/ThemeContext';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const { openCaseStudy } = useAppState();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative my-16 lg:my-28 group"
    >
      {/* Background Large Subtle Number (01, 02, etc) */}
      <div
        className={`absolute -top-12 sm:-top-20 font-serif font-bold text-8xl sm:text-[180px] lg:text-[220px] select-none pointer-events-none opacity-[0.06] dark:opacity-[0.08] text-[var(--text-primary)] transition-opacity duration-500 group-hover:opacity-[0.12] ${
          isEven ? 'left-0 sm:left-4' : 'right-0 sm:right-4'
        }`}
      >
        {project.number}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Visual / Image Block */}
        <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative rounded-3xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-card)] shadow-xl img-zoom-wrapper">
            
            {/* Top Bar Decoration */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/60 text-xs font-mono text-[var(--text-secondary)]">
              <span className="flex items-center gap-2 font-bold text-[#FF4D2E]">
                <span className="w-2 h-2 rounded-full bg-[#FF4D2E]" />
                {project.category}
              </span>
              <span>{project.year}</span>
            </div>

            {/* Project Cover Image */}
            <div className="relative aspect-[16/10] bg-[#17152A] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              {/* Quick Metrics Overlay Pills */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {project.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-mono border border-white/20 flex items-center gap-1.5"
                  >
                    <span className="text-[#FF4D2E] font-bold">{m.value}</span>
                    <span className="text-white/70 text-[10px] uppercase">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Project Details Content Block */}
        <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          
          {/* Subcategory / Year */}
          <div className="flex items-center gap-3 mb-3 text-xs font-mono tracking-widest text-[#FF4D2E] font-bold uppercase">
            <span>{project.subCategory}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[var(--text-primary)] mb-4 group-hover:text-[#FF4D2E] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            
            {/* VIEW CASE STUDY PRIMARY CTA */}
            <button
              onClick={() => openCaseStudy(project)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF4D2E] text-white text-xs font-bold tracking-wider hover:bg-[#211A46] dark:hover:bg-[#F7F1E7] dark:hover:text-[#211A46] transition-all duration-300 shadow-md"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW CASE STUDY</span>
            </button>

            {/* GitHub Repo */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[#FF4D2E] hover:text-[#FF4D2E] transition-all"
                title="View Source on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}

            {/* Live Demo */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[#FF4D2E] hover:text-[#FF4D2E] transition-all"
                title="Open Live Application"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

          </div>

        </div>

      </div>
    </motion.div>
  );
};
