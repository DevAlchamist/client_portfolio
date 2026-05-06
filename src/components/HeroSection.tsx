'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_BUILDRIX, DURATION_SLOW } from '@/components/motion';
import { homeHero } from '@/data/home-page';

export default function HeroSection() {
  const reduce = useReducedMotion();

  const headlineContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: reduce ? 0 : 0.12,
      },
    },
  };

  const headlineLine = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : DURATION_SLOW, ease: EASE_BUILDRIX },
    },
  };

  const accentContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.16,
        delayChildren: reduce ? 0 : 0.48,
      },
    },
  };

  const ruleDraw = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: reduce ? 0 : 1.05,
        ease: EASE_BUILDRIX,
      },
    },
  };

  const labelReveal = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : DURATION_SLOW * 0.75,
        ease: EASE_BUILDRIX,
      },
    },
  };

  return (
    <section
      id="studio"
      className="relative min-h-[calc(100dvh-4.5rem)] scroll-mt-[4.5rem] overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgba(194,162,124,0.07),transparent_58%),radial-gradient(ellipse_90%_80%_at_100%_50%,rgba(110,126,145,0.06),transparent_50%)]"
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={{ duration: 1.1, ease: EASE_BUILDRIX }}
      />
      <div className="relative mx-auto flex min-h-[calc(100dvh-4.5rem)] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl py-20 text-left lg:max-w-[42rem]">
          <motion.h1
            className="text-[clamp(2.25rem,6vw,4.75rem)] font-bold leading-[1.05] tracking-[-0.02em] text-buildrix-ivory"
            variants={headlineContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="block" variants={headlineLine}>
              {homeHero.line1}
            </motion.span>
            <motion.span
              className="mt-2 block text-buildrix-steel"
              variants={headlineLine}
            >
              {homeHero.line2}
            </motion.span>
          </motion.h1>

          <motion.div
            className="mt-12 flex items-center gap-4 sm:mt-14"
            variants={accentContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="block h-px w-10 shrink-0 bg-buildrix-clay sm:w-12"
              aria-hidden
              variants={ruleDraw}
              style={{ transformOrigin: 'left center' }}
            />
            <motion.p className="text-metadata text-buildrix-clay" variants={labelReveal}>
              {homeHero.label}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
