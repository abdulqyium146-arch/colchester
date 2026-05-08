export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  description: string;
  price: string;
  features?: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service: string;
  verified: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: number;
  image?: string;
  keywords?: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  location: string;
  service: string;
  summary: string;
  challenge: string;
  solution: string;
  result: string;
  date: string;
}

export interface AreaPage {
  slug: string;
  name: string;
  county: string;
  distance: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}
