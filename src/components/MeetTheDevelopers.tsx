'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import {
  Code,
  Server,
  Database,
  Cloud,
  X,
  Calendar,
  Award,
  Zap,
  Folder,
  CheckCircle,
  Clock,
  Rocket,
  ExternalLink,
  Building,
  Phone
} from 'lucide-react';
import { trackDeveloperView, trackProjectClick } from '@/lib/gtag';

interface Project {
  name: string;
  description: string;
  tech: string[];
  role: string;
  status: 'Completed' | 'In Progress' | 'Launched';
  url?: string;
}

interface Developer {
  id: number;
  name: string;
  role: string;
  experience: string;
  companies: string[];
  avatar: string;
  bio: string;
  specialties: string[];
  techStack: string[];
  projects: Project[];
  phone: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  accentColor: string;
}

const developers: Developer[] = [
  {
    id: 1,
    name: 'Nitin',
    role: 'Frontend Lead',
    experience: '7+ years',
    avatar: '/images/nitin.jpg',
    companies: ['Banao Technologies', 'Freelance', 'Enterprise Projects'],
    bio: 'Frontend architect with a passion for creating pixel-perfect, performant user experiences. Specializes in React ecosystems and modern web technologies.',
    specialties: ['React Architecture', 'Performance Optimization', 'UI/UX Implementation', 'Team Leadership'],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux', 'GraphQL', 'Webpack'],
    phone: '+91 9876543210',
    projects: [
      {
        name: 'E-Commerce Platform',
        description: 'Led frontend development for a modern e-commerce solution with advanced cart functionality and payment integration.',
        tech: ['React', 'Next.js', 'Stripe', 'Tailwind CSS'],
        role: 'Frontend Lead',
        status: 'Completed'
      },
      {
        name: 'SaaS Dashboard',
        description: 'Architected and built a comprehensive analytics dashboard with real-time data visualization.',
        tech: ['React', 'TypeScript', 'Chart.js', 'Redux'],
        role: 'Frontend Architect',
        status: 'Launched'
      },
      {
        name: 'Portfolio Template System',
        description: 'Created a reusable portfolio template system for creative professionals.',
        tech: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
        role: 'Lead Developer',
        status: 'Completed'
      }
    ],
    icon: Code,
    accentColor: '#64FFDA'
  },
  {
    id: 2,
    name: 'Shubhanshu',
    role: 'Full Stack Developer',
    experience: '4+ years',
    companies: ['NEDC', 'TLN', 'ProcurPal'],
    avatar: '/images/shubhanshu.png',
    bio: 'Versatile full-stack engineer who bridges frontend elegance with backend robustness. Expert in building scalable web applications from concept to deployment.',
    specialties: ['Full Stack Development', 'API Design', 'Database Architecture', 'System Integration'],
    techStack: ['Node.js', 'React', 'MongoDB', 'Express', 'PostgreSQL', 'Docker', 'AWS', 'Redis'],
    phone: '+91 9876543211',
    projects: [
      {
        name: 'Task Management Platform',
        description: 'Built a comprehensive task management system with real-time collaboration features.',
        tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        role: 'Full Stack Developer',
        status: 'Launched'
      },
      {
        name: 'Restaurant Ordering System',
        description: 'Developed a complete restaurant website with online ordering and payment processing.',
        tech: ['Next.js', 'Express', 'PostgreSQL', 'Stripe'],
        role: 'Full Stack Developer',
        status: 'Completed'
      },
      {
        name: 'Social Media Analytics',
        description: 'Created a social media analytics platform with data visualization and reporting.',
        tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
        role: 'Backend Lead',
        status: 'In Progress'
      }
    ],
    icon: Zap,
    accentColor: '#FF6B6B'
  },
  {
    id: 3,
    name: 'Navneet Kumar',
    role: 'Frontend Developer',
    experience: '5+ years',
    companies: ['Banao Technologies', 'CodeSculpt'],
    avatar: '/images/navneet.jpg',
    bio: 'Frontend developer specializing in modern web technologies and responsive design. Expert in creating pixel-perfect user interfaces with clean, maintainable code.',
    specialties: ['HTML/CSS', 'JavaScript', 'WordPress Development', 'Responsive Design'],
    techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Custom WordPress', 'Elementor'],
    phone: '+91 8766254833',
    projects: [
      {
        name: 'RoboChamps',
        description: 'Developed backend architecture for robotics competition platform with real-time scoring and participant management.',
        tech: ['Node.js', 'MongoDB', 'Express', 'Socket.io'],
        role: 'Backend Developer',
        status: 'Launched',
        url: 'https://robochamps.in/'
      },
      {
        name: 'H Bespoke',
        description: 'Built custom e-commerce backend with inventory management and order processing for luxury fashion brand.',
        tech: ['Node.js', 'PostgreSQL', 'Redis', 'AWS'],
        role: 'Backend Architect',
        status: 'Launched',
        url: 'https://hbespoke.com/'
      },
      {
        name: 'RoboWunder',
        description: 'Created scalable backend infrastructure for robotics education platform with course management.',
        tech: ['Node.js', 'MongoDB', 'Express', 'AWS'],
        role: 'Backend Developer',
        status: 'Launched',
        url: 'https://robowunder.com/'
      },
      {
        name: 'SwissKlip',
        description: 'Developed backend services for Swiss precision tools e-commerce with multi-currency support.',
        tech: ['Node.js', 'PostgreSQL', 'Stripe', 'Docker'],
        role: 'Backend Developer',
        status: 'Launched',
        url: 'https://swissklip.com/'
      },
      {
        name: 'Taxi Limo Canada',
        description: 'Built booking and dispatch system backend for luxury transportation service with real-time tracking.',
        tech: ['Node.js', 'MongoDB', 'Socket.io', 'Google Maps API'],
        role: 'Backend Architect',
        status: 'Launched',
        url: 'https://www.taxi-limo.ca/'
      },
      {
        name: 'HCL Bridge',
        description: 'Developed enterprise bridge application backend for seamless system integration and data synchronization.',
        tech: ['Node.js', 'PostgreSQL', 'Redis', 'Microservices'],
        role: 'System Architect',
        status: 'Launched',
        url: 'https://hcl-bridge.com/'
      },
      {
        name: 'Naya Purana',
        description: 'Created backend for cultural heritage platform with content management and user engagement features.',
        tech: ['Node.js', 'MongoDB', 'Express', 'AWS S3'],
        role: 'Backend Developer',
        status: 'Launched',
        url: 'https://nayapurana.in/'
      },
      {
        name: 'Range UAE',
        description: 'Built comprehensive backend for UAE-based range and outdoor activities platform with booking system.',
        tech: ['Node.js', 'PostgreSQL', 'Redis', 'Payment Gateway'],
        role: 'Backend Architect',
        status: 'Launched',
        url: 'https://www.range.ae/'
      }
    ],
    icon: Database,
    accentColor: '#4ECDC4'
  },
  {
    id: 4,
    name: 'Pradeep Mahapatra',
    role: 'Frontend Developer',
    experience: '6+ years',
    companies: ['Enterprise IT', 'Freelancer'],
    avatar: '/api/placeholder/150/150',
    bio: 'Frontend developer with expertise in modern web technologies and WordPress development. Specializes in creating responsive, user-friendly websites with clean design.',
    specialties: ['HTML/CSS', 'JavaScript', 'WordPress Development', 'Responsive Design'],
    techStack: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'WordPress', 'Elementor'],
    phone: '+91 75031 77590',
    projects: [
      {
        name: 'Cloud Migration Project',
        description: 'Led the migration of legacy systems to AWS cloud infrastructure with zero downtime.',
        tech: ['AWS', 'Docker', 'Terraform', 'Jenkins'],
        role: 'DevOps Lead',
        status: 'Completed'
      },
      {
        name: 'CI/CD Pipeline Automation',
        description: 'Implemented automated deployment pipelines reducing deployment time by 80%.',
        tech: ['Jenkins', 'Docker', 'Kubernetes', 'AWS'],
        role: 'Infrastructure Engineer',
        status: 'Launched'
      },
      {
        name: 'Monitoring & Alerting System',
        description: 'Built comprehensive monitoring and alerting system for production environments.',
        tech: ['Prometheus', 'Grafana', 'AWS CloudWatch', 'Linux'],
        role: 'DevOps Engineer',
        status: 'In Progress'
      }
    ],
    icon: Cloud,
    accentColor: '#FFE66D'
  }
];

