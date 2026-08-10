import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Sparkles, Layers } from 'lucide-react';

export const ProjectSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('ALL');

  const filterCategories = ['ALL', 'HEALTHCARE', 'AGRICULTURE', 'MACHINE LEARNING'];

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === 'ALL') return true;
    if (filter === 'HEALTHCARE') return project.category.includes('Health') || project.category.includes('Healthcare');
    if (filter === 'AGRICULTURE') return project.category.includes('Agriculture') || project.category.includes('Farming');
    if (filter === 'MACHINE LEARNING') return project.category.includes('Machine Learning') || project.category.includes('ML');
    return true;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[var(--border-color)] gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-bold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>SELECTED WORKS</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
            Things I've built <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#FF4D2E]">along the way.</span>
          </h2>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filterCategories.map((category) => {
            const isActive = filter === category;
            return (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#FF4D2E] text-white shadow-md'
                    : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects List with Alternating Layouts */}
      <div className="space-y-12">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Bottom Summary Callout */}
      <div className="mt-20 p-8 rounded-3xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-center max-w-3xl mx-auto">
        <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-2">Want to see more code & experiments?</h3>
        <p className="text-sm text-[var(--text-secondary)] mb-6 font-normal">
          Additional Jupyter notebooks, algorithmic benchmarks, and open-source contributions are documented on my GitHub.
        </p>
        <a
          href="https://github.com/harshpatel-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#211A46] dark:bg-[#F7F1E7] text-[#F7F1E7] dark:text-[#211A46] font-bold text-xs tracking-wider hover:bg-[#FF4D2E] dark:hover:bg-[#FF4D2E] dark:hover:text-white transition-all shadow-md"
        >
          <span>EXPLORE HARSH'S GITHUB REPOS</span>
          <Layers className="w-4 h-4" />
        </a>
      </div>

    </section>
  );
};
