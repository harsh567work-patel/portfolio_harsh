export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  category: "Full Stack" | "Data Science" | "Machine Learning" | "UI/UX" | "Data Analytics" | "Creative Work";
  technologies: string[];
  github: string;
  live?: string;
  featured: boolean;
  stats?: {
    [key: string]: string | number;
  };
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface AnimationVariants {
  [key: string]: {
    initial: any;
    animate: any;
    transition?: any;
  };
}
