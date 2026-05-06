/** Home (`/`) — hero and capability slabs */

export const homeHero = {
  line1: 'Built with intent.',
  line2: 'Not templates.',
  label: 'Digital architecture studio',
} as const;

export type HomeCapabilitySlab = {
  index: string;
  label: string;
  title: string;
  description: string;
  offsetClass: string;
};

export const homeCapabilitiesSlabs: HomeCapabilitySlab[] = [
  {
    index: '01',
    label: 'CAPABILITY',
    title: 'Website Dev',
    description:
      'Precision-engineered digital platforms built for scale, performance, and mathematical aesthetic integrity.',
    offsetClass: 'md:mt-0',
  },
  {
    index: '02',
    label: 'PRODUCT',
    title: 'HTML Templates',
    description:
      'Architecturally sound frameworks designed for developers who demand clean logic and modular efficiency.',
    offsetClass: 'md:mt-16 lg:mt-20',
  },
  {
    index: '03',
    label: 'ECOSYSTEM',
    title: 'Full Stack',
    description:
      'End-to-end digital engineering from database structural integrity to the final polished interface.',
    offsetClass: 'md:mt-28 lg:mt-36',
  },
];
