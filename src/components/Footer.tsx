import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, Sparkles, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--dark-section)] text-[#F7F1E7] pt-16 pb-12 px-4 sm:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 font-serif font-bold text-2xl text-white mb-1">
              <span className="w-8 h-8 rounded-full bg-[#FF4D2E] text-white flex items-center justify-center text-sm font-bold">
                HP
              </span>
              <span>HARSH PATEL</span>
            </div>
            <p className="text-xs font-mono text-[#A8A2BC]">
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-[#FF4D2E] text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-[#FF4D2E] text-white transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 rounded-full bg-white/5 hover:bg-[#FF4D2E] text-white transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-3 rounded-full border border-white/20 text-white hover:border-[#FF4D2E] hover:text-[#FF4D2E] transition-colors ml-4"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-[#A8A2BC]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>{PERSONAL_INFO.availableFor}</span>
          </div>

          <div className="text-center sm:text-right">
            <span>Designed & built with curiosity. © {new Date().getFullYear()} Harsh Patel.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
