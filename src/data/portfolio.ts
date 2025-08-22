// public/data/portfolio.ts
// Personalized data for Yukthi Hettiarachchi

export const personalInfo = {
  name: 'Yukthi Hettiarachchi',
  title: 'Undergraduate • Software Engineer • AI/ML Enthusiast',
  tagline:
    'Passionate and adaptable team player exploring the evolving world of technology — eager to leverage ML and full‑stack skills to build useful, reliable systems.',
  bio:
    `A passionate, enthusiastic undergraduate excited to embrace new opportunities and overcome obstacles. I am a responsible team player who adapts quickly to new technologies and focuses on productive targets. With a strong interest in AI/ML and software engineering, I enjoy building data‑driven and user‑centric solutions.`,
  email: 'yukthihettiarachchissck@gmail.com',
  phone: '+94 75 293 8210',
  location: 'Kandy, Sri Lanka',
  // Use a public link for your resume. The Google Drive link from your CV is used here.
  resumeUrl:
    'https://drive.google.com/file/d/1Gqc1eyk9b6GO96GXYzOePg7i5ntMTF92/view?usp=sharing',
  social: {
    github: 'https://github.com/yukthi2000',
    linkedin:
      'https://www.linkedin.com/in/yukthi-hettiarachchi-bb2a18150',

    medium: 'https://medium.com/@yukthihettiarachchissck',
  },
};

export type Skill = {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'other' | 'Databases & Cloud' | 'programming';
};

