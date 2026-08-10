import React, { createContext, useContext, useState, useEffect } from 'react';
import { ThemeMode, Project, AppStateContextType } from '../types';

const ThemeContext = createContext<AppStateContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedProjectCaseStudy, setSelectedProjectCaseStudy] = useState<Project | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);


  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const openCaseStudy = (project: Project) => {
    setSelectedProjectCaseStudy(project);
    document.body.style.overflow = 'hidden';
  };

  const closeCaseStudy = () => {
    setSelectedProjectCaseStudy(null);
    document.body.style.overflow = 'auto';
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
    document.body.style.overflow = 'auto';
  };



  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        activeSection,
        setActiveSection,
        selectedProjectCaseStudy,
        openCaseStudy,
        closeCaseStudy,
        isContactModalOpen,
        openContactModal,
        closeContactModal,

      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppState must be used within a ThemeProvider');
  }
  return context;
};
