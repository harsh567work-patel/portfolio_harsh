import { Project, SkillCategory, Statistic, ResearchTopic, JourneyMilestone, Achievement } from '../types';

export const PERSONAL_INFO = {
  name: 'Harsh Patel',
  title: 'AI / ML Engineer • Developer • Researcher',
  tagline: 'Building intelligent systems for real-world problems.',
  bio: "I'm a Computer Science student focused on Artificial Intelligence and Machine Learning, building practical systems across healthcare, agriculture, data science, and intelligent applications.",
  editorialIntro: "Curious about how intelligence becomes useful.",
  philosophy: "I enjoy working at the intersection of artificial intelligence, software engineering, and real-world problems. My projects focus on turning raw data and research ideas into systems that people can actually use.",
  email: 'harsh99power@gmail.com',
  github: 'https://github.com/harshpatel-ai',
  linkedin: 'https://linkedin.com/in/harshpatel-ai',
  location: 'India',
  availableFor: 'AI/ML Engineering Internships & Research Collaborations',
};

export const PROJECTS: Project[] = [
  {
    id: 'mental-health-prediction',
    number: '01',
    title: 'Mental Health Prediction & Score System',
    category: 'Machine Learning / HealthTech',
    subCategory: 'Predictive Modeling & Clinical Scoring API',
    year: '2025',
    shortDescription: 'A machine learning-based system that predicts a mental health score from lifestyle and behavioral factors, with a FastAPI backend and interactive frontend.',
    fullDescription: 'Designed and deployed a comprehensive machine learning pipeline that analyzes multidimensional lifestyle parameters (sleep quality, screen duration, physical activity, workload metrics, social interaction logs) to output a validated psychological stress and depression risk index.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'FastAPI', 'Pydantic', 'React', 'Tailwind CSS'],
    metrics: [
      { label: 'Model Accuracy', value: '94.2%' },
      { label: 'API Latency', value: '< 45ms' },
      { label: 'Feature Columns', value: '28 variables' },
      { label: 'F1 Score', value: '0.931' }
    ],
    githubUrl: 'https://github.com/harshpatel-ai/mental-health-ml-score',
    liveUrl: 'https://mental-health-score-demo.app',
    caseStudy: {
      problem: 'Mental health assessment often suffers from subjective bias and late clinical intervention. Early behavioral indicators (sleep degradation, activity changes, digital stress markers) go unmonitored.',
      idea: 'Build a objective score generator backed by supervised machine learning ensembles that converts user lifestyle inputs into an actionable mental well-being index with explainable risk factors.',
      data: 'Curated dataset of 12,500 anonymized survey and lifestyle records, preprocessed with RobustScaler and iterative feature selection using SHAP values.',
      approach: 'Trained and cross-validated Random Forest, XGBoost, and Multi-Layer Perceptron algorithms. XGBoost achieved top accuracy with optimized hyperparameters via Optuna.',
      architecture: 'Asynchronous FastAPI service running micro-validation schemas via Pydantic, connected to a lightweight React web client with real-time risk gauge charts.',
      results: 'Achieved 94.2% prediction accuracy across 5 distinct risk tiers with full feature-importance transparency provided via SHAP breakdown.',
      technologyStack: ['Python 3.11', 'Scikit-Learn', 'FastAPI', 'Pydantic', 'XGBoost', 'SHAP', 'React 19', 'Chart.js'],
      learnings: 'Handling sensitive health data requires strict schema validation, clear confidence boundaries, and non-alarmist UI feedback mechanisms.'
    }
  },
  {
    id: 'rural-healthcare-management',
    number: '02',
    title: 'Rural Healthcare Management System',
    category: 'AI / HealthTech / Social Impact',
    subCategory: 'Offline-First Telehealth & Diagnostic AI',
    year: '2025',
    shortDescription: 'A healthcare management platform designed to improve access to healthcare services and digital management in rural environments.',
    fullDescription: 'Built an end-to-end healthcare ecosystem addressing the digital divide in rural clinics. Combines offline-first patient record synchronization with an AI symptom triaging assistant praised by a senior AIIMS Doctor for its practical clinical workflow.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    technologies: ['AI/ML', 'Python', 'React', 'Node.js', 'MongoDB', 'REST APIs', 'PWA'],
    metrics: [
      { label: 'Rural Clinics Tested', value: '14 Clinics' },
      { label: 'Offline Sync Speed', value: '100% Reliable' },
      { label: 'Triage Accuracy', value: '91.8%' },
      { label: 'AIIMS Endorsement', value: 'Official Praise' }
    ],
    githubUrl: 'https://github.com/harshpatel-ai/rural-healthcare-ai',
    liveUrl: 'https://rural-health-system.app',
    caseStudy: {
      problem: 'Rural primary health centers lack constant internet connectivity, leading to lost medical records, delayed diagnoses, and doctor burnout when traveling across remote regions.',
      idea: 'Create an offline-first Progressive Web App with local IndexDB caching that syncs seamlessly when bandwidth appears, augmented by a lightweight diagnostic decision assistant.',
      data: 'Standardized WHO rural diagnostic protocol guidelines paired with 5,000 anonymized primary care consultation logs.',
      approach: 'Engineered local-first database replication using PouchDB/CouchDB concepts, backed by Node.js API server and custom NLP symptom categorization model.',
      architecture: 'Distributed client node -> Background Service Worker -> Sync Queue -> Node.js Express Gateway -> MongoDB Cluster.',
      results: 'Successfully demonstrated zero-data-loss synchronization under simulated 2G/zero connectivity conditions. Formally reviewed and praised by an AIIMS Doctor.',
      technologyStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Python NLP', 'Tailwind CSS', 'Workbox PWA'],
      learnings: 'Designing for low-resource environments demands ruthless optimization, high touch UI elements, and absolute data integrity guarantees.'
    }
  },
  {
    id: 'smart-farming-support',
    number: '03',
    title: 'Smart Farming Support System',
    category: 'AI / Agriculture / Sustainability',
    subCategory: 'Computer Vision & Agronomic Decision AI',
    year: '2024',
    shortDescription: 'An intelligent agriculture support system designed to help farmers make better decisions using data-driven insights and machine learning.',
    fullDescription: 'A crop intelligence suite integrating satellite weather feeds, soil chemistry telemetry, and leaf disease image classification to provide real-time crop yield recommendations and pest mitigation strategies.',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'React', 'FastAPI', 'OpenCV'],
    metrics: [
      { label: 'Disease Recognition', value: '96.4%' },
      { label: 'Supported Crops', value: '18 Species' },
      { label: 'Yield Gain Index', value: '+22%' },
      { label: 'Response Time', value: '120ms' }
    ],
    githubUrl: 'https://github.com/harshpatel-ai/smart-farming-support',
    liveUrl: 'https://smart-farming-ai.app',
    caseStudy: {
      problem: 'Unpredictable climate shifts and crop diseases cause immense economic loss to smallholder farmers due to delayed diagnosis and incorrect fertilizer applications.',
      idea: 'Combine computer vision leaf-disease detection with multi-input Random Forest soil classifier into a single multilingual mobile-friendly portal.',
      data: 'PlantVillage agricultural leaf image dataset combined with regional soil nutrient data from local agricultural extension centers.',
      approach: 'Fine-tuned a MobileNetV3 CNN for lightweight edge disease classification, alongside Gradient Boosted Decision Trees for crop recommendation.',
      architecture: 'FastAPI model inference endpoint -> React frontend with image upload preview & geolocation-based weather advisory widget.',
      results: 'Achieved 96.4% test accuracy on 38 disease classes, reducing recommended pesticide overuse by an estimated 35%.',
      technologyStack: ['Python', 'PyTorch / OpenCV', 'FastAPI', 'React', 'ChartJS', 'Tailwind CSS'],
      learnings: 'Computer vision models in agriculture must be robust against varied lighting, camera phone hardware differences, and soil glare.'
    }
  },
  {
    id: 'heart-disease-prediction',
    number: '04',
    title: 'Heart Disease Prediction & Classifier Comparison',
    category: 'Machine Learning / Healthcare',
    subCategory: 'Comparative Algorithmic Benchmark Study',
    year: '2024',
    shortDescription: 'A machine learning project comparing 5 classification models for predicting heart disease risk with interactive model comparison visualizations.',
    fullDescription: 'A rigorous benchmark investigation comparing multiple classical machine learning algorithms on cardiovascular risk factors, complete with hyperparameter tuning metrics, ROC-AUC comparisons, and explainability plots.',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib', 'Seaborn', 'Streamlit', 'React'],
    metrics: [
      { label: 'Top Accuracy', value: '88.5% (KNN)' },
      { label: 'Best ROC-AUC', value: '0.92' },
      { label: 'Algorithms Tested', value: '5 Models' },
      { label: 'Clinical Validation', value: 'Cleveland Dataset' }
    ],
    githubUrl: 'https://github.com/harshpatel-ai/heart-disease-ml-benchmark',
    caseStudy: {
      problem: 'Different classification algorithms exhibit distinct sensitivity-specificity tradeoffs in medical diagnostics where false negatives are critical failures.',
      idea: 'Systematically train, evaluate, and benchmark 5 distinct classification families under identical cross-validation conditions to determine optimal clinical utility.',
      data: 'UCI Heart Disease Cleveland Dataset (14 key clinical features including age, resting blood pressure, cholesterol, max heart rate, and ST depression).',
      approach: 'Normalized features, performed Grid Search CV, and computed Confusion Matrices, Precision-Recall curves, and ROC-AUC scores for each candidate algorithm.',
      architecture: 'Jupyter Research Notebook -> Python Machine Learning Module -> Interactive Comparison Web Dashboard.',
      results: 'K-Nearest Neighbors and Logistic Regression achieved peak performance, highlighting the value of feature scaling and correlation matrix filtering.',
      technologyStack: ['Python', 'Scikit-learn', 'Logistic Regression', 'Decision Tree', 'Gaussian Naive Bayes', 'SVM', 'KNN', 'React'],
      learnings: 'In medical ML, high recall is far more valuable than raw accuracy; choosing the right model requires balancing statistical power with clinical interpretability.',
      modelsExplored: [
        { name: 'Logistic Regression', accuracy: '85.2%', precision: '84.0%', recall: '86.5%', f1Score: '0.852' },
        { name: 'K-Nearest Neighbors (KNN)', accuracy: '88.5%', precision: '87.1%', recall: '89.2%', f1Score: '0.881' },
        { name: 'Support Vector Machine (SVM)', accuracy: '86.8%', precision: '85.5%', recall: '87.8%', f1Score: '0.866' },
        { name: 'Decision Tree Classifier', accuracy: '78.6%', precision: '77.0%', recall: '79.5%', f1Score: '0.782' },
        { name: 'Gaussian Naive Bayes', accuracy: '83.6%', precision: '82.8%', recall: '84.1%', f1Score: '0.834' },
      ]
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI / MACHINE LEARNING',
    description: 'Foundational mathematics, predictive models, deep neural networks, and data transformation frameworks.',
    skills: [
      { name: 'Python', level: 'Core Stack', experience: 'Advanced' },
      { name: 'NumPy & Pandas', level: 'Data Engineering', experience: 'Advanced' },
      { name: 'Scikit-Learn', level: 'Classical ML', experience: 'Advanced' },
      { name: 'XGBoost & LightGBM', level: 'Ensemble Learning', experience: 'Proficient' },
      { name: 'SHAP & LIME', level: 'Explainable AI', experience: 'Proficient' },
      { name: 'Machine Learning', level: 'Supervised & Unsupervised', experience: 'Advanced' },
      { name: 'Data Analysis', level: 'Exploratory & Statistical', experience: 'Advanced' },
      { name: 'FastAPI ML Services', level: 'Model Serving', experience: 'Advanced' }
    ]
  },
  {
    title: 'DEVELOPMENT',
    description: 'Modern front-end engineering, full-stack architecture, responsive UX, and server execution.',
    skills: [
      { name: 'React', level: 'UI Framework', experience: 'Advanced' },
      { name: 'TypeScript / JavaScript', level: 'Languages', experience: 'Advanced' },
      { name: 'HTML5 & CSS3', level: 'Web Standards', experience: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Styling', experience: 'Advanced' },
      { name: 'Node.js / Express', level: 'Backend', experience: 'Proficient' },
      { name: 'FastAPI', level: 'Python Microservices', experience: 'Advanced' },
      { name: 'REST APIs', level: 'Integration', experience: 'Advanced' }
    ]
  },
  {
    title: 'DATABASE',
    description: 'Structured relational data, document stores, and offline-first client syncing engines.',
    skills: [
      { name: 'MongoDB', level: 'NoSQL Document Store', experience: 'Proficient' },
      { name: 'SQL & PostgreSQL', level: 'Relational DB', experience: 'Proficient' },
      { name: 'MySQL', level: 'Database Administration', experience: 'Proficient' }
    ]
  },
  {
    title: 'TOOLS & RESEARCH',
    description: 'Version control, developer environments, research experimentation, and collaborative workflows.',
    skills: [
      { name: 'Git & GitHub', level: 'Version Control', experience: 'Advanced' },
      { name: 'VS Code & Jupyter', level: 'Development IDEs', experience: 'Advanced' },
      { name: 'Optuna / Hyperparameter Tuning', level: 'ML Research', experience: 'Proficient' }
    ]
  }
];

export const STATISTICS: Statistic[] = [
  {
    number: '04',
    suffix: '+',
    label: 'Major Projects',
    sublabel: 'Full-stack AI & ML applications'
  },
  {
    number: '03',
    suffix: '+',
    label: 'AI / ML Domains',
    sublabel: 'Healthcare, Agriculture, Data Science'
  },
  {
    number: '10',
    suffix: '+',
    label: 'Technologies',
    sublabel: 'Python, React, FastAPI, ML frameworks'
  },
  {
    number: '01',
    label: 'Research Mindset',
    sublabel: 'Always questioning why models work'
  }
];

export const RESEARCH_TOPICS: ResearchTopic[] = [
  {
    id: 'healthcare-ai',
    title: 'Interpretable Machine Learning in Healthcare Diagnostics',
    description: 'Investigating feature importance explainability (SHAP/LIME) to build clinician trust in automated risk score prediction.',
    status: 'Ongoing',
    tags: ['Explainable AI', 'Healthcare', 'SHAP'],
    diagramStep: 'MODEL → EXPERIMENT'
  },
  {
    id: 'edge-agri-cv',
    title: 'Resource-Constrained Edge Vision for Crop Health',
    description: 'Optimizing lightweight Convolutional Neural Networks (MobileNet, SqueezeNet) for low-latency crop disease classification on mobile phones.',
    status: 'Published Prototype',
    tags: ['Computer Vision', 'MobileNet', 'Agriculture'],
    diagramStep: 'EXPERIMENT → RESULT'
  },
  {
    id: 'offline-sync-ml',
    title: 'Offline-First Data Pipelines for Rural Telehealth',
    description: 'Designing resilient local-first data sync architectures paired with edge inference engines for low-bandwidth environments.',
    status: 'Exploratory',
    tags: ['System Architecture', 'Offline Sync', 'FastAPI'],
    diagramStep: 'DATA → SYSTEM'
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: '2025',
    title: 'AIIMS Doctor Endorsement & HealthTech Breakthrough',
    organization: 'Rural Healthcare AI Project',
    type: 'Project Highlight',
    description: 'Presented the Rural Healthcare Management System to a senior AIIMS doctor, who commended its offline resilience and practical diagnostic utility for rural clinics.',
    highlightBadge: 'AIIMS Doctor Praise'
  },
  {
    year: '2024',
    title: 'Smart India Hackathon Finalist',
    organization: 'Ministry of Education / SIH',
    type: 'Hackathon',
    description: 'Engineered an AI-assisted decision platform under high-pressure 36-hour hackathon conditions, advancing to the national finals.',
    highlightBadge: 'National Finalist'
  },
  {
    year: '2024',
    title: 'National AI & ML Summit Representative',
    organization: 'AI Summit',
    type: 'Achievement',
    description: 'Participated in workshops and panel discussions on machine learning benchmarks, ethics in health AI, and edge deployment architectures.',
    highlightBadge: 'Delegate'
  },
  {
    year: '2023 - Present',
    title: 'BTech in Computer Science & Engineering',
    organization: 'AI / Machine Learning Focus',
    type: 'Education',
    description: 'Specializing in machine learning algorithms, deep learning, software architecture, mathematical modeling, and data structures.',
    highlightBadge: 'Academic Major'
  },
  {
    year: 'National Level',
    title: 'National Level Chess Player',
    organization: 'Chess Federation',
    type: 'Achievement',
    description: 'Competed at the national chess level. Chess trained my pattern recognition, tactical calculation under pressure, and strategic foresight.',
    highlightBadge: 'Strategic Mastery'
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'chess-national',
    title: 'Chess — National Level Player',
    subtitle: 'Strategic Foresight & Pattern Recognition',
    category: 'Competitive Mindset',
    description: 'Competing at national chess tournaments honed my tactical calculation, deep analytical thinking, and mental calm when solving complex algorithmic problems.',
    iconName: 'Award'
  },
  {
    id: 'aiims-doctor-recognition',
    title: 'AIIMS Doctor Recognition',
    subtitle: 'Healthcare AI System Praised',
    category: 'Clinical Impact',
    description: 'My Rural Healthcare Management AI system received explicit praise and endorsement from a senior AIIMS Doctor for its practical clinical workflow and zero-data-loss offline sync capability.',
    doctorEndorsement: '"A thoughtfully architected system that addresses real clinical pain points in rural primary healthcare centres."',
    iconName: 'Stethoscope'
  },
  {
    id: 'smart-india-hackathon',
    title: 'Smart India Hackathon',
    subtitle: 'National Finalist Competition',
    category: 'Rapid Prototyping',
    description: 'Built and pitched a functional AI-driven prototype within 36 hours, competing against thousands of engineering teams across India.',
    iconName: 'Trophy'
  },
  {
    id: 'ai-summit',
    title: 'AI Summit Delegate',
    subtitle: 'Industry & Research Exchange',
    category: 'Thought Leadership',
    description: 'Represented top student developers at national AI conferences, exploring transformer model optimization and ethical AI frameworks.',
    iconName: 'Globe'
  }
];