export const skills: Skill[] = [
  // Frontend
  { name: 'ReactJS', level: 88, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },
  { name: 'HTML & CSS', level: 92, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'React Native', level: 78, category: 'frontend' },

  // Backend
  { name: 'Spring Boot', level: 82, category: 'backend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'FastAPI', level: 76, category: 'backend' },

  // Databases & Cloud
  { name: 'MySQL', level: 82, category: 'Databases & Cloud' },
  { name: 'PostgreSQL', level: 75, category: 'Databases & Cloud' },
  { name: 'MongoDB', level: 76, category: 'Databases & Cloud' },
  { name: 'AWS', level: 70, category: 'Databases & Cloud' },
  { name: 'Google Cloud', level: 68, category: 'Databases & Cloud' },

  // Tools
  { name: 'Git', level: 86, category: 'tools' },
  { name: 'Figma', level: 78, category: 'tools' },
  { name: 'Trello / ClickUp', level: 80, category: 'tools' },
  { name: 'MS Office', level: 90, category: 'tools' },

  // Programming Languages
  { name: 'Java', level: 82, category: 'programming' },
  { name: 'Python', level: 80, category: 'programming' },
  { name: 'C', level: 70, category: 'programming' },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  images: string[];
  featured?: boolean;
  liveDemo?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    id: 'fraud-surveillance-ml',
    title:
      'Stock Market Surveillance with ML for Fraud Detection (Research)',
    description:
      'Intelligent surveillance system to detect market manipulation patterns using ML over historical and real‑time trading data.',
    longDescription:
      'Designed and prototyped an ML‑driven fraud detection pipeline that ingests historical and live trade streams, engineers behavioral features, and flags suspicious activity for analyst review. Includes comparative modeling, evaluation dashboards, and explainability tooling.',
    techStack: ['Python', 'scikit‑learn', 'XGBoost', 'Pandas', 'NumPy', 'Streamlit'],
    images: [
      '/assets/fyp/msedge_CUjll3glpN.png',
      '/assets/fyp/msedge_FZfdutu9aGN1.png'
    ],
    featured: true,
    github: '',
  },
  {
    id: 'inventory-tracking-av',
    title: 'Inventory Tracking System (AV Enterprises)',
    description:
      'Full‑stack system that digitized inventory operations and minimized manual effort.',
    longDescription:
      'Built a responsive React front‑end and Node.js API with MySQL to manage products, stock, and transactions. Implemented role‑based access, reporting, and deployment to Azure/AWS.',
    techStack: ['ReactJS', 'Node.js', 'MySQL', 'Azure'],
    images: [
      '/assets/av/msedge_1oDgfwqCio.jpg',
      '/assets/av/msedge_EzjX4eAqRJ.png',
      '/assets/av/msedge_LlhuDXp3Ba.png'
    ],
    liveDemo: 'https://asenterprise.shop/',
    github: '',
  },
  {
  id: 'sirikurula-staff',
  title: 'Sirikurula Staff Management System',
  description:
    'Full‑stack rental and accounts management system for a traditional clothing business.',
  longDescription:
    'Developed a complete business management platform to handle customers, orders, accounts, and notifications. Features include overdue payment reminders, revenue tracking, customer profiles, and order dispatch/return monitoring. Built with a responsive React front‑end, Node.js/Express backend, and deployed on Render.',
  techStack: ['ReactJS', 'Node.js', 'Express', 'MongoDB', 'Render'],
  images: [
    '/assets/siri/msedge_qNVlJox8Hi.png',
    '/assets/siri/msedge_PckP4ZEy2s.png',
    '/assets/siri/msedge_EmtgdR1Yy5.png',
    '/assets/siri/msedge_M4Ancm6hOr.png',
    '/assets/siri/msedge_qDAZdNgo4L.png',

  ],
  liveDemo: 'https://sirikirula-staff.onrender.com/',

},
  // {
  //   id: 'travel-planner',
  //   title: 'Travel Planning & Analyzing System',
  //   description:
  //     'Route optimization with weather forecasting and review‑based trip scoring.',
  //   longDescription:
  //     'Developed a planner that minimizes travel distance, aggregates weather insights, and computes overall trip scores from user reviews to support informed decisions.',
  //   techStack: ['ReactJS', 'Node.js', 'MySQL', 'AWS'],
  //   images: [
  //     'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1600&auto=format&fit=crop',
  //   ],
  // },
  {
    id: 'depression-ml',
    title: 'Depression Prediction with ML',
    description:
      'Predictive modeling on demographic and lifestyle factors using modern ML algorithms.',
    longDescription:
      'Explored structured features and built baseline/classical ML models with proper preprocessing, cross‑validation, and feature importance analysis.',
    techStack: [
      'Python',
      'scikit‑learn',
      'XGBoost',
      'LightGBM',
      'CatBoost',
      'Pandas',
      'NumPy',
      'Matplotlib',
    ],
    images: [
      '/assets/mental/msedge_tnd7uvaXx3.png',
      '/assets/mental/msedge_TGOqFPAgfC.png',
      '/assets/mental/msedge_QeKZDloASu.png'
    ],
    liveDemo: 
    'https://huggingface.co/spaces/Yukthi2000/dep'
  },
  {
    id: 'moraspirit-app',
    title: 'MoraSpirit Mobile Application',
    description:
      'Community‑oriented mobile app connecting the university sports ecosystem.',
    longDescription:
      'Contributed to the MoraSpirit Web & Tech pillar app, enabling news, events, and social features for the university sports community.',
    techStack: ['React Native', 'Node.js'],
    images: [
      '/assets/website_head_logo.png',
    ],
  },
  {
    id: 'qa-testing',
    title: 'QA Testing — Library & HR Systems',
    description:
      'API/UI testing with BDD to ensure reliability and regression safety.',
    longDescription:
      'Tested REST endpoints and user flows for a library management system and OrangeHRM using Serenity BDD and Cucumber, documenting defects and acceptance criteria.',
    techStack: ['Serenity BDD', 'Cucumber'],
    images: [
      '/assets/QA/idea64_90yPahxAvE.png',
      '/assets/QA/idea64_SsBDNO6G5U.png'
    ],
  },
];

export type Publication = {
  id: string;
  title: string;
  venue: string;
  year: number;
  authors: string[];
  abstract: string;
  pdfUrl?: string;
  doiUrl?: string;
};

