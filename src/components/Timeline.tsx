import React from 'react';
import { motion } from 'motion/react';
import { JOURNEY_MILESTONES } from '../data/portfolioData';
import { Sparkles, GraduationCap, Trophy, Award, Star } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section id="journey" className="py-24 px-4 sm:px-8 bg-[var(--bg-secondary)]/40 border-y border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[var(--border-color)]">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-bold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>MILESTONES & TIMELINE</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
            The journey <span className="italic font-normal text-[#FF4D2E]">so far.</span>
          </h2>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-[var(--border-color)] ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12">
          {JOURNEY_MILESTONES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Bullet Dot */}
              <div className="absolute -left-[31px] sm:-left-[55px] top-1.5 w-5 h-5 rounded-full bg-[#FF4D2E] border-4 border-[var(--bg-primary)] shadow-sm group-hover:scale-125 transition-transform" />

              <div className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm hover:border-[#FF4D2E] transition-all">
                
                {/* Year & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="font-serif font-bold text-3xl sm:text-4xl text-[#FF4D2E]">
                    {item.year}
                  </span>
                  {item.highlightBadge && (
                    <span className="px-3.5 py-1 rounded-full bg-[#211A46] dark:bg-[#F7F1E7] text-[#F7F1E7] dark:text-[#211A46] text-xs font-mono font-bold">
                      ✦ {item.highlightBadge}
                    </span>
                  )}
                </div>

                {/* Title & Org */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-1">
                  {item.title}
                </h3>
                <div className="text-xs font-mono uppercase tracking-widest text-[var(--text-secondary)] mb-4">
                  {item.organization} • {item.type}
                </div>

                <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
