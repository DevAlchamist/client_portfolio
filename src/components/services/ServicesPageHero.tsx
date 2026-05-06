'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_BUILDRIX, DURATION_SLOW } from '@/components/motion';
import { servicesHero } from '@/data/services-page';

export default function ServicesPageHero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: reduce ? 0 : 0.08,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : DURATION_SLOW, ease: EASE_BUILDRIX },
    },
  };

  return (
    <section className="relative overflow-hidden border-b border-buildrix-steel/10 pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_50%_at_0%_0%,rgba(194,162,124,0.06),transparent_55%)]"
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1, ease: EASE_BUILDRIX }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl text-left"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="text-metadata text-buildrix-steel"
            variants={item}
          >
            {servicesHero.overline}
          </motion.p>
          <motion.h1
            className="mt-6 text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-buildrix-ivory sm:text-4xl lg:text-5xl"
            variants={item}
          >
            {servicesHero.title}
          </motion.h1>
          <motion.p
            className="mt-8 max-w-2xl text-base leading-relaxed text-buildrix-steel sm:text-lg"
            variants={item}
          >
            {servicesHero.description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
