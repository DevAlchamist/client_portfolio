'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { name: 'React.js', color: '#61DAFB' },
  { name: 'Next.js', color: '#000000' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'Framer Motion', color: '#FF0055' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'EC2', color: '#FF9900' },
  { name: 'Lambda', color: '#FF9900' },
  { name: 'S3', color: '#569A31' },
  { name: 'DynamoDB', color: '#4053D6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Express.js', color: '#000000' },
  { name: 'AdminJS', color: '#64FFDA' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Vite', color: '#646CFF' },
  { name: 'WordPress', color: '#21759B' },
  { name: 'PHP', color: '#777BB4' },
  { name: 'SEO', color: '#4285F4' },
  { name: 'GraphQL', color: '#E10098' },
  { name: 'GitHub', color: '#181717' },
  { name: 'REST API', color: '#FF6B6B' },
  { name: 'TWA', color: '#4ECDC4' },
  { name: 'PWA', color: '#5A0FC8' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'Webhooks', color: '#FFE66D' },
  { name: 'Stripe', color: '#635BFF' },
  { name: 'Google APIs', color: '#4285F4' },
  { name: 'Shopify', color: '#7AB55C' },
  { name: 'Vercel', color: '#000000' },
  { name: 'NGINX', color: '#009639' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'Zustand', color: '#FF6B6B' },
  { name: 'Vue.js', color: '#4FC08D' },
  { name: 'Prisma', color: '#2D3748' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'Headless UI', color: '#64FFDA' },
  { name: 'Material UI', color: '#007FFF' },
  { name: 'Chakra UI', color: '#319795' }
];

// Duplicate skills for seamless infinite scroll
const duplicatedSkills = [...skills, ...skills];

const WhyChooseUsScroll = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || !inView) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1; // Increased speed for better visibility
    let isHovered = false;

    const animate = () => {
      if (!isHovered && scrollContainer) {
        scrollPosition += scrollSpeed;
        
        // Calculate the width of one set of skills
        const singleSetWidth = scrollContainer.scrollWidth / 2;
        
        // Reset position when we've scrolled through one complete set
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    // Start animation
    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [inView]);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden" ref={ref}>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold relative inline-block px-4"
          >
            Why Choose{' '}
            <span className="text-[#64FFDA] relative">
              Us
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : {}}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#64FFDA] to-[#FF6B6B] rounded-full"
                style={{
                  boxShadow: '0 0 20px #64FFDA'
                }}
              />
            </span>
          </motion.h2>
        </motion.div>

        {/* Scrollable Skills Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Gradient Fades */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 md:w-20 bg-gradient-to-r from-[#0F111A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 md:w-20 bg-gradient-to-l from-[#0F111A] to-transparent z-10 pointer-events-none" />
          
          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-2 sm:gap-4 overflow-x-auto py-6 sm:py-8 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              scrollBehavior: 'auto'
            }}
          >
            {duplicatedSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + (index % skills.length) * 0.02,
                  ease: "easeOut"
                }}
                className="group relative flex-shrink-0"
              >
                <div
                  className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-[#1A1C26] border border-[#2A2D3A] rounded-full text-white font-medium text-xs sm:text-sm whitespace-nowrap cursor-pointer transition-all duration-300 hover:scale-105 hover:border-[#64FFDA]/50 relative overflow-hidden"
                  style={{
                    fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'
                  }}
                >
                  {/* Hover Glow Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
                      boxShadow: `0 0 20px ${skill.color}40`
                    }}
                  />
                  
                  {/* Skill Name */}
                  <span className="relative z-10 group-hover:text-[#64FFDA] transition-colors duration-300">
                    {skill.name}
                  </span>
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderColor: skill.color }}
                    animate={{
                      boxShadow: [
                        `0 0 0px ${skill.color}00`,
                        `0 0 20px ${skill.color}60`,
                        `0 0 0px ${skill.color}00`
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-8"
        >
          <p className="text-[#A0AEC0] text-sm">
            <span className="inline-block w-2 h-2 bg-[#64FFDA] rounded-full mr-2 animate-pulse"></span>
            Hover to pause • Scroll to explore our full tech arsenal
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUsScroll;