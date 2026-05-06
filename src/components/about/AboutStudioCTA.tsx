'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { DoorOpen } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_BUILDRIX, DURATION_SECTION } from '@/components/motion';

export default function AboutStudioCTA() {
  const reduce = useReducedMotion();

  const { ctaContainer, ctaItem } = useMemo(
    () => ({
      ctaContainer: {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduce ? 0 : 0.12,
            delayChildren: reduce ? 0 : 0.06,
          },
        },
      },
      ctaItem: {
        hidden: { opacity: reduce ? 1 : 0, y: reduce ? 0 : 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: reduce ? 0 : DURATION_SECTION,
            ease: EASE_BUILDRIX,
          },
        },
      },
    }),
    [reduce],
  );

  return (
    <section className="border-t border-buildrix-steel/10 bg-black py-24 sm:py-28 lg:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <motion.div
          className="flex flex-col items-center"
          variants={ctaContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45, margin: '0px 0px -12% 0px' }}
        >
          <motion.div variants={ctaItem}>
            <DoorOpen
              className="h-10 w-10 text-buildrix-clay sm:h-11 sm:w-11"
              strokeWidth={1.35}
              aria-hidden
            />
          </motion.div>
          <motion.h2
            className="mt-8 text-2xl font-bold leading-snug tracking-[-0.02em] text-buildrix-ivory sm:text-3xl lg:text-[2rem]"
            variants={ctaItem}
          >
            Start the blueprint for your next digital infrastructure.
          </motion.h2>
          <motion.div variants={ctaItem} className="mt-10">
            <motion.span
              className="inline-block"
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              transition={{ duration: 0.35, ease: EASE_BUILDRIX }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-sm bg-buildrix-clay px-8 py-4 text-xs font-bold uppercase tracking-[0.12em] text-buildrix-base shadow-buildrix-subtle transition-buildrix hover:opacity-90"
              >
                Inquire for studio slot
              </Link>
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
