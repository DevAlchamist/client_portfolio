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
      'The storefront feels premium and fast. Our team is genuinely satisfied with the build quality and the conversion-focused flow.',
    name: 'Tiny Popper',
    role: 'E-commerce client',
  },
  {
    id: '2',
    quote:
      'Excellent work—accessible, calm, and trustworthy. The experience helps our users feel safe from the first interaction.',
    name: 'Apna Healer',
    role: 'Mental Health NGO',
  },
  {
    id: '3',
    quote:
      'A disciplined handoff: clear structure, clean components, and measurable performance. The build holds under real traffic.',
    name: 'Client Review',
    role: 'Reference account',
  },
];
