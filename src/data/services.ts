/**
 * Lucide icon name (PascalCase) — map to components when rendering, e.g. `icons[name]`.
 */
export type ServiceIconName =
  | 'Globe'
  | 'Smartphone'
  | 'Palette'
  | 'Code'
  | 'FileText'
  | 'Zap'
  | 'User'
  | 'ShoppingCart'
  | 'BarChart3'
  | 'Layers'
  | 'Database'
  | 'Wifi'
  | 'Monitor'
  | 'Tablet'
  | 'Play'
  | 'Search'
  | 'Shield'
  | 'Headphones'
  | 'Bot'
  | 'Settings';

export type ServiceOffering = {
  id: number;
  title: string;
  description: string;
  icon: ServiceIconName;
  color: string;
  details: string;
};

export const services: ServiceOffering[] = [
  {
    id: 1,
    title: 'Landing Pages',
    description: 'Pixel-perfect landing pages that turn visitors into customers',
    icon: 'Globe',
    color: '#64FFDA',
    details: 'Optimized for conversions with A/B testing ready designs',
  },
  {
    id: 2,
    title: 'Business Websites',
    description:
      'Professional corporate websites that establish credibility and drive growth',
    icon: 'Monitor',
    color: '#FF6B6B',
    details: 'SEO-optimized, mobile-first, and performance-focused',
  },
  {
    id: 3,
    title: 'Custom UI Design',
    description:
      'Bespoke user interfaces that blend aesthetics with seamless functionality',
    icon: 'Palette',
    color: '#4ECDC4',
    details: 'Design systems, component libraries, and interactive prototypes',
  },
  {
    id: 4,
    title: 'React Apps',
    description: 'Dynamic, scalable React applications with modern architecture',
    icon: 'Code',
    color: '#FFE66D',
    details:
      'State management, hooks, context API, and performance optimization',
  },
  {
    id: 5,
    title: 'HTML/CSS Templates',
    description:
      'Clean, responsive templates ready for customization and deployment',
    icon: 'FileText',
    color: '#A8E6CF',
    details: 'Cross-browser compatible with modern CSS techniques',
  },
  {
    id: 6,
    title: 'Next.js Projects',
    description:
      'Full-stack Next.js applications with SSR, SSG, and API routes',
    icon: 'Zap',
    color: '#FF8B94',
    details: 'Server-side rendering, static generation, and edge functions',
  },
  {
    id: 7,
    title: 'Portfolio Sites',
    description:
      'Stunning portfolio websites that showcase your work and personality',
    icon: 'User',
    color: '#B4A7D6',
    details: 'Interactive galleries, smooth animations, and personal branding',
  },
  {
    id: 8,
    title: 'E-commerce Frontends',
    description: 'Modern shopping experiences with seamless checkout flows',
    icon: 'ShoppingCart',
    color: '#F7DC6F',
    details: 'Payment integration, cart management, and inventory systems',
  },
  {
    id: 9,
    title: 'Admin Dashboards',
    description:
      'Powerful admin panels with data visualization and management tools',
    icon: 'BarChart3',
    color: '#85C1E9',
    details: 'Charts, tables, user management, and real-time updates',
  },
  {
    id: 10,
    title: 'Fully Custom Sites',
    description:
      'Unique web experiences tailored to your exact vision and requirements',
    icon: 'Layers',
    color: '#F8C471',
    details: 'Custom animations, interactions, and specialized functionality',
  },
  {
    id: 11,
    title: 'CMS Integrations',
    description:
      'Headless CMS solutions for easy content management and updates',
    icon: 'Database',
    color: '#82E0AA',
    details: 'Strapi, Contentful, Sanity, and custom CMS solutions',
  },
  {
    id: 12,
    title: 'Progressive Web Apps',
    description:
      'App-like web experiences with offline capabilities and push notifications',
    icon: 'Wifi',
    color: '#D7BDE2',
    details: 'Service workers, caching strategies, and native app features',
  },
  {
    id: 13,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android',
    icon: 'Smartphone',
    color: '#FF6B94',
    details:
      'React Native, Flutter, and native development with app store deployment',
  },
  {
    id: 14,
    title: 'Hybrid Apps',
    description: 'Cross-platform applications that work seamlessly on all devices',
    icon: 'Tablet',
    color: '#A8E6CF',
    details: 'Ionic, Cordova, and PWA technologies for maximum reach',
  },
  {
    id: 15,
    title: 'App Store Optimization',
    description:
      'Complete app deployment and optimization for maximum visibility',
    icon: 'Play',
    color: '#FFB347',
    details:
      'App store listings, screenshots, keywords, and performance monitoring',
  },
  {
    id: 16,
    title: 'SEO & Digital Marketing',
    description: 'Search engine optimization and digital marketing strategies',
    icon: 'Search',
    color: '#87CEEB',
    details: 'Keyword research, on-page SEO, link building, and analytics tracking',
  },
  {
    id: 17,
    title: 'Security & Performance',
    description: 'Website security audits and performance optimization',
    icon: 'Shield',
    color: '#98FB98',
    details:
      'SSL certificates, security scanning, speed optimization, and monitoring',
  },
  {
    id: 19,
    title: 'Technical Support',
    description: '24/7 technical support and maintenance services',
    icon: 'Headphones',
    color: '#F0E68C',
    details: 'Bug fixes, updates, backups, and ongoing technical assistance',
  },
  {
    id: 21,
    title: 'AI & Chatbots',
    description: 'AI-powered chatbots and intelligent automation',
    icon: 'Bot',
    color: '#20B2AA',
    details: 'Custom chatbots, AI integration, and automated customer service',
  },
  {
    id: 24,
    title: 'API Development',
    description: 'Custom APIs and third-party integrations',
    icon: 'Settings',
    color: '#9370DB',
    details: 'RESTful APIs, GraphQL, webhooks, and payment gateway integration',
  },
];
