export type Review = {
  id: string;
  quote: string;
  name: string;
  role: string;
};

export const reviewsSectionIntro = {
  overline: 'Perspectives',
  title: 'Evidence from the field',
  supporting:
    'Trusted assessments from leaders who measure builds by longevity, not novelty.',
} as const;

export const reviews: Review[] = [
  {
    id: '1',
    quote:
      'They approached our platform like structural engineers—every decision traced back to load-bearing clarity.',
    name: 'Elena Vasquez',
    role: 'Director of Product, Nexus Capital Hub',
  },
  {
    id: '2',
    quote:
      'Quiet interfaces with uncompromising logic. Our stakeholders finally stopped confusing polish with purpose.',
    name: 'Marcus Chen',
    role: 'CTO, Velo Engine',
  },
  {
    id: '3',
    quote:
      'The handoff was architectural: blueprints, constraints, and a build that has not buckled under scale.',
    name: 'Sofia Al-Masri',
    role: 'Head of Digital, Aurora Labs',
  },
];
