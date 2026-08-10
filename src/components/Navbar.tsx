import React, { useState, useEffect } from 'react';
import { useAppState } from '../context/ThemeContext';
import { Sun, Moon, ArrowUpRight, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, activeSection, setActiveSection, openContactModal } = useAppState();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#projects', sectionId: 'projects' },
    { name: 'ABOUT', href: '#about', sectionId: 'about' },
    { name: 'RESEARCH', href: '#research', sectionId: 'research' },
    { name: 'JOURNEY', href: '#journey', sectionId: 'journey' },
    { name: 'CONTACT', href: '#contact', sectionId: 'contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-6 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="group flex items-center gap-2.5 font-bold tracking-tight text-lg sm:text-xl text-[var(--text-primary)] hover:opacity-90 transition-opacity"
          >
            <span className="w-8 h-8 rounded-full bg-[#FF4D2E] text-white flex items-center justify-center font-serif text-sm font-bold shadow-sm group-hover:scale-105 transition-transform">
              HP
            </span>
            <div className="flex flex-col">
              <span className="font-serif tracking-wide text-base sm:text-lg font-bold leading-tight">HARSH PATEL</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#FF4D2E] font-medium">AI / ML Engineer</span>
            </div>
          </a>

          {/* Desktop Floating Pill Navigation */}
          <nav
            className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all duration-300 ${
              isScrolled
                ? 'bg-[var(--bg-card)]/80 border-[var(--border-color)] shadow-lg editorial-glass scale-95'
                : 'bg-[var(--bg-card)]/50 border-[var(--border-color)]/60 editorial-glass'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.sectionId)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 relative ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-[#211A46] dark:bg-[#FF4D2E] rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Theme Switcher & Let's Talk CTA */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="p-2.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)]/70 text-[var(--text-primary)] hover:border-[#FF4D2E] hover:text-[#FF4D2E] transition-all editorial-glass"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-[#F4F044]" /> : <Moon className="w-4 h-4 text-[#211A46]" />}
            </button>

            {/* "LET'S TALK" Pill CTA Button */}
            <button
              onClick={openContactModal}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF4D2E] text-white text-xs font-bold tracking-wider hover:bg-[#e03d20] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Mobile Menu"
              className="md:hidden p-2.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)]"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#17152A] text-white flex flex-col justify-between p-8 md:hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[#FF4D2E] text-white flex items-center justify-center font-serif text-sm font-bold">
                  HP
                </span>
                <span className="font-serif font-bold text-lg tracking-wider text-[#F7F1E7]">HARSH PATEL</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
                className="p-3 rounded-full border border-white/20 text-white hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-6 my-auto py-8">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  onClick={() => handleNavClick(link.sectionId)}
                  className="text-left font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F1E7] hover:text-[#FF4D2E] transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-white/40">0{idx + 1}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Footer CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openContactModal();
                }}
                className="w-full py-4 rounded-full bg-[#FF4D2E] text-white font-bold text-sm tracking-wider flex items-center justify-center gap-2"
              >
                <span>LET'S TALK NOW</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-between text-xs text-white/50 font-mono">
                <span>harsh99power@gmail.com</span>
                <span>AI / ML Engineer</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
