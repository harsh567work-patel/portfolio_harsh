import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Sparkles, Terminal, Cpu, Database, Wrench, Shield } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; level: string; experience: string } | null>(null);

  const filterCategories = ['ALL', 'AI / MACHINE LEARNING', 'DEVELOPMENT', 'DATABASE', 'TOOLS & RESEARCH'];

  const displayedCategories = SKILL_CATEGORIES.filter((cat) => {
    if (activeCategory === 'ALL') return true;
    return cat.title === activeCategory;
  });

  return (
    <section id="skills" className="py-24 px-4 sm:px-8 bg-[var(--bg-secondary)]/30 border-y border-[var(--border-color)] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[var(--border-color)] gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-bold mb-3">
              <Sparkles className="w-4 h-4" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
              Tools I use <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#FF4D2E]">to turn ideas into systems.</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#211A46] dark:bg-[#F7F1E7] text-[#F7F1E7] dark:text-[#211A46] shadow-md'
                    : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Typography Floating Pill Cloud */}
        <div className="space-y-12">
          {displayedCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-[var(--border-color)]">
                <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF4D2E]" />
                  {category.title}
                </h3>
                <p className="text-xs font-mono text-[var(--text-secondary)]">{category.description}</p>
              </div>

              {/* Floating Typography Skills Pills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group relative cursor-pointer px-5 py-3 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[#FF4D2E] hover:bg-[#FF4D2E] transition-all duration-300"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm font-bold text-[var(--text-primary)] group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--bg-card)] text-[var(--text-secondary)] group-hover:bg-black/20 group-hover:text-white transition-colors">
                        {skill.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skill Inspector Bar */}
        <div className="mt-8 p-4 rounded-2xl bg-[var(--dark-section)] text-white font-mono text-xs flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#FF4D2E]" />
            <span className="text-white/60">SKILL INSPECTOR:</span>
            {hoveredSkill ? (
              <span className="text-[#F4F044] font-bold">
                {hoveredSkill.name} — {hoveredSkill.level} ({hoveredSkill.experience})
              </span>
            ) : (
              <span className="text-white/40 italic">Hover over any skill pill above to inspect competency area</span>
            )}
          </div>
          <div className="text-[11px] text-white/50 uppercase tracking-widest">
            [ NO PERCENTAGE BARS • REAL CODE CAPABILITIES ]
          </div>
        </div>

      </div>
    </section>
  );
};
