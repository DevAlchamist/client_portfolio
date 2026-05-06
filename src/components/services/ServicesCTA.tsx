'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_BUILDRIX, DURATION_SECTION } from '@/components/motion';
import { servicesCta } from '@/data/services-page';

export default function ServicesCTA() {
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
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : DURATION_SECTION,
        ease: EASE_BUILDRIX,
      },
    },
  };

  return (
    <section className="border-t border-buildrix-steel/10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <motion.div
        className="mx-auto max-w-4xl rounded-lg border border-buildrix-steel/20 bg-buildrix-base/40 px-8 py-14 text-center sm:px-12 sm:py-16 lg:px-16 lg:py-20"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2
          className="text-2xl font-semibold tracking-[-0.02em] text-buildrix-ivory sm:text-3xl"
          variants={item}
        >
          {servicesCta.title}
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-buildrix-steel sm:text-base"
          variants={item}
        >
          {servicesCta.description}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-5"
          variants={item}
        >
          <Link
            href={servicesCta.primaryHref}
            className="inline-flex min-w-[12rem] items-center justify-center rounded-sm bg-buildrix-clay px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-buildrix-base shadow-buildrix-subtle transition-buildrix hover:opacity-90"
          >
            {servicesCta.primaryLabel}
          </Link>
          <Link
            href={servicesCta.secondaryHref}
            className="inline-flex min-w-[12rem] items-center justify-center rounded-sm border border-buildrix-ivory/35 bg-transparent px-8 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-buildrix-ivory transition-buildrix hover:border-buildrix-ivory/60 hover:bg-white/[0.04]"
          >
            {servicesCta.secondaryLabel}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
