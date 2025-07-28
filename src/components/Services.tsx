'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Globe, FileText, X } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'React Development',
    description: 'Modern, scalable React applications with clean architecture',
    details: 'Full-stack React development using the latest technologies including Next.js, TypeScript, and modern state management solutions. Focus on performance, accessibility, and maintainable code.',
    color: '#64FFDA'
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that convert visitors into customers',
    details: 'Design-driven development with attention to user experience, micro-interactions, and visual hierarchy. From wireframes to pixel-perfect implementations.',
    color: '#FF6B6B'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Fast, responsive websites optimized for performance and SEO',
    details: 'Complete web solutions including responsive design, performance optimization, SEO implementation, and cross-browser compatibility.',
    color: '#9B59B6'
  },
  {
    icon: FileText,
    title: 'HTML Templates',
    description: 'Premium templates and components for rapid development',
    details: 'Handcrafted HTML/CSS templates and React component libraries that save development time while maintaining high quality standards.',
    color: '#F39C12'
  }
];

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-20 px-6" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What I <span className="text-[#64FFDA]">Craft</span>
          </h2>
          <p className="text-xl text-[#A0AEC0] max-w-2xl mx-auto">
            Every project is a unique potion, brewed with the perfect blend of code, design, and user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div
                className="bg-[#1A1C26] p-8 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-[#252831] hover:scale-105 hover:shadow-[0_20px_40px_rgba(100,255,218,0.1)] border border-[#2A2D3A] hover:border-[#64FFDA]/30"
                onClick={() => setSelectedService(service)}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                     style={{ backgroundColor: `${service.color}20` }}>
                  <service.icon className="w-8 h-8" style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-[#A0AEC0] leading-relaxed">{service.description}</p>
                <div className="mt-6 text-[#64FFDA] text-sm font-medium group-hover:translate-x-2 transition-transform">
                  Learn More →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-[#1A1C26] p-8 rounded-2xl max-w-lg w-full border border-[#2A2D3A]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4`}
                         style={{ backgroundColor: `${selectedService.color}20` }}>
                      <selectedService.icon className="w-6 h-6" style={{ color: selectedService.color }} />
                    </div>
                    <h3 className="text-2xl font-semibold">{selectedService.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#2A2D3A] hover:bg-[#3A3D4A] transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[#A0AEC0] leading-relaxed">{selectedService.details}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;