export const publications: Publication[] = [
  {
    id: 'ictis-2025-fraud',
    title:
      'Enhancing Stock Market Surveillance using Machine Learning Algorithms for Fraud Detection',
    venue:
      'Proceedings of the 9th International Conference on Information and Communication Technology for Intelligent Systems (ICTIS 2025), Thailand — Springer',
    year: 2025,
    authors: [
      'Hettiarachchi, D. Y. N. R.',
      'Atugoda, R. R. R. M. A. W. N. T. B.',
      'Batugedara, S. D.',
      'Kulawansa, K. A. Dilini T.',
      'Chandimali, Nipuni',
      'Wijesiriwardana, Chaman',
    ],
    abstract:
      'Presents a machine‑learning pipeline for detecting anomalous and potentially manipulative trading behavior, with emphasis on feature engineering and evaluation.',
  },
  {
    id: 'ictis-2025-npc-ai',
    title:
      'Enhancing Player Experience through Intelligent Non‑Player Character Creation: Role of Artificial Intelligence and Machine Learning',
    venue:
      'Proceedings of the 9th International Conference on Information and Communication Technology for Intelligent Systems (ICTIS 2025), Thailand — Springer',
    year: 2025,
    authors: [
      'Hettiarachchi, D. Y. N. R.',
      'Kulawansa, K. A. Dilini T.',
      'Firdhous, Mohamed Fazil Mohamed',
    ],
    abstract:
      'Explores AI/ML techniques to create adaptive NPC behaviors that improve player engagement and game balance.',
  },
];

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedDate: string; // ISO string
  readTime: string;
  url: string;
};

// Optional: If you want to show Medium posts, add them here later.

export const articles: Article[] = [
  {
    id: 'nextjs-auth-system',
    title: 'Build a Complete Authentication System with Next.js, MongoDB, Tailwind, and TypeScript',
    excerpt: 'End-to-end auth flow with signup/login, JWT via cookies, protected routes, reset password, and email verification.',
    coverImage: '/assets/medium/1_f8PyPZKtQnNWV95f4WDrOg.webp',
    publishedDate: '2024-09-15',
    readTime: '4 min read',
    url: 'https://medium.com/%40yukthihettiarachchissck/build-a-complete-authentication-system-with-next-js-mongodb-tailwind-and-typescript-a0d9cff78b2c',
  },
  {
    id: 'chainlit-human-feedback',
    title: 'Enable Human Feedback in Chainlit Without LITERAL API Key and Save Feedback',
    excerpt: 'Add thumbs-up/down and comment feedback to Chainlit apps using a custom data layer, no external API key required.',
    coverImage: '/assets/medium/0_Y3Pb4DjK0w31Rnzh.webp',
    publishedDate: '2024-05-22',
    readTime: '3 min read',
    url: 'https://medium.com/%40yukthihettiarachchissck/enable-human-feedback-in-chainlit-without-literal-api-key-and-save-feedback-95bfd3a01073',
  },
  {
    id: 'vscode-extension',
    title: 'Let’s build an Extention for Visual Studio Code(VScode)',
    excerpt: 'Step-by-step guide to scaffold, run, and debug a VS Code extension using Yo Code and TypeScript.',
    coverImage: '/assets/medium/1_bQtqiqXcPEO497kBhGdvOQ.webp',
    publishedDate: '2024-03-28',
    readTime: '8 min read',
    url: 'https://medium.com/%40yukthihettiarachchissck/lets-build-an-extention-for-visual-studio-code-vscode-462a6f5c5cd3',
  },
  {
    id: 'huggingface-intro',
    title: 'Unlock the Power of AI: Introduction to Hugging Face',
    excerpt: 'What Hugging Face offers—Model Hub, Datasets, and Spaces—and why it matters for rapid AI prototyping.',
    coverImage: '/assets/medium/1_cQq3Nw2Ek4FuwhMNb-pouw.webp',
    publishedDate: '2024-02-16',
    readTime: '3 min read',
    url: 'https://medium.com/%40yukthihettiarachchissck/unlock-the-power-of-ai-introduction-to-hugging-face-e32c8c01664e',
  },
  {
    id: 'google-maps-react',
    title: 'Getting Started with Google Maps API in React.js',
    excerpt: 'Create a React app, add @react-google-maps/api, load maps, and render markers—with tips on API key setup.',
    coverImage: '/assets/medium/1_kM9X4ezBoxeeHkhAC-rqFA.webp',
    publishedDate: '2023-06-27',
    readTime: '3 min read',
    url: 'https://medium.com/%40yukthihettiarachchissck/getting-started-with-google-maps-api-in-react-js-1390b19d18f0',
  },
  {
    id: 'google-maps-api-key',
    title: 'How to Generate an API Key for Google Maps API',
    excerpt: 'Step-by-step walkthrough in Google Cloud Console to create and restrict a Maps JavaScript API key.',
    coverImage: '/assets/medium/1_DMEPtaZPmIjdwALQSbMcaA.webp',
    publishedDate: '2023-06-27',
    readTime: '3 min read',
    url: 'https://medium.com/%40yukthihettiarachchissck/how-to-generate-an-api-key-for-google-maps-api-46b076f5e3ca',
  },
];

