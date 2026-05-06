/** Shorter “hero” service set from the legacy Services section. */
export type ShowcaseIconName = 'Code' | 'Palette' | 'Globe' | 'FileText';

export type ServiceShowcaseItem = {
  icon: ShowcaseIconName;
  title: string;
  description: string;
  details: string;
  color: string;
};

export const servicesShowcase: ServiceShowcaseItem[] = [
  {
    icon: 'Code',
    title: 'React Development',
    description:
      'Modern, scalable React applications with clean architecture',
    details:
      'Full-stack React development using the latest technologies including Next.js, TypeScript, and modern state management solutions. Focus on performance, accessibility, and maintainable code.',
    color: '#64FFDA',
  },
  {
    icon: 'Palette',
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive interfaces that convert visitors into customers',
    details:
      'Design-driven development with attention to user experience, micro-interactions, and visual hierarchy. From wireframes to pixel-perfect implementations.',
    color: '#FF6B6B',
  },
  {
    icon: 'Globe',
    title: 'Web Development',
    description:
      'Fast, responsive websites optimized for performance and SEO',
    details:
      'Complete web solutions including responsive design, performance optimization, SEO implementation, and cross-browser compatibility.',
    color: '#9B59B6',
  },
  {
    icon: 'FileText',
    title: 'HTML Templates',
    description: 'Premium templates and components for rapid development',
    details:
      'Handcrafted HTML/CSS templates and React component libraries that save development time while maintaining high quality standards.',
    color: '#F39C12',
  },
];
