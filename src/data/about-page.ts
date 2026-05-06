import { portfolioShowcase } from '@/data/portfolio-page';

export type AboutPrinciple = {
  id: string;
  index: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  /** 'left' | 'right' — placement of large watermark number relative to heading */
  numberSide: 'left' | 'right';
};

export const aboutPrinciples: AboutPrinciple[] = [
  {
    id: 'structure',
    index: '01',
    title: 'Intentional structure',
    body:
      'Logic precedes aesthetics. We map the flow of information with structural clarity before a single pixel is rendered, ensuring the digital form follows human function.',
    image:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1400',
    imageAlt: 'Technical wireframe and workspace displays',
    numberSide: 'left',
  },
  {
    id: 'permanence',
    index: '02',
    title: 'Digital permanence',
    body:
      'We reject the disposable. By using timeless typographic scales and neutral palettes, we build digital assets that remain relevant and functional for decades, not seasons.',
    image:
      'https://images.pexels.com/photos/373892/pexels-photo-373892.jpeg?auto=compress&cs=tinysrgb&w=1400',
    imageAlt: 'Dark architectural surface with directional light',
    numberSide: 'right',
  },
  {
    id: 'aesthetics',
    index: '03',
    title: 'Functional aesthetics',
    body:
      'Beauty is the byproduct of a solved problem. We do not decorate; we reveal the innate elegance of a streamlined process through material honesty and tonal layering.',
    image:
      'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1400',
    imageAlt: 'Minimal interior corridor with linear light',
    numberSide: 'left',
  },
];

export type AboutCapability = {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  icon: 'layers' | 'ruler' | 'cpu';
  watermark: 'grid' | 'compass' | 'code';
};

export const aboutCapabilities: AboutCapability[] = [
  {
    id: 'structural',
    index: '01',
    category: 'STRUCTURAL',
    title: 'Systems architecture',
    description:
      'The core skeleton of your digital ecosystem. We build scalable frameworks that support growth without compromising speed.',
    icon: 'layers',
    watermark: 'grid',
  },
  {
    id: 'visual',
    index: '02',
    category: 'VISUAL',
    title: 'Precision UI design',
    description:
      'Interfaces crafted with mathematical exactness. Every element exists for a reason, optimized for professional efficiency.',
    icon: 'ruler',
    watermark: 'compass',
  },
  {
    id: 'technical',
    index: '03',
    category: 'TECHNICAL',
    title: 'Digital fabric',
    description:
      'The technical layer. We engineer high-performance platforms using robust, modern technology stacks for zero-latency workflows.',
    icon: 'cpu',
    watermark: 'code',
  },
];

export type AboutCommission = {
  id: string;
  caseLabel: string;
  title: string;
  description: string;
  tags: [string, string];
  image: string;
  imageAlt: string;
};

/** First two portfolio entries — single source of truth with `/work`. */
export const aboutCommissions: AboutCommission[] = portfolioShowcase
  .slice(0, 2)
  .map((p, i) => ({
    id: p.id,
    caseLabel: `CASE STUDY ${String(4 + i * 5).padStart(2, '0')}`,
    title: p.title,
    description: p.description,
    tags: [p.tags[0] ?? 'STUDIO', p.year] as [string, string],
    image: p.image,
    imageAlt: p.imageAlt,
  }));