export type Testimonial = {
  content: string;
  avatar: string;
  name: string;
  role: string;
  company: string;
};

// Add real testimonials later to avoid fabricating quotes.
export const testimonials: Testimonial[] = [
  {
    content:
      "I had the pleasure of working with Yukthi during his internship, where he contributed to multiple projects in Rust, Kubernetes, Machine learning and VSCode plugin development. He demonstrated a strong grasp of complex concepts and consistently exceeded my expectations with minimal guidance. I am confident that Yukthi will be a valuable asset to any team he joins in the future, and I highly recommend him for roles in Software engineering or Machine learning.",
    avatar: "/assets/chirath.jfif", // place chirath.jfif in /images/testimonials
    name: "Chirath Bandara Dasanayaka",
    role: "Specialist Engineer - Machine Learning",
    company: "LSEG (London Stock Exchange Group)",
  },
  {
    content:
      "Yukthi, an exceptional undergraduate from the University of Moratuwa, is making waves in the world of software development. During our collaboration on an industrial project, I witnessed firsthand Yukthi's extraordinary talent and drive, which propelled him to become a key member of the development team. From the outset, it was evident that Yukthi possessed a unique ability to understand complex business ideas and transform them into practical technical solutions. His dedication and enthusiasm were palpable as he actively contributed to shaping the project's initial technical details. Yukthi's analytical prowess and attention to detail ensured that our solutions consistently met the exact requirements, making him an invaluable asset. His passion for learning and adaptability allowed him to quickly grasp new technologies and apply them effectively. His collaborative nature and effective communication skills made him a true team player, actively engaging in discussions, offering valuable insights, and supporting his teammates.",
    avatar: "/assets/prasad.jfif", // place prasad.jfif in /images/testimonials
    name: "Prasad Srimal",
    role: "Lead Software Engineer",
    company: "Brand Finance",
  },
];


export type TimelineItem = {
  id: string;
  type: 'work' | 'education' | 'achievement';
  period: string;
  title: string;
  organization: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    id: 'work-lseg-2024',
    type: 'work',
    period: 'Jan 2024 – Jul 2024',
    title: 'Trainee Software Engineer (ML Team)',
    organization: 'LSEG — London Stock Exchange Group',
    description:
      'Worked with ML model training and data pipelines. Built a VS Code extension powered by a domain‑adapted LLM, a React UI + FastAPI chatbot backend, a Streamlit comparison app, and supported DevOps automation.',
  },
  {
    id: 'edu-uom',
    type: 'education',
    period: '2020 – Present',
    title: 'BSc (Hons) in Information Technology — CGPA 3.7',
    organization: 'University of Moratuwa',
    description: 'Coursework across software engineering, networking, and AI/ML.',
  },
  {
    id: 'edu-ccna',
    type: 'education',
    period: '2023 – 2024',
    title: 'Cisco Certified Network Associate (CCNA)',
    organization: 'Cisco Networking Center — UoM',
    description: 'Hands‑on networking fundamentals, routing/switching, and troubleshooting.',
  },
  {
    id: 'ach-coderush',
    type: 'achievement',
    period: '2022',
    title: 'CodeRush — 7th Place',
    organization: 'INTECS, Faculty of IT (UoM)',
    description: 'Placed 7th among competitive teams in a university‑level coding competition.',
  },
  {
    id: 'ach-mastermind',
    type: 'achievement',
    period: 'Dec 2017',
    title: 'ITN ESOFT IT Mastermind — Semi‑Finalist',
    organization: 'Computer Society of Sri Lanka, Esoft Metro Campus & ITN',
    description: 'Reached semi‑finals demonstrating problem‑solving and teamwork.',
  }
];
