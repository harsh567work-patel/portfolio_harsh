export type ThemeMode = 'light' | 'dark';

export interface CaseStudySection {
  title: string;
  subtitle?: string;
  content: string;
  highlights?: string[];
  codeSnippet?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  subCategory: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  caseStudy: {
    problem: string;
    idea: string;
    data: string;
    approach: string;
    architecture: string;
    results: string;
    technologyStack: string[];
    learnings: string;
    modelsExplored?: { name: string; accuracy: string; precision: string; recall: string; f1Score: string }[];
  };
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. 'Advanced', 'Proficient', 'Core'
    experience: string;
    icon?: string;
  }[];
}

export interface Statistic {
  number: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

export interface ResearchTopic {
  id: string;
  title: string;
  description: string;
  status: 'Ongoing' | 'Exploratory' | 'Published Prototype';
  tags: string[];
  diagramStep: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  organization: string;
  type: 'Education' | 'Hackathon' | 'Achievement' | 'Project Highlight';
  description: string;
  highlightBadge?: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  doctorEndorsement?: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface AppStateContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  selectedProjectCaseStudy: Project | null;
  openCaseStudy: (project: Project) => void;
  closeCaseStudy: () => void;
  isContactModalOpen: boolean;
  openContactModal: () => void;
  closeContactModal: () => void;
}
