export type Blueprint = {
  id: string;
  category: string;
  title: string;
  image: string;
  imageAlt: string;
};

/** Curated “selected blueprints” carousel — mood imagery + editorial labels. */
export const blueprints: Blueprint[] = [
  {
    id: 'nexus',
    category: 'FINANCIAL SECTOR',
    title: 'Nexus Capital Hub',
    image:
      'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Dark glass tower at dusk with warm interior light',
  },
  {
    id: 'velo',
    category: 'LOGISTICS LOGIC',
    title: 'Velo Engine v2',
    image:
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Macro view of a circuit board',
  },
  {
    id: 'aurora',
    category: 'AI INFRASTRUCTURE',
    title: 'Aurora Inference Mesh',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600',
    imageAlt: 'Abstract deep technology visual',
  },
];
