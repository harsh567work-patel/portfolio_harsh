import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Terminal, Cpu, Database } from 'lucide-react';
import { useAppState } from '../context/ThemeContext';

export const Hero: React.FC = () => {
  const { openContactModal } = useAppState();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Background Interactive Neural Network Canvas Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Create particles representing data nodes
    const particleCount = Math.min(35, Math.floor(width / 30));
    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1.5,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw node connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#FF4D2E';
        ctx.fill();

        // Draw line connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(185, 154, 244, ${0.25 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-8 overflow-hidden bg-editorial-grid">
      
      {/* Background Neural Network Canvas */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-30">
        <canvas ref={canvasRef} className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
        
        {/* Editorial Top Badge Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)]/80 text-[var(--text-secondary)] mb-6 text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF4D2E] animate-pulse" />
          <span>AI / ML ENGINEER • DEVELOPER • RESEARCHER</span>
        </motion.div>

        {/* Large Editorial Serif Main Heading */}
        <div className="max-w-5xl mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[1.02] tracking-tight text-[var(--text-primary)] font-bold"
          >
            Building <span className="italic font-normal text-[#FF4D2E] underline decoration-[#B99AF4]/50 decoration-wavy decoration-1 underline-offset-8">intelligent</span> systems for real-world problems.
          </motion.h1>
        </div>

        {/* Bio Paragraph & CTA Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-2 border-t border-[var(--border-color)]">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] leading-relaxed font-normal max-w-2xl">
              I'm a Computer Science student focused on Artificial Intelligence and Machine Learning, building practical systems across healthcare, agriculture, data science, and intelligent applications.
            </p>

            {/* Quick Stat Highlights Bar */}
            <div className="flex flex-wrap items-center gap-6 mt-6 pt-4 text-xs sm:text-sm font-mono text-[var(--text-secondary)]">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#FF4D2E]" />
                <span>94.2% ML Accuracy</span>
              </div>
              <span className="text-[var(--border-color)]">•</span>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-[#B99AF4]" />
                <span>AIIMS Doctor Praised</span>
              </div>
              <span className="text-[var(--border-color)]">•</span>
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#FF4D2E]" />
                <span>FastAPI + PyTorch</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-5 flex flex-wrap items-center gap-4 justify-start lg:justify-end"
          >
            {/* CTA 1: EXPLORE MY WORK */}
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative inline-flex items-center justify-between gap-3 px-7 py-4 rounded-full bg-[#211A46] dark:bg-[#F7F1E7] text-[#F7F1E7] dark:text-[#211A46] font-bold text-sm tracking-wider shadow-md hover:bg-[#FF4D2E] dark:hover:bg-[#FF4D2E] dark:hover:text-white hover:text-white transition-all duration-300"
            >
              <span>EXPLORE MY WORK</span>
              <span className="w-8 h-8 rounded-full bg-white/20 dark:bg-black/10 group-hover:bg-white/30 flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>

            {/* CTA 2: LET'S CONNECT */}
            <button
              onClick={openContactModal}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-[var(--border-color)] bg-[var(--bg-card)]/80 text-[var(--text-primary)] font-bold text-sm tracking-wider hover:border-[#FF4D2E] hover:text-[#FF4D2E] transition-all shadow-sm"
            >
              <span>LET'S CONNECT</span>
            </button>
          </motion.div>

        </div>

      </div>

      {/* Decorative Bottom Corner Accent Graphic */}
      <div className="absolute bottom-4 right-8 hidden md:flex items-center gap-2 text-[10px] font-mono text-[var(--text-secondary)] uppercase tracking-widest opacity-60">
        <span>[ 01 / SCROLL TO EXPLORE ]</span>
      </div>

    </section>
  );
};
