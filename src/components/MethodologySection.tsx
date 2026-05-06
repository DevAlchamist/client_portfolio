'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { methodologyPhases, methodologySectionIntro } from '@/data/methodology';
import {
  EASE_BUILDRIX,
  DURATION_SECTION,
  fadeLeftItem,
} from '@/components/motion';

export default function MethodologySection() {
  const reduce = useReducedMotion();
  const stagger = reduce ? 0 : 0.1;

  const leftCol = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : DURATION_SECTION, ease: EASE_BUILDRIX },
    },
  };

  const phasesContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: reduce ? 0 : 0.12,
      },
    },
  };

  return (
    <section
      id="methodology"
      className="scroll-mt-[4.5rem] border-t border-buildrix-steel/10 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 lg:gap-x-24">
          <motion.header
            className="max-w-md lg:pt-2"
            variants={leftCol}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-buildrix-ivory sm:text-3xl">
              {methodologySectionIntro.title}
            </h2>
            <p className="mt-6 leading-relaxed text-buildrix-steel">
              {methodologySectionIntro.description}
            </p>
          </motion.header>

          <motion.div
            className="min-w-0 divide-y divide-buildrix-steel/15"
            variants={phasesContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {methodologyPhases.map((phase) => (
              <motion.article
                key={phase.step}
                className="py-8 first:pt-0 last:pb-0 lg:py-10"
                variants={fadeLeftItem}
              >
                <div className="flex gap-6 sm:gap-8">
                  <span
                    className="w-10 shrink-0 pt-0.5 text-xl font-semibold tabular-nums text-buildrix-clay sm:w-12 sm:text-2xl"
                    aria-hidden
                  >
                    {phase.step}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-buildrix-ivory sm:text-xl">
                      {phase.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-buildrix-steel">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
