'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_BUILDRIX, DURATION_SLOW } from '@/components/motion';

const copy = {
  label: 'Portfolio',
  title: 'Selected Projects',
  description:
    'A showcase of precision engineering and architectural clarity. Each project represents our commitment to functional elegance and professional reliability.',
};

export default function PortfolioPageHero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: reduce ? 0 : 0.06,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : DURATION_SLOW, ease: EASE_BUILDRIX },
    },
  };

  return (
    <section className="border-b border-buildrix-steel/10 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="flex items-center gap-4"
            variants={item}
          >
            <span
              className="h-px w-10 shrink-0 bg-buildrix-steel sm:w-12"
              aria-hidden
            />
            <p className="text-metadata text-buildrix-steel">{copy.label}</p>
          </motion.div>
          <motion.h1
            className="mt-8 text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-buildrix-ivory sm:text-4xl lg:text-5xl"
            variants={item}
          >
            {copy.title}
          </motion.h1>
          <motion.p
            className="mt-8 max-w-2xl text-base leading-relaxed text-buildrix-steel sm:text-lg"
            variants={item}
          >
            {copy.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
