// src/types/index.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  images: string[];
  liveDemo?: string;
  github?: string;
  featured: boolean;
}

export interface Publication {
  id: string;
  title: string;
  venue: string;
  year: number;
  authors: string[];
  abstract: string;
  pdfUrl?: string;
  doiUrl?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedDate: string;
  readTime: string;
  url: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'work' | 'achievement';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}