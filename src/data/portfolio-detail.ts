import {
  portfolioShowcase,
  type PortfolioShowcaseItem,
} from '@/data/portfolio-page';

export type ProjectPhase = {
  phaseLabel: string;
  title: string;
  image: string;
  imageAlt: string;
};

export type TechnicalFeature = {
  title: string;
  description: string;
  icon: 'scale' | 'shield' | 'chart' | 'api';
};

export type PortfolioProjectDetail = PortfolioShowcaseItem & {
  /** Longer hero / overview copy */
  overview: string;
  role: string;
  techStack: string;
  blueprint: {
    strategy: string;
    goals: string[];
  };
  phases: [ProjectPhase, ProjectPhase, ProjectPhase];
  technicalCore: {
    description: string;
    uptime: number;
    latencyMs: number;
    features: [TechnicalFeature, TechnicalFeature, TechnicalFeature, TechnicalFeature];
  };
};

const PHASE_IMAGES: { src: string; alt: string }[] = [
  {
    src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Technical workspace with displays',
  },
  {
    src: 'https://images.pexels.com/photos/373892/pexels-photo-373892.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Contemporary facade at dusk',
  },
  {
    src: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Laboratory and precision environment',
  },
  {
    src: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Atrium and structural volume',
  },
  {
    src: 'https://images.pexels.com/photos/3237757/pexels-photo-3237757.jpeg?auto=compress&cs=tinysrgb&w=1400',
    alt: 'Tower facade geometry',
  },
];

function hashSeed(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i += 1) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function pickRole(item: PortfolioShowcaseItem): string {
  const t = item.tags.join(' ').toUpperCase();
  if (t.includes('BIM') || t.includes('REVIT')) return 'Lead Architecture';
  if (t.includes('STRUCTURAL')) return 'Structural Lead';
  if (t.includes('INTERIOR') || t.includes('HOSPITALITY')) return 'Design Director';
  if (t.includes('MEP') || t.includes('INDUSTRIAL')) return 'Technical Principal';
  if (t.includes('LAB') || t.includes('HEALTHCARE')) return 'Senior Project Architect';
  if (t.includes('WORDPRESS') || t.includes('PHP')) return 'Senior WordPress Developer';
  if (t.includes('AI') || t.includes('ML')) return 'ML & Product Engineer';
  if (t.includes('REACT') || t.includes('NEXT') || t.includes('NODE'))
    return 'Lead Full Stack Engineer';
  if (t.includes('DASHBOARD') || t.includes('ANALYTICS')) return 'Technical Principal';
  return 'Principal Engineer';
}

function techFromTags(item: PortfolioShowcaseItem): string {
  if (item.tech.length > 0) {
    return item.tech.join(', ');
  }
  if (item.tags.length >= 3) {
    return `${item.tags[0]}, ${item.tags[1]}, ${item.tags[2]}`;
  }
  return item.tags.join(', ');
}

const FEATURES_TEMPLATE: [
  TechnicalFeature,
  TechnicalFeature,
  TechnicalFeature,
  TechnicalFeature,
] = [
  {
    icon: 'scale',
    title: 'Elastic Scaling',
    description:
      'Automated coordination layers for fluctuating scope, consultant interfaces, and document throughput.',
  },
  {
    icon: 'shield',
    title: 'Fortified Security',
    description:
      'Controlled information release, audit trails, and discipline-specific access boundaries.',
  },
  {
    icon: 'chart',
    title: 'Real-time Viz',
    description:
      'Clear performance dashboards for envelopes, systems, and stakeholder decision cycles.',
  },
  {
    icon: 'api',
    title: 'Unified API',
    description:
      'Stable exchange formats between analysis, fabrication, and field verification workflows.',
  },
];

export function derivePortfolioDetail(
  item: PortfolioShowcaseItem,
  index: number,
): PortfolioProjectDetail {
  const seed = hashSeed(item.id);
  const uptime = 99.5 + (seed % 50) / 100;
  const latencyMs = 42 + (seed % 56);

  const p0 = PHASE_IMAGES[(index + seed) % PHASE_IMAGES.length]!;
  const p1 = PHASE_IMAGES[(index + seed + 1) % PHASE_IMAGES.length]!;
  const p2 = PHASE_IMAGES[(index + seed + 2) % PHASE_IMAGES.length]!;

  const phases: [ProjectPhase, ProjectPhase, ProjectPhase] = [
    {
      phaseLabel: 'PHASE 01',
      title: 'Initial Blueprints',
      image: p0.src,
      imageAlt: p0.alt,
    },
    {
      phaseLabel: 'PHASE 02',
      title: 'System Architecture',
      image: p1.src,
      imageAlt: p1.alt,
    },
    {
      phaseLabel: 'PHASE 03',
      title: 'Final Integration',
      image: p2.src,
      imageAlt: p2.alt,
    },
  ];

  const overview = `${item.description} The work prioritizes mathematical precision, legible structure, and delivery discipline across every milestone for ${item.title}.`;

  const strategy = `We approached ${item.title} as a ${item.category}-focused product build. The core challenge was to align product intent with technical performance without overwhelming stakeholders. We established a single source of truth in the repo, then iterated through option sets with measurable criteria tied to ${item.tech.slice(0, 3).join(', ') || item.tags.slice(0, 2).join(' and ')} and release constraints.`;

  const goals = [
    'Reduce cognitive load for high-stakes decision makers.',
    'Standardize visual and naming language across consultant packages.',
    'Protect schedule integrity with explicit review gates and version control.',
  ];

  return {
    ...item,
    overview,
    role: pickRole(item),
    techStack: techFromTags(item),
    blueprint: { strategy, goals },
    phases,
    technicalCore: {
      description: `Performance is the foundation of ${item.title}. Every deliverable was shaped with scalability, coordination clarity, and long-term maintainability as primary constraints.`,
      uptime,
      latencyMs,
      features: FEATURES_TEMPLATE,
    },
  };
}

const detailCache = new Map<string, PortfolioProjectDetail>();

export function getPortfolioDetail(slug: string): PortfolioProjectDetail | null {
  const normalized = slug.trim().toLowerCase();
  const idx = portfolioShowcase.findIndex((p) => p.id === normalized);
  if (idx === -1) return null;

  const hit = detailCache.get(normalized);
  if (hit) return hit;

  const item = portfolioShowcase[idx]!;
  const detail = derivePortfolioDetail(item, idx);
  detailCache.set(normalized, detail);
  return detail;
}

export type ProjectNeighbor = { slug: string; title: string };
