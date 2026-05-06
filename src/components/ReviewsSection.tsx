'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { reviews, reviewsSectionIntro } from '@/data/reviews';
import { EASE_BUILDRIX, DURATION_SECTION, fadeUpItem } from '@/components/motion';

const introVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_SECTION, ease: EASE_BUILDRIX },
  },
};

export default function ReviewsSection() {
  const reduce = useReducedMotion();

  const gridContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.12,
        delayChildren: reduce ? 0 : 0.06,
      },
    },
  };

  return (
    <section
      className="border-t border-buildrix-steel/10 py-24 sm:py-28 lg:py-32"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-16 flex flex-col gap-4 sm:mb-20 lg:flex-row lg:items-end lg:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0 },
            },
          }}
        >
          <motion.div variants={introVariants}>
            <p className="text-metadata text-buildrix-clay">
              {reviewsSectionIntro.overline}
            </p>
            <h2
              id="reviews-heading"
              className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-buildrix-ivory sm:text-3xl"
            >
              {reviewsSectionIntro.title}
            </h2>
          </motion.div>
          <motion.p
            className="max-w-md text-sm leading-relaxed text-buildrix-steel lg:text-right"
            variants={introVariants}
          >
            {reviewsSectionIntro.supporting}
          </motion.p>
        </motion.div>

        <motion.ul
          className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-10"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {reviews.map((item) => (
            <motion.li key={item.id} variants={fadeUpItem}>
              <blockquote className="flex h-full flex-col border border-buildrix-steel/15 bg-gradient-to-b from-white/[0.03] to-transparent p-8 shadow-buildrix-subtle lg:p-10">
                <p className="flex-1 leading-relaxed text-buildrix-ivory/95">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-10 border-t border-buildrix-steel/15 pt-8">
                  <cite className="not-italic">
                    <span className="font-semibold tracking-[-0.01em] text-buildrix-ivory">
                      {item.name}
                    </span>
                    <span className="mt-2 block text-sm text-buildrix-steel">
                      {item.role}
                    </span>
                  </cite>
                </footer>
              </blockquote>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
