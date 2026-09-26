export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  type: "degree" | "postgrad" | "course";
}

export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectDecision {
  decision: string;
  motive: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  status: string;
  accent: "emerald" | "sky" | "violet" | "amber";
  summary: string;
  problem: string;
  solution: string;
  architecture: string[];
  stack: { category: string; items: string[] }[];
  features: ProjectFeature[];
  decisions: ProjectDecision[];
  challenges: string[];
  role: string;
  results?: string[];
  github: string;
  demo?: string;
  updatedAt: string;
  language: string;
  image?: { src: string; alt: string; caption: string };
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface AwardItem {
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
