import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Intro } from './components/Intro';
import { ProjectSection } from './components/ProjectSection';
import { Skills } from './components/Skills';
import { Statistics } from './components/Statistics';
import { Research } from './components/Research';
import { Timeline } from './components/Timeline';
import { Achievements } from './components/Achievements';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans transition-colors duration-300 relative">
        <CustomCursor />
        <Navbar />
        
        <main>
          <Hero />
          <Marquee />
          <Intro />
          <ProjectSection />
          <Skills />
          <Statistics />
          <Research />
          <Timeline />
          <Achievements />
          <About />
          <Contact />
        </main>

        <Footer />

        {/* Technical Modals */}
        <CaseStudyModal />
      </div>
    </ThemeProvider>
  );
}
