import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, Cpu, CheckCircle, Database, GitBranch, Terminal, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { useAppState } from '../context/ThemeContext';

export const CaseStudyModal: React.FC = () => {
  const { selectedProjectCaseStudy, closeCaseStudy } = useAppState();

  if (!selectedProjectCaseStudy) return null;

  const cs = selectedProjectCaseStudy.caseStudy;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10">
        
        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[var(--border-color)] bg-[var(--bg-secondary)] sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#FF4D2E] text-white flex items-center justify-center font-mono font-bold text-xs">
                {selectedProjectCaseStudy.number}
              </span>
              <div>
                <span className="text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-bold block">
                  TECHNICAL RESEARCH CASE STUDY
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
                  {selectedProjectCaseStudy.title}
                </h2>
              </div>
            </div>

            <button
              onClick={closeCaseStudy}
              aria-label="Close Case Study"
              className="p-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[#FF4D2E] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body Content (Scrollable) */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-12">
            
            {/* Overview & Key Metric Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
              {selectedProjectCaseStudy.metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-xs font-mono uppercase text-[var(--text-secondary)] block">{m.label}</span>
                  <span className="font-serif text-2xl sm:text-3xl font-bold text-[#FF4D2E]">{m.value}</span>
                </div>
              ))}
            </div>

            {/* 01 — Problem */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D2E] font-bold tracking-widest uppercase">
                <span>01</span>
                <span>•</span>
                <span>PROBLEM STATEMENT</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">What problem was being solved?</h3>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                {cs.problem}
              </p>
            </section>

            {/* 02 — Idea */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D2E] font-bold tracking-widest uppercase">
                <span>02</span>
                <span>•</span>
                <span>CORE CONCEPT</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">What was the core idea?</h3>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                {cs.idea}
              </p>
            </section>

            {/* 03 — Data */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D2E] font-bold tracking-widest uppercase">
                <span>03</span>
                <span>•</span>
                <span>DATA ENGINE & PREPROCESSING</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">What data was used?</h3>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                {cs.data}
              </p>
            </section>

            {/* 04 — Approach */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D2E] font-bold tracking-widest uppercase">
                <span>04</span>
                <span>•</span>
                <span>ALGORITHMIC APPROACH</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">Engineering & ML Methodology</h3>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
                {cs.approach}
              </p>
            </section>

            {/* 05 — Architecture Diagram */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D2E] font-bold tracking-widest uppercase">
                <span>05</span>
                <span>•</span>
                <span>SYSTEM ARCHITECTURE</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">Architecture & Data Flow</h3>
              <div className="p-6 rounded-2xl bg-[#17152A] text-white font-mono text-xs sm:text-sm leading-relaxed border border-white/10 overflow-x-auto shadow-inner">
                <div className="flex items-center gap-2 text-[#FF4D2E] font-bold mb-3">
                  <GitBranch className="w-4 h-4" />
                  <span>PIPELINE FLOW GRAPH</span>
                </div>
                <div className="text-purple-300 font-semibold mb-2">{cs.architecture}</div>
                <div className="pt-3 border-t border-white/10 text-white/60 text-[11px] grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div>[INPUT LAYER] Schema Validation</div>
                  <div>[INFERENCE LAYER] FastAPI / PyTorch</div>
                  <div>[OUTPUT LAYER] Interactive Dashboard</div>
                </div>
              </div>
            </section>

            {/* 06 — Results & Model Comparison Table */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D2E] font-bold tracking-widest uppercase">
                <span>06</span>
                <span>•</span>
                <span>RESULTS & BENCHMARKS</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">Model Metrics & Evaluation</h3>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
                {cs.results}
              </p>

              {/* Benchmark Table if available */}
              {cs.modelsExplored && cs.modelsExplored.length > 0 && (
                <div className="overflow-x-auto rounded-2xl border border-[var(--border-color)] bg-[var(--bg-card)]">
                  <table className="w-full text-left text-xs sm:text-sm font-mono">
                    <thead className="bg-[var(--bg-secondary)] text-[var(--text-primary)] uppercase text-[11px] font-bold border-b border-[var(--border-color)]">
                      <tr>
                        <th className="p-3 sm:p-4">Algorithm / Model</th>
                        <th className="p-3 sm:p-4 text-center">Accuracy</th>
                        <th className="p-3 sm:p-4 text-center">Precision</th>
                        <th className="p-3 sm:p-4 text-center">Recall</th>
                        <th className="p-3 sm:p-4 text-center">F1-Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border-color)] text-[var(--text-secondary)]">
                      {cs.modelsExplored.map((m, idx) => (
                        <tr key={idx} className="hover:bg-[var(--bg-secondary)]/50 transition-colors">
                          <td className="p-3 sm:p-4 font-bold text-[var(--text-primary)]">{m.name}</td>
                          <td className="p-3 sm:p-4 text-center text-[#FF4D2E] font-bold">{m.accuracy}</td>
                          <td className="p-3 sm:p-4 text-center">{m.precision}</td>
                          <td className="p-3 sm:p-4 text-center">{m.recall}</td>
                          <td className="p-3 sm:p-4 text-center font-bold text-[var(--text-primary)]">{m.f1Score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>

            {/* 07 — Technology Stack */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D2E] font-bold tracking-widest uppercase">
                <span>07</span>
                <span>•</span>
                <span>TECHNOLOGY STACK</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 pt-2">
                {cs.technologyStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-mono font-bold shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* 08 — Key Learnings */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D2E] font-bold tracking-widest uppercase">
                <span>08</span>
                <span>•</span>
                <span>RESEARCH LEARNINGS</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">Key Takeaways & Lessons</h3>
              <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] text-base text-[var(--text-secondary)] italic">
                "{cs.learnings}"
              </div>
            </section>

            {/* 09 — Links & Repositories */}
            <section className="space-y-4 border-t border-[var(--border-color)] pt-8">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF4D2E] font-bold tracking-widest uppercase">
                <span>09</span>
                <span>•</span>
                <span>PROJECT REPOSITORIES & DEMOS</span>
              </div>
              <div className="flex flex-wrap gap-4">
                {selectedProjectCaseStudy.githubUrl && (
                  <a
                    href={selectedProjectCaseStudy.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#211A46] dark:bg-[#F7F1E7] text-[#F7F1E7] dark:text-[#211A46] font-bold text-xs tracking-wider hover:bg-[#FF4D2E] dark:hover:bg-[#FF4D2E] dark:hover:text-white transition-all shadow-md"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW SOURCE CODE ON GITHUB</span>
                  </a>
                )}
                {selectedProjectCaseStudy.liveUrl && (
                  <a
                    href={selectedProjectCaseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#FF4D2E] text-[#FF4D2E] font-bold text-xs tracking-wider hover:bg-[#FF4D2E] hover:text-white transition-all shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>OPEN LIVE DEMO</span>
                  </a>
                )}
              </div>
            </section>

          </div>

          {/* Modal Footer */}
          <div className="p-6 border-t border-[var(--border-color)] bg-[var(--bg-secondary)] flex justify-end">
            <button
              onClick={closeCaseStudy}
              className="px-6 py-2.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] font-bold text-xs hover:bg-[var(--border-color)] transition-all"
            >
              CLOSE CASE STUDY
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
