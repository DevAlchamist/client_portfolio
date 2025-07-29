'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';
import {
  Globe,
  Smartphone,
  Palette,
  Code,
  FileText,
  Zap,
  User,
  ShoppingCart,
  BarChart3,
  Layers,
  Database,
  Wifi,
  Monitor,
  Tablet,
  Play,
  Search,
  Shield,
  Cloud,
  Headphones,
  Gamepad2,
  Bot,
  Briefcase,
  TrendingUp,
  Settings,
  Rocket
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Landing Pages',
    description: 'Pixel-perfect landing pages that turn visitors into customers',
    icon: Globe,
    color: '#64FFDA',
    details: 'Optimized for conversions with A/B testing ready designs'
  },
  {
    id: 2,
    title: 'Business Websites',
    description: 'Professional corporate websites that establish credibility and drive growth',
    icon: Monitor,
    color: '#FF6B6B',
    details: 'SEO-optimized, mobile-first, and performance-focused'
  },
  {
    id: 3,
    title: 'Custom UI Design',
    description: 'Bespoke user interfaces that blend aesthetics with seamless functionality',
    icon: Palette,
    color: '#4ECDC4',
    details: 'Design systems, component libraries, and interactive prototypes'
  },
  {
    id: 4,
    title: 'React Apps',
    description: 'Dynamic, scalable React applications with modern architecture',
    icon: Code,
    color: '#FFE66D',
    details: 'State management, hooks, context API, and performance optimization'
  },
  {
    id: 5,
    title: 'HTML/CSS Templates',
    description: 'Clean, responsive templates ready for customization and deployment',
    icon: FileText,
    color: '#A8E6CF',
    details: 'Cross-browser compatible with modern CSS techniques'
  },
  {
    id: 6,
    title: 'Next.js Projects',
    description: 'Full-stack Next.js applications with SSR, SSG, and API routes',
    icon: Zap,
    color: '#FF8B94',
    details: 'Server-side rendering, static generation, and edge functions'
  },
  {
    id: 7,
    title: 'Portfolio Sites',
    description: 'Stunning portfolio websites that showcase your work and personality',
    icon: User,
    color: '#B4A7D6',
    details: 'Interactive galleries, smooth animations, and personal branding'
  },
  {
    id: 8,
    title: 'E-commerce Frontends',
    description: 'Modern shopping experiences with seamless checkout flows',
    icon: ShoppingCart,
    color: '#F7DC6F',
    details: 'Payment integration, cart management, and inventory systems'
  },
  {
    id: 9,
    title: 'Admin Dashboards',
    description: 'Powerful admin panels with data visualization and management tools',
    icon: BarChart3,
    color: '#85C1E9',
    details: 'Charts, tables, user management, and real-time updates'
  },
  {
    id: 10,
    title: 'Fully Custom Sites',
    description: 'Unique web experiences tailored to your exact vision and requirements',
    icon: Layers,
    color: '#F8C471',
    details: 'Custom animations, interactions, and specialized functionality'
  },
  {
    id: 11,
    title: 'CMS Integrations',
    description: 'Headless CMS solutions for easy content management and updates',
    icon: Database,
    color: '#82E0AA',
    details: 'Strapi, Contentful, Sanity, and custom CMS solutions'
  },
  {
    id: 12,
    title: 'Progressive Web Apps',
    description: 'App-like web experiences with offline capabilities and push notifications',
    icon: Wifi,
    color: '#D7BDE2',
    details: 'Service workers, caching strategies, and native app features'
  },
  {
    id: 13,
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile apps for iOS and Android',
    icon: Smartphone,
    color: '#FF6B94',
    details: 'React Native, Flutter, and native development with app store deployment'
  },
  {
    id: 14,
    title: 'Hybrid Apps',
    description: 'Cross-platform applications that work seamlessly on all devices',
    icon: Tablet,
    color: '#A8E6CF',
    details: 'Ionic, Cordova, and PWA technologies for maximum reach'
  },
  {
    id: 15,
    title: 'App Store Optimization',
    description: 'Complete app deployment and optimization for maximum visibility',
    icon: Play,
    color: '#FFB347',
    details: 'App store listings, screenshots, keywords, and performance monitoring'
  },
  {
    id: 16,
    title: 'SEO & Digital Marketing',
    description: 'Search engine optimization and digital marketing strategies',
    icon: Search,
    color: '#87CEEB',
    details: 'Keyword research, on-page SEO, link building, and analytics tracking'
  },
  {
    id: 17,
    title: 'Security & Performance',
    description: 'Website security audits and performance optimization',
    icon: Shield,
    color: '#98FB98',
    details: 'SSL certificates, security scanning, speed optimization, and monitoring'
  },
  {
    id: 19,
    title: 'Technical Support',
    description: '24/7 technical support and maintenance services',
    icon: Headphones,
    color: '#F0E68C',
    details: 'Bug fixes, updates, backups, and ongoing technical assistance'
  },
  {
    id: 21,
    title: 'AI & Chatbots',
    description: 'AI-powered chatbots and intelligent automation',
    icon: Bot,
    color: '#20B2AA',
    details: 'Custom chatbots, AI integration, and automated customer service'
  },
  {
    id: 24,
    title: 'API Development',
    description: 'Custom APIs and third-party integrations',
    icon: Settings,
    color: '#9370DB',
    details: 'RESTful APIs, GraphQL, webhooks, and payment gateway integration'
  }
];

const WhatICraft = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [showAll, setShowAll] = useState(false);

  // Show first 16 services initially (4 rows x 4 columns)
  const visibleServices = showAll ? services : services.slice(0, 12);

  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden" ref={ref}>
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#64FFDA] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
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
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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
            I don&apos;t just build websites. I craft the full experience.
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 relative"
          >
            We Craft Everything Your{' '}
            <span className="text-[#64FFDA] relative">
              Web Needs
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
            From pixel-perfect landing pages to complex web applications,
            We deliver premium digital experiences that captivate and convert.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={2000}
                  gyroscope={true}
                >
                  <div className="group relative bg-[#1A1C26] p-6 rounded-2xl border border-[#2A2D3A] hover:border-[#64FFDA]/50 transition-all duration-500 h-full cursor-pointer overflow-hidden">
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#64FFDA]/5 to-[#FF6B6B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Icon */}
                    <div className="relative z-10 mb-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundColor: `${service.color}20`,
                          boxShadow: `0 0 20px ${service.color}30`
                        }}
                      >
                        <IconComponent
                          className="w-6 h-6"
                          style={{ color: service.color }}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#64FFDA] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[#A0AEC0] text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Details - shown on hover */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileHover={{ opacity: 1, height: 'auto' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 border-t border-[#2A2D3A] group-hover:border-[#64FFDA]/30 transition-colors duration-300">
                          <p className="text-xs text-[#64FFDA] font-medium">
                            {service.details}
                          </p>
                        </div>
                      </motion.div>
                    </div>

                    {/* Hover Border Glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `0 0 30px ${service.color}40, inset 0 0 30px ${service.color}10`
                      }}
                    />
                  </div>
                </Tilt>
              </motion.div>
            );
          })}
        </div>

        {/* See More Button */}
        {services.length > 12 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-gradient-to-r from-[#64FFDA]/20 to-[#FF6B6B]/20 border border-[#64FFDA]/30 rounded-full text-[#64FFDA] font-medium hover:from-[#64FFDA]/30 hover:to-[#FF6B6B]/30 hover:border-[#64FFDA]/50 transition-all duration-300 hover:scale-105"
            >
              {showAll ? 'Show Less' : `See More Services (${services.length - 12} more)`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default WhatICraft;