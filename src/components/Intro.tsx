import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, Lightbulb, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Intro: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-[var(--bg-secondary)]/50 relative overflow-hidden border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Statement Left Column */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-bold mb-4"
            >
              <Sparkles className="w-4 h-4" />
              <span>PHILOSOPHY & VISION</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-[var(--text-primary)] mb-8"
            >
              "{PERSONAL_INFO.editorialIntro}"
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-2xl text-[var(--text-secondary)] leading-relaxed font-normal"
            >
              {PERSONAL_INFO.philosophy}
            </motion.p>
          </div>

          {/* Decorative Abstract AI Illustration Right Column */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-8 flex flex-col justify-between shadow-xl"
            >
              {/* Outer Decorative Rings */}
              <div className="absolute inset-4 rounded-2xl border border-dashed border-[#B99AF4]/40 animate-[spin_60s_linear_infinite]" />
              
              <div className="flex justify-between items-center text-xs font-mono text-[var(--text-secondary)]">
                <span className="flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-[#FF4D2E]" />
                  <span>CORE INTENT</span>
                </span>
                <span>[ 01 ]</span>
              </div>

              {/* Central Geometric Icon Matrix */}
              <div className="my-auto flex flex-col items-center justify-center text-center gap-3">
                <div className="w-16 h-16 rounded-2xl bg-[#FF4D2E]/10 flex items-center justify-center text-[#FF4D2E]">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <span className="block font-serif font-bold text-lg text-[var(--text-primary)]">Data → Decision</span>
                  <span className="block text-xs font-mono text-[var(--text-secondary)]">Research to Deployment</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-[var(--text-secondary)] border-t border-[var(--border-color)] pt-3">
                <span>SYSTEM ACCURACY</span>
                <span className="font-bold text-[#FF4D2E]">HIGH CLINICAL RELEVANCE</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
