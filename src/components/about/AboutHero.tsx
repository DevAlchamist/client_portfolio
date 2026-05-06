'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { Compass } from 'lucide-react';
import { DURATION_SECTION, EASE_BUILDRIX } from '@/components/motion';

const HERO_BG =
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function AboutHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[min(100svh,900px)] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: reduce ? 0 : 1.35,
          ease: EASE_BUILDRIX,
        }}
      >
        <Image
          src={HERO_BG}
          alt=""
          fill
          priority
          className="object-cover object-center blur-[2px] scale-105 grayscale-[40%]"
          sizes="100vw"
          aria-hidden
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-buildrix-base/82 mix-blend-multiply"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-buildrix-base via-buildrix-base/70 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,900px)] max-w-7xl flex-col justify-end gap-12 px-4 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:flex-row lg:items-end lg:justify-between lg:gap-16 lg:px-8 lg:pb-24">
        <div className="max-w-2xl lg:max-w-[34rem]">
          <motion.h1
            className="text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-buildrix-clay sm:text-4xl lg:text-[2.65rem]"
            initial={reduce ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : DURATION_SECTION * 1.1,
              ease: EASE_BUILDRIX,
            }}
          >
            Sculpting digital permanency through architectural rigor.
          </motion.h1>
          <motion.p
            className="mt-6 text-base leading-relaxed text-buildrix-ivory/95 sm:text-lg"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : DURATION_SECTION,
              delay: reduce ? 0 : 0.12,
              ease: EASE_BUILDRIX,
            }}
          >
            Buildrix is a precision-led design studio. We treat digital infrastructure not as
            fleeting pixels, but as enduring structures built for longevity and structural
            integrity.
          </motion.p>
          <motion.div
            className="mt-12 flex items-center gap-4"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : DURATION_SECTION * 0.95,
              delay: reduce ? 0 : 0.22,
              ease: EASE_BUILDRIX,
            }}
          >
            <motion.span
              className="block h-px w-12 shrink-0 origin-left bg-buildrix-clay/80"
              aria-hidden
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: reduce ? 0 : 0.75,
                delay: reduce ? 0 : 0.32,
                ease: EASE_BUILDRIX,
              }}
            />
            <p className="text-metadata text-buildrix-clay">Est. 2024 / London studio</p>
          </motion.div>
        </div>

        <motion.aside
          className="w-full max-w-md shrink-0 rounded-lg border border-buildrix-clay/20 bg-buildrix-surface/85 p-6 shadow-buildrix-panel backdrop-blur-md sm:p-8 lg:mb-2"
          initial={reduce ? false : { opacity: 0, y: 32, x: 16 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{
            duration: reduce ? 0 : DURATION_SECTION * 1.05,
            delay: reduce ? 0 : 0.18,
            ease: EASE_BUILDRIX,
          }}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: reduce ? 0 : DURATION_SECTION * 0.85,
              delay: reduce ? 0 : 0.38,
              ease: EASE_BUILDRIX,
            }}
          >
            <Compass className="h-8 w-8 text-buildrix-clay" strokeWidth={1.5} aria-hidden />
          </motion.div>
          <motion.p
            className="mt-6 text-sm font-medium leading-relaxed text-buildrix-ivory sm:text-base"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : DURATION_SECTION * 0.9,
              delay: reduce ? 0 : 0.46,
              ease: EASE_BUILDRIX,
            }}
          >
            Precision is not a detail. It is the foundation.
          </motion.p>
          <motion.p
            className="mt-5 text-sm leading-relaxed text-buildrix-steel"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : DURATION_SECTION * 0.85,
              delay: reduce ? 0 : 0.54,
              ease: EASE_BUILDRIX,
            }}
          >
            Our method relies on a 12-column mathematical grid, ensuring every interaction feels
            intentional and balanced.
          </motion.p>
        </motion.aside>
      </div>
    </section>
  );
}
