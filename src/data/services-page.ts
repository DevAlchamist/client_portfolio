/** Copy & assets for the Services landing page */

export const servicesHero = {
  overline: 'Our capabilities',
  title: 'Architectural Precision in Digital Development.',
  description:
    'We build high-performance digital infrastructure for modern enterprises. Our services range from custom web architecture to complex system integrations.',
};

export const flagshipService = {
  title: 'Website Development',
  badge: 'FLAGSHIP',
  description:
    'Robust, scalable, and responsive web environments built with modern frameworks to ensure longevity and performance at scale.',
  image:
    'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1400',
  imageAlt: 'Developer workspace with code on screen and warm ambient light',
};

export const landingPagesService = {
  title: 'Landing Pages',
  description:
    'High-conversion experiences engineered for clarity, speed, and immediate impact.',
  features: [
    'SEO Optimization',
    'Ultra-fast Loading',
    'Core Web Vitals Focus',
  ],
};

export const coreServices = [
  {
    id: 'html',
    title: 'HTML Templates',
    description:
      'Pixel-perfect markup and modular CSS structures for developers and designers who demand precision.',
  },
  {
    id: 'fullstack',
    title: 'Full Stack',
    description:
      'End-to-end engineering from database design to frontend orchestration and server-side logic.',
  },
  {
    id: 'admin',
    title: 'Admin Dashboards',
    description:
      'Internal tools and data visualization hubs designed for operational efficiency and clear insights.',
  },
] as const;

export const apiIntegration = {
  title: 'API Integration',
  description:
    'Seamlessly connecting your ecosystem. We develop robust middleware and integrate third-party services with a focus on data integrity and security.',
  tags: ['RESTful', 'GraphQL', 'OAuth 2.0'] as const,
  image:
    'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1200',
  imageAlt: 'Abstract urban grid suggesting connected systems',
};

export const servicesCta = {
  title: 'Ready to build your digital future?',
  description:
    "Let's discuss your project's technical requirements and how we can achieve precision together.",
  primaryLabel: 'Start a project',
  primaryHref: '/contact',
  secondaryLabel: 'View case studies',
  secondaryHref: '/work',
};
