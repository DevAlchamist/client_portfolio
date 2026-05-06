export type DeveloperProjectStatus = 'Completed' | 'In Progress' | 'Launched';

export type DeveloperProject = {
  name: string;
  description: string;
  tech: string[];
  role: string;
  status: DeveloperProjectStatus;
  url?: string;
};

/** Maps to Lucide icons when you render cards (Code, Zap, Database, Cloud). */
export type DeveloperIconKey = 'code' | 'zap' | 'database' | 'cloud';

export type DeveloperProfile = {
  id: number;
  name: string;
  role: string;
  experience: string;
  companies: string;
  avatar: string;
  bio: string;
  specialties: string[];
  techStack: string[];
  projects: DeveloperProject[];
  phone: string;
  iconKey: DeveloperIconKey;
  accentColor: string;
};

export const developers: DeveloperProfile[] = [
  {
    id: 1,
    name: 'Nitin',
    role: 'Sr. Full Stack Developer',
    experience: '2+ years',
    avatar: '/images/nitin.jpg',
    companies: '3+ Companies',
    bio: 'Senior full-stack developer with expertise in modern web technologies and scalable application architecture. Specializes in React ecosystems, Node.js backend development, and end-to-end project delivery.',
    specialties: [
      'Full Stack Development',
      'React Architecture',
      'Node.js Backend',
      'Database Design',
    ],
    techStack: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'MongoDB',
      'Express',
      'Tailwind CSS',
      'GraphQL',
    ],
    phone: '+91 9876543210',
    projects: [
      {
        name: 'Betting App Demo',
        description:
          'Full-stack betting application with real-time odds, user authentication, and secure payment processing.',
        tech: ['React', 'Next.js', 'Node.js', 'MongoDB'],
        role: 'Sr. Full Stack Developer',
        status: 'Launched',
        url: 'https://betting-app-demo.vercel.app/',
      },
      {
        name: 'Captcha System',
        description:
          'Advanced CAPTCHA verification system with multiple challenge types and anti-bot protection.',
        tech: ['React', 'Node.js', 'Canvas API', 'Express'],
        role: 'Full Stack Developer',
        status: 'Launched',
        url: 'https://captcha-gules.vercel.app/',
      },
      {
        name: 'WATI Clone',
        description:
          'WhatsApp Business API integration platform with automated messaging and customer management.',
        tech: ['React', 'Next.js', 'WhatsApp API', 'MongoDB'],
        role: 'Sr. Full Stack Developer',
        status: 'Launched',
        url: 'https://wati-clone.vercel.app/',
      },
      {
        name: 'Kairoshi Platform',
        description:
          'Comprehensive business management platform with analytics, reporting, and workflow automation.',
        tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
        role: 'Sr. Full Stack Developer',
        status: 'Launched',
        url: 'https://kairoshi.vercel.app/',
      },
    ],
    iconKey: 'code',
    accentColor: '#64FFDA',
  },
  {
    id: 2,
    name: 'Shubhanshu',
    role: 'Sr. Full Stack Developer',
    experience: '2+ years',
    companies: '6+ Companies',
    avatar: '/images/shubhanshu.png',
    bio: 'Versatile full-stack engineer who bridges frontend elegance with backend robustness. Expert in building scalable web applications from concept to deployment.',
    specialties: [
      'Full Stack Development',
      'API Design',
      'Database Architecture',
      'System Integration',
    ],
    techStack: [
      'Node.js',
      'React',
      'MongoDB',
      'Express',
      'PostgreSQL',
      'Docker',
      'AWS',
      'Redis',
    ],
    phone: '+91 9876543211',
    projects: [
      {
        name: 'Task Management Platform',
        description:
          'Built a comprehensive task management system with real-time collaboration features.',
        tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        role: 'Full Stack Developer',
        status: 'Launched',
      },
      {
        name: 'Restaurant Ordering System',
        description:
          'Developed a complete restaurant website with online ordering and payment processing.',
        tech: ['Next.js', 'Express', 'PostgreSQL', 'Stripe'],
        role: 'Full Stack Developer',
        status: 'Completed',
      },
      {
        name: 'Social Media Analytics',
        description:
          'Created a social media analytics platform with data visualization and reporting.',
        tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
        role: 'Backend Lead',
        status: 'In Progress',
      },
    ],
    iconKey: 'zap',
    accentColor: '#FF6B6B',
  },
  {
    id: 3,
    name: 'Navneet Kumar',
    role: 'Sr. WordPress Developer',
    experience: '2+ years',
    companies: '4+ Companies',
    avatar: '/images/navneet.jpg',
    bio: 'Senior WordPress developer with extensive experience in custom theme development, plugin creation, and e-commerce solutions. Expert in creating scalable WordPress websites with advanced functionality.',
    specialties: [
      'WordPress Development',
      'Custom Themes',
      'Plugin Development',
      'E-commerce Solutions',
    ],
    techStack: [
      'WordPress',
      'PHP',
      'MySQL',
      'JavaScript',
      'jQuery',
      'Bootstrap',
      'Elementor',
      'WooCommerce',
    ],
    phone: '+91 8766254833',
    projects: [
      {
        name: 'RoboChamps',
        description:
          'Developed backend architecture for robotics competition platform with real-time scoring and participant management.',
        tech: ['Node.js', 'MongoDB', 'Express', 'Socket.io'],
        role: 'Backend Developer',
        status: 'Launched',
        url: 'https://robochamps.in/',
      },
      {
        name: 'H Bespoke',
        description:
          'Built custom e-commerce backend with inventory management and order processing for luxury fashion brand.',
        tech: ['Node.js', 'PostgreSQL', 'Redis', 'AWS'],
        role: 'Backend Architect',
        status: 'Launched',
        url: 'https://hbespoke.com/',
      },
      {
        name: 'RoboWunder',
        description:
          'Created scalable backend infrastructure for robotics education platform with course management.',
        tech: ['Node.js', 'MongoDB', 'Express', 'AWS'],
        role: 'Backend Developer',
        status: 'Launched',
        url: 'https://robowunder.com/',
      },
      {
        name: 'SwissKlip',
        description:
          'Developed backend services for Swiss precision tools e-commerce with multi-currency support.',
        tech: ['Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
        role: 'Backend Developer',
        status: 'Launched',
        url: 'https://swissklip.com/',
      },
      {
        name: 'Taxi Limo Canada',
        description:
          'Built booking and dispatch system backend for luxury transportation service with real-time tracking.',
        tech: ['Node.js', 'MongoDB', 'Socket.io', 'Google Maps API'],
        role: 'Backend Architect',
        status: 'Launched',
        url: 'https://www.taxi-limo.ca/',
      },
      {
        name: 'HCL Bridge',
        description:
          'Developed enterprise bridge application backend for seamless system integration and data synchronization.',
        tech: ['Node.js', 'PostgreSQL', 'Redis', 'Microservices'],
        role: 'System Architect',
        status: 'Launched',
        url: 'https://hcl-bridge.com/',
      },
      {
        name: 'Naya Purana',
        description:
          'Created backend for cultural heritage platform with content management and user engagement features.',
        tech: ['Node.js', 'MongoDB', 'Express', 'AWS S3'],
        role: 'Backend Developer',
        status: 'Launched',
        url: 'https://nayapurana.in/',
      },
      {
        name: 'Range UAE',
        description:
          'Built comprehensive backend for UAE-based range and outdoor activities platform with booking system.',
        tech: ['Node.js', 'PostgreSQL', 'Redis', 'Payment Gateway'],
        role: 'Backend Architect',
        status: 'Launched',
        url: 'https://www.range.ae/',
      },
    ],
    iconKey: 'database',
    accentColor: '#4ECDC4',
  },
  {
    id: 4,
    name: 'Pradeep Mahapatra',
    role: 'Sr. WordPress Developer',
    experience: '2.5+ years',
    companies: '2+ Companies',
    avatar: '/api/placeholder/150/150',
    bio: 'Senior WordPress developer specializing in custom website development, theme customization, and performance optimization. Expert in creating professional WordPress solutions for businesses.',
    specialties: [
      'WordPress Development',
      'Theme Customization',
      'Performance Optimization',
      'SEO Implementation',
    ],
    techStack: [
      'WordPress',
      'PHP',
      'MySQL',
      'JavaScript',
      'jQuery',
      'Bootstrap',
      'Elementor',
      'ACF',
    ],
    phone: '+91 75031 77590',
    projects: [
      {
        name: 'Cloud Migration Project',
        description:
          'Led the migration of legacy systems to AWS cloud infrastructure with zero downtime.',
        tech: ['AWS', 'Docker', 'Terraform', 'Jenkins'],
        role: 'DevOps Lead',
        status: 'Completed',
      },
      {
        name: 'CI/CD Pipeline Automation',
        description:
          'Implemented automated deployment pipelines reducing deployment time by 80%.',
        tech: ['Jenkins', 'Docker', 'Kubernetes', 'AWS'],
        role: 'Infrastructure Engineer',
        status: 'Launched',
      },
      {
        name: 'Monitoring & Alerting System',
        description:
          'Built comprehensive monitoring and alerting system for production environments.',
        tech: ['Prometheus', 'Grafana', 'AWS CloudWatch', 'Linux'],
        role: 'DevOps Engineer',
        status: 'In Progress',
      },
    ],
    iconKey: 'cloud',
    accentColor: '#FFE66D',
  },
];
