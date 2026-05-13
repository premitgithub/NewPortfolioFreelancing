export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  featured?: boolean;
  metrics?: string[];
  futureEnhancements?: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  category: 'Programming Languages' | 'Backend Development' | 'Frontend Development' | 'Databases' | 'Software Testing' | 'Authentication & Security' | 'Tools & Platforms' | 'Concepts';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  points: string[];
}

export interface Achievement {
  title: string;
  value: string;
  label: string;
}

export interface Certification {
  title: string;
  issuer: string;
  link?: string;
}
