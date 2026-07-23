export const PORTFOLIO_DATA = {
  personal: {
    name: "Velocity F1",
    title: "Formula 1 Experience",
    tagline: "Built for speed, precision, and digital performance",
    bio: "A race-inspired digital experience that blends high-performance design with modern frontend craftsmanship.",
    location: "Global",
    email: "hello@velocityf1.com",
    phone: "+1 (555) 123-4567",
  },

  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: "Linkedin",
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: "Twitter",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: "Mail",
    },
  ],

  skills: {
    fullStack: [
      { name: "React", level: 95, icon: "⚛️" },
      { name: "Next.js", level: 95, icon: "▲" },
      { name: "Node.js", level: 90, icon: "⬢" },
      { name: "Express", level: 90, icon: "🚀" },
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "SQL", level: 85, icon: "🗄️" },
      { name: "TypeScript", level: 90, icon: "🔷" },
      { name: "TailwindCSS", level: 95, icon: "🎨" },
    ],
    datascience: [
      { name: "Python", level: 90, icon: "🐍" },
      { name: "Pandas", level: 85, icon: "📊" },
      { name: "NumPy", level: 85, icon: "🔢" },
      { name: "Matplotlib", level: 80, icon: "📈" },
      { name: "Scikit-Learn", level: 85, icon: "🤖" },
      { name: "Data Analysis", level: 90, icon: "🔍" },
    ],
    design: [
      { name: "Figma", level: 85, icon: "🎯" },
      { name: "UI/UX Design", level: 85, icon: "✨" },
      { name: "Creative Design", level: 80, icon: "🎨" },
      { name: "Prototyping", level: 80, icon: "🔨" },
    ],
    tools: [
      { name: "Git", level: 90, icon: "🌳" },
      { name: "GitHub", level: 90, icon: "🐙" },
      { name: "VS Code", level: 95, icon: "💻" },
      { name: "Docker", level: 75, icon: "🐳" },
    ],
  },

  experience: [
    {
      id: 1,
      role: "Full Stack Developer",
      company: "Tech Company XYZ",
      period: "2024 - Present",
      description: "Building scalable web applications",
      achievements: [
        "Developed React components with 95+ Lighthouse score",
        "Reduced load time by 40% through optimization",
        "Mentored 2 junior developers",
      ],
    },
    {
      id: 2,
      role: "Data Science Intern",
      company: "Analytics Firm",
      period: "2023 - 2024",
      description: "Worked on machine learning projects",
      achievements: [
        "Built ML model achieving 92% accuracy",
        "Created automated data pipeline",
        "Presented insights to 50+ stakeholders",
      ],
    },
    {
      id: 3,
      role: "Hackathon Winner",
      company: "Multiple Hackathons",
      period: "2023",
      description: "Built innovative solutions",
      achievements: [
        "Won 3 hackathons in 2023",
        "Built full-stack applications in 24-48 hours",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "INO VEDA",
      description: "Rural healthcare platform connecting doctors with remote areas",
      longDescription:
        "A comprehensive healthcare platform that bridges the gap between rural communities and medical professionals. Features real-time consultation, prescription management, and health records.",
      image: "/projects/ino-veda.png",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Firebase"],
      github: "https://github.com",
      live: "https://ino-veda.com",
      featured: true,
      stats: {
        users: "5000+",
        consultations: "10000+",
      },
    },
    {
      id: 2,
      title: "Music Tester AI",
      description: "AI-powered music recommendation system",
      longDescription:
        "Machine learning system that analyzes music preferences and recommends personalized playlists using collaborative filtering and content-based algorithms.",
      image: "/projects/music-ai.png",
      category: "Data Science",
      technologies: ["Python", "Librosa", "TensorFlow", "Flask", "React"],
      github: "https://github.com",
      live: "https://music-ai.com",
      featured: true,
      stats: {
        accuracy: "92%",
        recommendations: "1000+",
      },
    },
    {
      id: 3,
      title: "Smart Farming Support System",
      description: "ML-based crop recommendation and weather prediction",
      longDescription:
        "Intelligent system that helps farmers optimize crop selection based on soil conditions, weather patterns, and historical data using machine learning models.",
      image: "/projects/smart-farming.png",
      category: "Machine Learning",
      technologies: ["Python", "Random Forest", "Pandas", "NumPy", "React"],
      github: "https://github.com",
      live: "https://smart-farming.com",
      featured: true,
      stats: {
        farmers: "2000+",
        accuracy: "88%",
      },
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      category: "Full Stack",
      technologies: ["Next.js", "Express", "MongoDB", "Stripe"],
      github: "https://github.com",
      featured: false,
    },
    {
      id: 5,
      title: "Data Dashboard",
      description: "Interactive data visualization dashboard",
      category: "Data Analytics",
      technologies: ["React", "Recharts", "Python", "PostgreSQL"],
      github: "https://github.com",
      featured: false,
    },
    {
      id: 6,
      title: "Mobile App Design System",
      description: "Complete design system for iOS and Android",
      category: "UI/UX",
      technologies: ["Figma", "Adobe XD", "Design System"],
      featured: false,
    },
  ],

  stats: {
    projectsBuilt: 15,
    technologiesUsed: 25,
    hackathonsParticipated: 8,
    hackathonsWon: 3,
    certifications: 5,
    contributions: "250+",
  },

  timeline: [
    {
      year: 2020,
      title: "Started Learning to Code",
      description: "Began my journey with Python and web development basics",
    },
    {
      year: 2021,
      title: "First Full-Stack Project",
      description: "Built my first complete web application",
    },
    {
      year: 2022,
      title: "Explored Data Science",
      description: "Dive into machine learning and data analytics",
    },
    {
      year: 2023,
      title: "Won Multiple Hackathons",
      description: "Developed innovative solutions under time pressure",
    },
    {
      year: 2024,
      title: "Professional Experience",
      description: "Started working as a Full Stack Developer",
    },
  ],
};

export const TECH_CATEGORIES = {
  frontend: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"],
  datascience: ["Python", "Pandas", "NumPy", "Scikit-Learn", "TensorFlow"],
  tools: ["Git", "GitHub", "VS Code", "Figma", "Docker"],
};

export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const DESIGN_TOKENS = {
  colors: {
    primary: "#10b981", // Emerald
    secondary: "#a855f7", // Violet
    accent: "#8b5cf6",
    background: "#000000",
    surface: "#18181b",
    text: {
      primary: "#fafafa",
      secondary: "#a1a1aa",
      tertiary: "#71717a",
    },
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },
  animations: {
    duration: {
      fast: "200ms",
      default: "300ms",
      slow: "500ms",
    },
    easing: {
      ease: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      easeIn: "cubic-bezier(0.42, 0, 1, 1)",
      easeOut: "cubic-bezier(0, 0, 0.58, 1)",
    },
  },
};
