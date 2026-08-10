import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useAppState } from '../context/ThemeContext';
import { Sparkles, ArrowUpRight, Copy, Check, Mail, Github, Linkedin, Send, X, FileText } from 'lucide-react';

export const Contact: React.FC = () => {
  const { isContactModalOpen, openContactModal, closeContactModal } = useAppState();
  const [copied, setCopied] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      closeContactModal();
    }, 3000);
  };

  return (
    <>
      <section id="contact" className="py-24 sm:py-32 px-4 sm:px-8 bg-[#17152A] text-[#F7F1E7] relative overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-10 bg-editorial-grid pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4D2E] uppercase font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>LET'S CONNECT & COLLABORATE</span>
          </div>

          {/* Huge Heading */}
          <div className="max-w-5xl mb-12">
            <h2 className="font-serif text-5xl sm:text-7xl lg:text-9xl font-bold leading-tight tracking-tight">
              Have an idea? <br />
              <span className="italic font-normal text-[#FF4D2E]">Let's build it.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pt-8 border-t border-white/10">
            
            {/* Direct Email Callout */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xl sm:text-2xl text-[#A8A2BC] max-w-xl font-normal">
                Open for AI/ML engineering roles, research collaborations, hackathon builds, and ambitious technical projects.
              </p>

              {/* Copyable Email Pill */}
              <div className="inline-flex flex-wrap items-center gap-3 p-3 pl-6 rounded-full bg-white/5 border border-white/10 hover:border-[#FF4D2E] transition-all">
                <span className="font-mono text-sm sm:text-base font-bold text-[#F7F1E7]">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 rounded-full bg-[#FF4D2E] text-white text-xs font-bold font-mono flex items-center gap-1.5 hover:bg-white hover:text-[#17152A] transition-all"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'COPIED!' : 'COPY EMAIL'}</span>
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="lg:col-span-5 flex flex-wrap gap-4 justify-start lg:justify-end">
              <button
                onClick={openContactModal}
                className="inline-flex items-center gap-3 px-8 py-5 rounded-full bg-[#FF4D2E] text-white font-bold text-sm tracking-wider hover:bg-white hover:text-[#17152A] transition-all shadow-xl scale-105"
              >
                <span>START A CONVERSATION</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <a
                href="/resume_harsh.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-5 rounded-full border border-white/20 text-[#F7F1E7] font-bold text-xs tracking-wider hover:border-[#FF4D2E] hover:text-[#FF4D2E] transition-all"
              >
                <FileText className="w-4 h-4" />
                <span>RESUME</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Contact Form Modal / Drawer */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-3xl shadow-2xl p-8 sm:p-10 my-auto"
            >
              <div className="flex items-center justify-between pb-6 border-b border-[var(--border-color)] mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-[#FF4D2E] uppercase">DIRECT MESSAGE</span>
                  <h3 className="font-serif text-3xl font-bold text-[var(--text-primary)]">Send a Message</h3>
                </div>
                <button
                  onClick={closeContactModal}
                  className="p-2.5 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[#FF4D2E] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {formSubmitted ? (
                <div className="p-8 text-center space-y-4 my-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[var(--text-primary)]">Message Sent Successfully!</h4>
                  <p className="text-sm text-[var(--text-secondary)] font-mono">
                    Thank you, {formData.name || 'there'}. Harsh will review your note and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:border-[#FF4D2E] font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:border-[#FF4D2E] font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-[var(--text-secondary)] mb-1">Project Idea / Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe your project, collaboration idea, or research opportunity..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] focus:outline-none focus:border-[#FF4D2E] font-sans text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#FF4D2E] text-white font-bold text-xs tracking-wider flex items-center justify-center gap-2 hover:bg-[#211A46] transition-colors shadow-md"
                  >
                    <span>SEND MESSAGE NOW</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
