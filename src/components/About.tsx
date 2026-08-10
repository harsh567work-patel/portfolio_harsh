import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useAppState } from '../context/ThemeContext';
import { Sparkles, FileText, ArrowUpRight, Compass, Heart, Brain, Code } from 'lucide-react';

export const About: React.FC = () => {
  const { openContactModal } = useAppState();

  return (
    <section id="about" className="py-24 px-4 sm:px-8 bg-[var(--bg-secondary)]/50 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-bold mb-3">
                <Sparkles className="w-4 h-4" />
                <span>HUMAN PERSPECTIVE</span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl font-bold text-[var(--text-primary)]">
                More than just <br />
                <span className="italic font-normal text-[#FF4D2E]">the code.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-normal">
              <p>
                I'm a Computer Science student exploring the world of Artificial Intelligence and Machine Learning. I enjoy understanding how systems work from the raw mathematical data layer all the way to the final user experience.
              </p>
              <p>
                When I'm not training models or optimizing FastAPI endpoints, you can find me analyzing tactical chess endgames, reading ML research papers, or brainstorming AI tools that address actual community needs in healthcare and agriculture.
              </p>
            </div>

            {/* Interest Tags */}
            <div className="flex flex-wrap gap-3 pt-2">
              {['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Healthcare Tech', 'AgriTech AI', 'National Chess Player', 'Full Stack Development'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-mono font-bold text-[var(--text-primary)]"
                >
                  ✦ {tag}
                </span>
              ))}
            </div>

            {/* Resume & Contact Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="/resume_harsh.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#211A46] dark:bg-[#F7F1E7] text-[#F7F1E7] dark:text-[#211A46] font-bold text-xs tracking-wider hover:bg-[#FF4D2E] dark:hover:bg-[#FF4D2E] dark:hover:text-white transition-all shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW RESUME</span>
              </a>

              <button
                onClick={openContactModal}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] font-bold text-xs tracking-wider hover:border-[#FF4D2E] hover:text-[#FF4D2E] transition-all"
              >
                <span>SAY HELLO</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Editorial Visual Card */}
          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl relative overflow-hidden space-y-6">
              
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
                <span className="font-serif font-bold text-xl text-[var(--text-primary)]">HARSH PATEL</span>
                <span className="text-xs font-mono text-[#FF4D2E] font-bold uppercase">AI / ML STUDENT</span>
              </div>

              <div className="space-y-4 font-mono text-xs text-[var(--text-secondary)]">
                <div className="flex justify-between py-2 border-b border-[var(--border-color)]">
                  <span>DEGREE</span>
                  <span className="text-[var(--text-primary)] font-bold">BTech Computer Science</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--border-color)]">
                  <span>FOCUS</span>
                  <span className="text-[var(--text-primary)] font-bold">Artificial Intelligence & ML</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[var(--border-color)]">
                  <span>SPECIAL SPORT</span>
                  <span className="text-[#FF4D2E] font-bold">National Chess Competitor</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>LOCATION</span>
                  <span className="text-[var(--text-primary)] font-bold">India</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#17152A] text-white text-xs font-mono leading-relaxed border border-white/10">
                <span className="text-[#F4F044] font-bold block mb-1">[ RESEARCH & CODE MOTTO ]</span>
                "Model accuracy matters, but real-world clinical and field utility matters even more."
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
