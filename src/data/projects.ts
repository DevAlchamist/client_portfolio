export type PortfolioProject = {
  id: number;
  /** URL segment for `/work/[slug]` */
  slug: string;
  title: string;
  description: string;
  tech: string[];
  category: string;
  year: string;
  image: string;
  imageAlt: string;
  /** Card chip labels; defaults to uppercase tech if omitted */
  tags?: string[];
  github: string;
  live: string;
};

export const projects: PortfolioProject[] = [
  {
    id: 1,
    slug: 'skill-scape-ai',
    title: 'Skill Scape AI',
    description: 'AI-driven skill assessment and learning platform.',
    tech: ['AI', 'Next.js', 'Tailwind', 'MongoDB'],
    category: 'All',
    year: '2024',
    image: '/images/skill-scape.png',
    imageAlt: 'Skill Scape AI product interface showing learning paths',
    tags: ['AI', 'NEXT.JS', 'MONGODB'],
    github: 'https://github.com/DevAlchamist/skill_scape',
    live: '',
  },
  {
    id: 2,
    slug: 'pixie-art-generator',
    title: 'Pixie Art Generator',
    description:
      'Transform your photos into stunning artistic styles with our AI-powered generator.',
    tech: ['Next.js', 'AI', 'Tailwind'],
    category: 'AI',
    year: '2024',
    image:
      'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200',
    imageAlt: 'Abstract colorful digital art and creative tools',
    tags: ['NEXT.JS', 'AI', 'CREATIVE'],
    github: '',
    live: 'https://pixie-art-generator.vercel.app/',
  },
  {
    id: 3,
    slug: 'task-verse',
    title: 'Task Verse',
    description:
      'Simple Task Management and Skill Assessment Platform inspired by CMS',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    year: '2023',
    image: '/images/task-verse.png',
    imageAlt: 'Task Verse dashboard with task lists and progress',
    tags: ['REACT', 'NODE.JS', 'CMS'],
    github: 'https://github.com/DevAlchamist/skill_scape',
    live: '',
  },
  {
    id: 4,
    slug: 'sho-ol',
    title: 'Sho-ol',
    description:
      'Customizable school dashboards with attendance, inventory, and academic tracking',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Dashboard',
    year: '2023',
    image: '/images/shool.png',
    imageAlt: 'School administration dashboard with charts and tables',
    tags: ['DASHBOARD', 'EDUCATION', 'ANALYTICS'],
    github: '',
    live: 'https://dns.surf',
  },
  {
    id: 5,
    slug: 'task-mate',
    title: 'Task Mate',
    description: 'Scribble your tasks and ideas.',
    tech: ['Next.js', 'Tailwind'],
    category: 'Utility',
    year: '2024',
    image: '/images/task-mate.png',
    imageAlt: 'Task Mate minimal note-taking and task UI',
    tags: ['NEXT.JS', 'PRODUCTIVITY'],
    github: '',
    live: 'https://task-mate.vercel.app/',
  },
  {
    id: 6,
    slug: 'cine-verse',
    title: 'Cine Verse',
    description: 'Movie exploration and recommendation platform.',
    tech: ['React', 'TMDB API', 'Tailwind'],
    category: 'Entertainment',
    year: '2023',
    image: '/images/cineverse.png',
    imageAlt: 'Cine Verse movie discovery grid and poster artwork',
    tags: ['REACT', 'ENTERTAINMENT', 'API'],
    github: '',
    live: 'https://cine-verse.vercel.app/',
  },
  {
    id: 7,
    slug: 'shop-pulse',
    title: 'Shop-Pulse',
    description: 'E-commerce trends and analytics tracking platform.',
    tech: ['React', 'Chart.js', 'Next.js'],
    category: 'Analytics',
    year: '2024',
    image: '/images/shop-pulse.png',
    imageAlt: 'Shop-Pulse analytics charts and e-commerce metrics',
    tags: ['ANALYTICS', 'CHART.JS', 'COMMERCE'],
    github: '',
    live: 'https://sink.cool',
  },
];
