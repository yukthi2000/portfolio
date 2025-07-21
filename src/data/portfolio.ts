// src/data/portfolio.ts
import { Project, Publication, Article, TimelineItem, Testimonial, Skill } from '../../types';

export const personalInfo = {
  name: "John Doe",
  title: "Full Stack Software Engineer",
  tagline: "Building innovative solutions with modern technologies",
  bio: "Passionate software engineer with 5+ years of experience in full-stack development. I love creating efficient, scalable solutions and contributing to open-source projects. Currently focused on React, Node.js, and cloud technologies.",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  resumeUrl: "/resume.pdf",
  social: {
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    twitter: "https://twitter.com/johndoe",
    medium: "https://medium.com/@johndoe"
  }
};

export const skills: Skill[] = [
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Node.js", level: 85, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "AWS", level: 75, category: "tools" },
  { name: "Docker", level: 80, category: "tools" },
  { name: "GraphQL", level: 70, category: "backend" },
  { name: "MongoDB", level: 85, category: "backend" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    longDescription: "A comprehensive e-commerce platform built with modern technologies. Features include user authentication, product catalog, shopping cart, payment integration, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800"
    ],
    liveDemo: "https://demo.example.com",
    github: "https://github.com/johndoe/ecommerce",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    longDescription: "A real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.",
    techStack: ["React", "Socket.io", "Express", "PostgreSQL"],
    images: [
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800"
    ],
    liveDemo: "https://tasks.example.com",
    github: "https://github.com/johndoe/taskapp",
    featured: true
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Beautiful weather app with forecasts and maps",
    longDescription: "An elegant weather dashboard featuring current conditions, 7-day forecasts, interactive maps, and location-based weather alerts.",
    techStack: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
    images: [
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800"
    ],
    liveDemo: "https://weather.example.com",
    github: "https://github.com/johndoe/weather",
    featured: false
  }
];

export const publications: Publication[] = [
  {
    id: "1",
    title: "Scalable Microservices Architecture for Modern Web Applications",
    venue: "IEEE Software Engineering Conference",
    year: 2023,
    authors: ["John Doe", "Jane Smith", "Bob Johnson"],
    abstract: "This paper presents a novel approach to designing scalable microservices architectures that can handle high-traffic web applications while maintaining system reliability and performance.",
    pdfUrl: "/papers/microservices-2023.pdf",
    doiUrl: "https://doi.org/10.1109/example.2023"
  },
  {
    id: "2",
    title: "Machine Learning Approaches to Code Review Automation",
    venue: "ACM Transactions on Software Engineering",
    year: 2022,
    authors: ["John Doe", "Alice Brown"],
    abstract: "We explore the application of machine learning techniques to automate code review processes, improving developer productivity and code quality.",
    pdfUrl: "/papers/ml-code-review-2022.pdf",
    doiUrl: "https://doi.org/10.1145/example.2022"
  }
];

export const articles: Article[] = [
  {
    id: "1",
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for structuring and scaling React applications for enterprise-level projects.",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    publishedDate: "2023-10-15",
    readTime: "8 min read",
    url: "https://medium.com/@johndoe/building-scalable-react-applications"
  },
  {
    id: "2",
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies that will shape the future of web development.",
    coverImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800",
    publishedDate: "2023-09-22",
    readTime: "12 min read",
    url: "https://medium.com/@johndoe/future-of-web-development"
  }
];

export const timeline: TimelineItem[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    organization: "Tech Corp",
    period: "2022 - Present",
    description: "Leading a team of 5 developers, architecting scalable solutions, and mentoring junior developers.",
    type: "work"
  },
  {
    id: "2",
    title: "Software Engineer",
    organization: "StartupXYZ",
    period: "2020 - 2022",
    description: "Developed full-stack applications using React and Node.js, implemented CI/CD pipelines.",
    type: "work"
  },
  {
    id: "3",
    title: "Master's in Computer Science",
    organization: "University of Technology",
    period: "2018 - 2020",
    description: "Specialized in Software Engineering and Machine Learning. GPA: 3.8/4.0",
    type: "education"
  },
  {
    id: "4",
    title: "Bachelor's in Computer Science",
    organization: "State University",
    period: "2014 - 2018",
    description: "Foundation in computer science fundamentals, algorithms, and data structures.",
    type: "education"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Engineering Manager",
    company: "Tech Corp",
    content: "John is an exceptional developer who consistently delivers high-quality code. His ability to solve complex problems and mentor others makes him invaluable to any team.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150"
  },
  {
    id: "2",
    name: "Mike Chen",
    role: "CTO",
    company: "StartupXYZ",
    content: "Working with John was a pleasure. He has a deep understanding of modern web technologies and always goes above and beyond to deliver exceptional results.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
  },
  {
    id: "3",
    name: "Dr. Emily Davis",
    role: "Professor",
    company: "University of Technology",
    content: "John was one of my most dedicated students. His research contributions and technical skills are outstanding, and I'm confident he'll continue to excel in his career.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
  }
];