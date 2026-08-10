import React from 'react';
import { motion } from 'motion/react';
import { STATISTICS } from '../data/portfolioData';

export const Statistics: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-8 bg-[#17152A] text-[#F7F1E7] relative overflow-hidden">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-10 bg-editorial-grid pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-bold block mb-2">
            IMPACT & QUANTIFIED METRICS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold">
            Engineering depth by the numbers.
          </h2>
        </div>

        {/* 4 Stat Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATISTICS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#FF4D2E] transition-all text-center flex flex-col justify-center items-center group"
            >
              <div className="font-serif font-bold text-6xl sm:text-7xl lg:text-8xl text-[#F7F1E7] group-hover:text-[#FF4D2E] transition-colors mb-2 tracking-tight">
                {stat.number}
                {stat.suffix && <span className="text-[#FF4D2E] font-normal">{stat.suffix}</span>}
              </div>
              <h3 className="font-serif text-xl font-bold text-[#F7F1E7] mb-1">
                {stat.label}
              </h3>
              <p className="text-xs font-mono text-[#A8A2BC] max-w-[180px]">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
