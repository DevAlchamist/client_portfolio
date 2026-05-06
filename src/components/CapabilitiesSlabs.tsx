'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE_BUILDRIX } from '@/components/motion';
import { homeCapabilitiesSlabs } from '@/data/home-page';

export default function CapabilitiesSlabs() {
  const reduce = useReducedMotion();

  return (
    <section
      id="services"
      className="relative scroll-mt-[4.5rem] overflow-hidden py-24 sm:py-28 lg:py-36"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[min(50vh,28rem)] bg-[radial-gradient(ellipse_80%_100%_at_50%_0%,rgba(194,162,124,0.06),transparent_65%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          {homeCapabilitiesSlabs.map((slab, index) => (
            <motion.article
              key={slab.index}
              className={`flex min-h-[22rem] flex-col justify-between border border-buildrix-steel/15 bg-gradient-to-b from-white/[0.04] to-transparent p-8 shadow-buildrix-panel lg:min-h-[26rem] lg:p-10 ${slab.offsetClass}`}
              initial={reduce ? false : { opacity: 0, y: 52, scale: 0.985 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25, margin: '0px 0px -8% 0px' }}
              transition={{
                duration: reduce ? 0 : 0.82,
                ease: EASE_BUILDRIX,
                delay: reduce ? 0 : index * 0.14,
              }}
            >
              <p className="text-metadata text-buildrix-steel">
                {slab.index} / {slab.label}
              </p>
              <div className="mt-24 space-y-5 lg:mt-32">
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-buildrix-ivory lg:text-3xl">
                  {slab.title}
                </h2>
                <p className="max-w-sm text-sm leading-relaxed text-buildrix-steel lg:text-base">
                  {slab.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