const MeetTheDevelopers = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedDev, setSelectedDev] = useState<Developer | null>(null);
  const [showTechStack, setShowTechStack] = useState<{ [key: number]: boolean }>({});

  const toggleTechStack = (devId: number) => {
    setShowTechStack(prev => ({
      ...prev,
      [devId]: !prev[devId]
    }));
  };

  // Helper function to check if avatar is a valid local image
  const isValidImage = (avatar: string) => {
    return avatar && !avatar.includes('/api/placeholder') && !avatar.includes('placeholder');
  };

  return (
    <section id="team" className="py-20 px-6 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Main animated blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#64FFDA] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FF6B6B] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Additional smaller blur dots */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#4ECDC4] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-20 right-20 w-48 h-48 bg-[#FFE66D] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-56 h-56 bg-[#A8E6CF] rounded-full opacity-5 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#64FFDA] text-lg mb-4 font-medium"
          >
            Battle-tested developers who ship real things
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 relative"
          >
            Your Idea, Our{' '}
            <span className="text-[#64FFDA] relative">
              Elite Brains
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#64FFDA] to-[#FF6B6B] rounded-full"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-[#A0AEC0] max-w-3xl mx-auto"
          >
            Meet the crew of elite developers who will transform your vision into reality.
            Each brings years of enterprise experience and cutting-edge expertise.
          </motion.p>
        </motion.div>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {developers.map((dev, index) => {
            const IconComponent = dev.icon;
            return (
              <motion.div
                key={dev.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
              >
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={2000}
                  gyroscope={true}
                >
                  <div className="group relative bg-[#1A1C26] p-8 rounded-2xl border border-[#2A2D3A] hover:border-[#64FFDA]/50 transition-all duration-500 cursor-pointer overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                      style={{
                        background: `linear-gradient(135deg, ${dev.accentColor}10, transparent)`,
                        boxShadow: `0 0 40px ${dev.accentColor}20`
                      }}
                    />

                    <div className="relative z-10">
                      {/* Avatar and Icon */}
                      <div className="flex items-center mb-6">
                        <div className="relative">
                          <div
                            className="w-20 h-20 rounded-full border-2 group-hover:border-[#64FFDA] transition-colors duration-300 overflow-hidden"
                            style={{ borderColor: dev.accentColor }}
                          >
                            {isValidImage(dev.avatar) ? (
                              <Image
                                src={dev.avatar}
                                alt={dev.name}
                                width={1200}
                                height={1200}
                                className="w-full h-full object-contain rounded-full"
                              />
                            ) : (
                              <div
                                className="w-full h-full rounded-full flex items-center justify-center text-2xl font-bold text-white"
                                style={{ backgroundColor: `${dev.accentColor}20` }}
                              >
                                {dev.name.charAt(0)}
                              </div>
                            )}
                          </div>
                          <div
                            className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center border-2 border-[#1A1C26]"
                            style={{ backgroundColor: dev.accentColor }}
                          >
                            <IconComponent className="w-4 h-4 text-[#0F111A]" />
                          </div>
                        </div>

                        <div className="ml-4 flex-1">
                          <h3 className="text-2xl font-bold text-white group-hover:text-[#64FFDA] transition-colors duration-300">
                            {dev.name}
                          </h3>
                          <p className="text-[#A0AEC0] font-medium">
                            {dev.role}
                          </p>
                          <div className="flex items-center mt-1">
                            <div className="flex items-center mt-1 mr-2">
                              <Calendar className="w-4 h-4 text-[#64FFDA] mr-2" />
                              <span className="text-sm text-[#64FFDA] font-medium">
                                {dev.experience}
                              </span>
                            </div>
                            <div className="flex items-center mt-1 ml-2">
                              <Building className="w-4 h-4 text-[#64FFDA] mr-2" />
                              <span className="text-sm text-[#64FFDA] font-medium">
                                {dev.companies}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Companies */}

                      {/* Specialties */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-[#64FFDA] mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          Specialties
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {dev.specialties.slice(0, 2).map((specialty, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-[#64FFDA]/10 text-[#64FFDA] text-xs rounded border border-[#64FFDA]/30"
                            >
                              {specialty}
                            </span>
                          ))}
                          {dev.specialties.length > 2 && (
                            <span className="px-2 py-1 bg-[#A0AEC0]/10 text-[#A0AEC0] text-xs rounded">
                              +{dev.specialties.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Tech Stack Toggle */}
                      <div className="space-y-3">
                        <button
                          onClick={() => toggleTechStack(dev.id)}
                          className="w-full text-left text-sm font-medium text-[#A0AEC0] hover:text-[#64FFDA] transition-colors duration-300 flex items-center justify-between"
                        >
                          <span className="flex items-center">
                            <Server className="w-4 h-4 mr-2" />
                            Tech Stack
                          </span>
                          <motion.div
                            animate={{ rotate: showTechStack[dev.id] ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            ▼
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {showTechStack[dev.id] && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-wrap gap-1 pt-2">
                                {dev.techStack.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-1 bg-[#2A2D3A] text-[#A0AEC0] text-xs rounded hover:bg-[#64FFDA]/20 hover:text-[#64FFDA] transition-colors duration-200"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* View Details Button */}
                      <button
                        onClick={() => {
                          trackDeveloperView(dev.name);
                          setSelectedDev(dev);
                        }}
                        className="w-full mt-6 py-3 bg-gradient-to-r from-[#64FFDA]/20 to-[#FF6B6B]/20 border border-[#64FFDA]/30 rounded-lg text-[#64FFDA] font-medium hover:from-[#64FFDA]/30 hover:to-[#FF6B6B]/30 hover:border-[#64FFDA]/50 transition-all duration-300"
                      >
                        View Full Profile
                      </button>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Developer Modal */}
      <AnimatePresence>
        {selectedDev && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedDev(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-[#1A1C26] border border-[#2A2D3A] rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div
                    className="w-16 h-16 rounded-full border-2 flex items-center justify-center text-xl font-bold text-white mr-4 overflow-hidden"
                    style={{
                      borderColor: selectedDev.accentColor,
                      backgroundColor: isValidImage(selectedDev.avatar) ? 'transparent' : `${selectedDev.accentColor}20`
                    }}
                  >
                    {isValidImage(selectedDev.avatar) ? (
                      <Image
                        src={selectedDev.avatar}
                        alt={selectedDev.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-full"
                      />
                    ) : (
                      selectedDev.name.charAt(0)
                    )}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedDev.name}</h3>
                    <p className="text-[#A0AEC0]">{selectedDev.role}</p>
                    <div className="flex items-center mt-1">
                      <Phone className="w-4 h-4 text-[#64FFDA] mr-2" />
                      <a 
                        href={`tel:${selectedDev.phone}`}
                        className="text-sm text-[#64FFDA] font-medium hover:text-[#4FD1C7] transition-colors"
                      >
                        {selectedDev.phone}
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDev(null)}
                  className="p-2 hover:bg-[#2A2D3A] rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-[#A0AEC0]" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-[#64FFDA] mb-3">About</h4>
                  <p className="text-[#A0AEC0] leading-relaxed">{selectedDev.bio}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#64FFDA] mb-3">Core Specialties</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedDev.specialties.map((specialty, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#0F111A] border border-[#2A2D3A] rounded-lg text-center"
                      >
                        <span className="text-sm text-[#A0AEC0]">{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#64FFDA] mb-3">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedDev.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 bg-[#2A2D3A] text-[#A0AEC0] text-sm rounded-lg hover:bg-[#64FFDA]/20 hover:text-[#64FFDA] transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#64FFDA] mb-3 flex items-center">
                    <Folder className="w-5 h-5 mr-2" />
                    Projects Worked On
                  </h4>
                  <div className="space-y-4">
                    {selectedDev.projects.map((project, idx) => {
                      const getStatusIcon = (status: string) => {
                        switch (status) {
                          case 'Completed':
                            return <CheckCircle className="w-4 h-4 text-[#64FFDA]" />;
                          case 'In Progress':
                            return <Clock className="w-4 h-4 text-[#FFE66D]" />;
                          case 'Launched':
                            return <Rocket className="w-4 h-4 text-[#FF6B6B]" />;
                          default:
                            return <CheckCircle className="w-4 h-4 text-[#64FFDA]" />;
                        }
                      };

                      const getStatusColor = (status: string) => {
                        switch (status) {
                          case 'Completed':
                            return 'text-[#64FFDA] bg-[#64FFDA]/10 border-[#64FFDA]/30';
                          case 'In Progress':
                            return 'text-[#FFE66D] bg-[#FFE66D]/10 border-[#FFE66D]/30';
                          case 'Launched':
                            return 'text-[#FF6B6B] bg-[#FF6B6B]/10 border-[#FF6B6B]/30';
                          default:
                            return 'text-[#64FFDA] bg-[#64FFDA]/10 border-[#64FFDA]/30';
                        }
                      };

                      return (
                        <div
                          key={idx}
                          className="p-4 bg-[#0F111A] border border-[#2A2D3A] rounded-lg hover:border-[#64FFDA]/30 transition-colors duration-300"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <h5 className="font-semibold text-white">{project.name}</h5>
                              {project.url && (
                                <a
                                  href={project.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#64FFDA] hover:text-[#4FD1C7] transition-colors duration-200"
                                  title="Visit project"
                                  onClick={() => trackProjectClick(project.name)}
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(project.status)}`}>
                                {project.status}
                              </span>
                              {getStatusIcon(project.status)}
                            </div>
                          </div>
                          <p className="text-[#A0AEC0] text-sm mb-3 leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {project.tech.map((tech, techIdx) => (
                                <span
                                  key={techIdx}
                                  className="px-2 py-1 bg-[#2A2D3A] text-[#A0AEC0] text-xs rounded"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <span className="text-xs text-[#64FFDA] font-medium">
                              {project.role}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MeetTheDevelopers;