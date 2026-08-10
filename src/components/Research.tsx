import React, { useState } from 'react';
import { motion } from 'motion/react';
import { RESEARCH_TOPICS } from '../data/portfolioData';
import { Sparkles, BrainCircuit, Activity, Database, ArrowRight, Layers, Lightbulb } from 'lucide-react';

export const Research: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const diagramNodes = [
    { step: 1, label: 'DATA', desc: 'Preprocessing, Feature Scaling & Robustness' },
    { step: 2, label: 'MODEL', desc: 'Architecture Selection & Hyperparameters' },
    { step: 3, label: 'EXPERIMENT', desc: 'Cross-Validation & SHAP Explainability' },
    { step: 4, label: 'RESULT', desc: 'Benchmarking & Metric Evaluation' },
    { step: 5, label: 'SYSTEM', desc: 'FastAPI Microservice & Edge Deployment' },
  ];

  return (
    <section id="research" className="py-24 px-4 sm:px-8 max-w-7xl mx-auto relative">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[var(--border-color)] gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-bold mb-3">
            <Sparkles className="w-4 h-4" />
            <span>ACADEMIC & INTELLECTUAL EXPLORATION</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)]">
            Beyond building. <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#FF4D2E]">I'm learning why things work.</span>
          </h2>
        </div>

        <p className="max-w-md text-base text-[var(--text-secondary)] font-normal">
          AI/ML isn't just about calling API wrappers. My research focus centers on explainable algorithms, clinical metric validation, and lightweight model quantization.
        </p>
      </div>

      {/* ABSTRACT DIAGRAM: DATA -> MODEL -> EXPERIMENT -> RESULT -> SYSTEM */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl mb-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border-color)]">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--text-primary)]">
            <BrainCircuit className="w-4 h-4 text-[#FF4D2E]" />
            <span>THE RESEARCH CYCLE FLOW PIPELINE</span>
          </div>
          <span className="text-xs font-mono text-[var(--text-secondary)]">[ CLICK STEP TO INSPECT ]</span>
        </div>

        {/* Diagram Nodes Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {diagramNodes.map((node, idx) => {
            const isActive = activeStep === node.step;
            return (
              <div key={node.step} className="relative flex flex-col">
                <button
                  onClick={() => setActiveStep(node.step)}
                  className={`p-6 rounded-2xl border text-left transition-all duration-300 relative z-10 ${
                    isActive
                      ? 'bg-[#211A46] dark:bg-[#FF4D2E] text-white border-transparent shadow-lg scale-105'
                      : 'bg-[var(--bg-secondary)] border-[var(--border-color)] text-[var(--text-primary)] hover:border-[#FF4D2E]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-2xl font-serif font-bold ${isActive ? 'text-[#F4F044]' : 'text-[#FF4D2E]'}`}>
                      0{node.step}
                    </span>
                    {idx < diagramNodes.length - 1 && (
                      <ArrowRight className={`w-4 h-4 hidden lg:block ${isActive ? 'text-white' : 'text-[var(--text-secondary)]'}`} />
                    )}
                  </div>
                  <h4 className="font-serif font-bold text-lg mb-1">{node.label}</h4>
                  <p className={`text-xs font-mono ${isActive ? 'text-white/80' : 'text-[var(--text-secondary)]'}`}>
                    {node.desc}
                  </p>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Research Topics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RESEARCH_TOPICS.map((topic) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm flex flex-col justify-between hover:border-[#FF4D2E] transition-all group"
          >
            <div>
              <div className="flex items-center justify-between mb-4 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-[#FF4D2E]/10 text-[#FF4D2E] font-bold">
                  {topic.status}
                </span>
                <span className="text-[var(--text-secondary)]">{topic.diagramStep}</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] mb-3 group-hover:text-[#FF4D2E] transition-colors">
                {topic.title}
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                {topic.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--border-color)]">
              {topic.tags.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-full bg-[var(--bg-secondary)] text-[11px] font-mono text-[var(--text-primary)]">
                  #{t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};
