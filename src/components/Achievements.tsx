import React from 'react';
import { motion } from 'motion/react';
import { ACHIEVEMENTS } from '../data/portfolioData';
import { Sparkles, Award, Stethoscope, Trophy, Globe, Quote } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Header */}
      <div className="mb-16 pb-8 border-b border-[var(--border-color)]">
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-bold mb-3">
          <Sparkles className="w-4 h-4" />
          <span>RECOGNITION & HONORS</span>
        </div>
        <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
          Validation & <span className="italic font-normal text-[#FF4D2E]">achievements.</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ACHIEVEMENTS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`p-8 sm:p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
              item.id === 'aiims-doctor-recognition'
                ? 'bg-[#211A46] text-[#F7F1E7] border-transparent shadow-xl md:col-span-2'
                : 'bg-[var(--bg-card)] border-[var(--border-color)] hover:border-[#FF4D2E]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                  item.id === 'aiims-doctor-recognition'
                    ? 'bg-[#FF4D2E] text-white'
                    : 'bg-[var(--bg-secondary)] text-[#FF4D2E]'
                }`}>
                  {item.category}
                </span>

                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                  item.id === 'aiims-doctor-recognition' ? 'bg-white/10 text-[#F4F044]' : 'bg-[#FF4D2E]/10 text-[#FF4D2E]'
                }`}>
                  {item.iconName === 'Stethoscope' && <Stethoscope className="w-6 h-6" />}
                  {item.iconName === 'Award' && <Award className="w-6 h-6" />}
                  {item.iconName === 'Trophy' && <Trophy className="w-6 h-6" />}
                  {item.iconName === 'Globe' && <Globe className="w-6 h-6" />}
                </div>
              </div>

              <h3 className={`font-serif text-3xl sm:text-4xl font-bold mb-2 ${
                item.id === 'aiims-doctor-recognition' ? 'text-[#F7F1E7]' : 'text-[var(--text-primary)]'
              }`}>
                {item.title}
              </h3>

              <div className={`text-xs font-mono uppercase tracking-widest mb-4 ${
                item.id === 'aiims-doctor-recognition' ? 'text-[#B99AF4]' : 'text-[var(--text-secondary)]'
              }`}>
                {item.subtitle}
              </div>

              <p className={`text-base leading-relaxed mb-6 ${
                item.id === 'aiims-doctor-recognition' ? 'text-white/80' : 'text-[var(--text-secondary)]'
              }`}>
                {item.description}
              </p>
            </div>

            {/* AIIMS Doctor Quote Highlight if present */}
            {item.doctorEndorsement && (
              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 text-white italic font-serif text-lg sm:text-xl flex items-start gap-4 mt-2">
                <Quote className="w-8 h-8 text-[#FF4D2E] shrink-0 opacity-80" />
                <div>
                  <p>{item.doctorEndorsement}</p>
                  <span className="block text-xs font-mono font-bold uppercase text-[#F4F044] not-italic mt-2">
                    — Senior AIIMS Medical Doctor Review
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

    </section>
  );
};
