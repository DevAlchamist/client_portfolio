'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Skill Scape AI',
    description: 'AI-driven skill assessment and learning platform.',
    tech: ['AI', 'Next.js', 'Tailwind', 'MongoDB'],
    category: 'All',
    image: '/images/skill-scape.png',
    github: 'https://github.com/DevAlchamist/skill_scape',
    live: ''
  },
  {
    id: 2,
    title: 'Pixie Art Generator',
    description: 'Transform your photos into stunning artistic styles with our AI-powered generator.',
    tech: ['Next.js', 'AI', 'Tailwind'],
    category: 'AI',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: '',
    live: 'https://pixie-art-generator.vercel.app/'
  },
  {
    id: 3,
    title: 'Task Verse',
    description: 'Simple Task Management and Skill Assessment Platform inspired by CMS',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Full Stack',
    image: '/images/task-verse.png',
    github: 'https://github.com/DevAlchamist/skill_scape',
    live: ''
  },
  {
    id: 4,
    title: 'Sho-ol',
    description: 'Customizable school dashboards with attendance, inventory, and academic tracking',
    tech: ['React', 'Node.js', 'MongoDB'],
    category: 'Dashboard',
    image: '/images/shool.png',
    github: '',
    live: 'https://dns.surf'
  },
  {
    id: 5,
    title: 'Task Mate',
    description: 'Scribble your tasks and ideas.',
    tech: ['Next.js', 'Tailwind'],
    category: 'Utility',
    image: '/images/task-mate.png',
    github: '',
    live: 'https://task-mate.vercel.app/'
  },
  {
    id: 6,
    title: 'Cine Verse',
    description: 'Movie exploration and recommendation platform.',
    tech: ['React', 'TMDB API', 'Tailwind'],
    category: 'Entertainment',
    image: '/images/cineverse.png',
    github: '',
    live: 'https://cine-verse.vercel.app/'
  },
  {
    id: 7,
    title: 'Shop-Pulse',
    description: 'E-commerce trends and analytics tracking platform.',
    tech: ['React', 'Chart.js', 'Next.js'],
    category: 'Analytics',
    image: '/images/shop-pulse.png',
    github: '',
    live: 'https://sink.cool'
  }
];


const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);
  
  // Show first 6 projects initially (2 rows x 3 columns)
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  // Reset showAll when category changes
  useEffect(() => {
    setShowAll(false);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 px-6 bg-[#0A0C14]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-[#64FFDA]">Projects</span>
          </h2>
          <p className="text-xl text-[#A0AEC0] max-w-2xl mx-auto mb-8">
            Each project tells a story of problem-solving, creativity, and technical excellence.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projects.map((data,index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(data.category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === data.category
                  ? 'bg-[#64FFDA] text-[#0F111A]'
                  : 'bg-[#1A1C26] text-[#A0AEC0] hover:bg-[#252831] hover:text-white'
                  }`}
              >
                {data.category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-[#1A1C26] rounded-2xl overflow-hidden border border-[#2A2D3A] hover:border-[#64FFDA]/30 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C26] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="w-10 h-10 bg-[#1A1C26]/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#64FFDA] hover:text-[#0F111A] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.live}
                    className="w-10 h-10 bg-[#1A1C26]/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#64FFDA] hover:text-[#0F111A] transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-[#A0AEC0] mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#64FFDA]/10 text-[#64FFDA] text-sm rounded-full border border-[#64FFDA]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-4 bg-gradient-to-r from-[#64FFDA]/20 to-[#FF6B6B]/20 border border-[#64FFDA]/30 rounded-full text-[#64FFDA] font-medium hover:from-[#64FFDA]/30 hover:to-[#FF6B6B]/30 hover:border-[#64FFDA]/50 transition-all duration-300 hover:scale-105"
            >
              {showAll ? 'Show Less' : `See More Projects (${filteredProjects.length - 6} more)`}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;