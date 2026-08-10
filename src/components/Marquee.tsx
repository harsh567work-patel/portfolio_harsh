import React from 'react';

export const Marquee: React.FC = () => {
  const tickerItems = [
    'AI & MACHINE LEARNING',
    'DATA SCIENCE',
    'COMPUTER VISION',
    'FULL STACK DEVELOPMENT',
    'RESEARCH & ALGORITHMS',
    'HEALTHCARE AI',
    'SMART FARMING',
    'REAL WORLD SYSTEMS',
    'FASTAPI & PYTORCH',
    'EXPLAINABLE AI (SHAP)',
  ];

  return (
    <div className="w-full bg-[#FF4D2E] text-white py-4 overflow-hidden shadow-md select-none border-y border-red-600/30">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {/* First Loop */}
        <div className="flex items-center gap-8 px-4 font-mono font-bold text-sm sm:text-base tracking-widest uppercase">
          {tickerItems.map((item, idx) => (
            <React.Fragment key={`marquee-1-${idx}`}>
              <span>{item}</span>
              <span className="text-[#F4F044] text-xs">✦</span>
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate Loop for Continuous Animation */}
        <div className="flex items-center gap-8 px-4 font-mono font-bold text-sm sm:text-base tracking-widest uppercase" aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <React.Fragment key={`marquee-2-${idx}`}>
              <span>{item}</span>
              <span className="text-[#F4F044] text-xs">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
