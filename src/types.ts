export type PageType = 'about' | 'projects';

export type ProjectCategory = 'all' | 'data' | 'ux-ui' | 'dev';

export interface AcademicProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'data' | 'ux-ui' | 'dev';
  categoryLabel: string;
  summary: string;
  description: string;
  image?: string | null;
  technologies: string[];
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  figmaUrl?: string;
  featured?: boolean;
}

export interface ContactInfo {
  name: string;
  tagline: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  secondaryEmail?: string;
  linkedin: string;
  github: string;
  whatsappUrl: string;
  location: string;
}
