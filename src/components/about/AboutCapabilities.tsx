'use client';

import Link from 'next/link';
import { Brackets, Compass, Cpu, Grid3x3, Layers, Ruler } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { aboutCapabilities, type AboutCapability } from '@/data/about-page';
import {
  Reveal,
  staggerContainer,
  fadeUpItem,
  EASE_BUILDRIX,
  DURATION_SECTION,
} from '@/components/motion';

const iconMap = {
  layers: Layers,
  ruler: Ruler,
  cpu: Cpu,
} as const;

const watermarkMap = {
  grid: Grid3x3,
  compass: Compass,
  code: Brackets,
} as const;

function CapabilityCard({
  item,
  reduce,
}: {
  item: AboutCapability;
  reduce: boolean;
}) {
  const Icon = iconMap[item.icon];
  const Watermark = watermarkMap[item.watermark];

  return (
    <motion.article
      className="group relative flex min-h-[280px] w-[min(85vw,320px)] shrink-0 flex-col rounded-lg border border-buildrix-steel/15 bg-[#141416] p-6 shadow-buildrix-subtle sm:min-h-[300px] sm:w-[300px] sm:p-7 lg:w-full lg:min-w-0 lg:max-w-none"
      whileHover={
        reduce
          ? undefined
          : {
              y: -4,
              borderColor: 'rgba(194, 162, 124, 0.35)',
              transition: { duration: 0.4, ease: EASE_BUILDRIX },
            }
      }
    >
      <Watermark
        className="pointer-events-none absolute bottom-3 right-3 h-28 w-28 text-buildrix-ivory/[0.04] transition-opacity duration-500 group-hover:opacity-70 sm:h-32 sm:w-32"
        strokeWidth={1}
        aria-hidden
      />
      <motion.span
        className="relative z-10 inline-flex text-buildrix-clay"
        whileHover={reduce ? undefined : { rotate: -8, scale: 1.06 }}
        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
      >
        <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden />
      </motion.span>
      <h3 className="relative z-10 mt-6 text-lg font-semibold tracking-[-0.02em] text-buildrix-ivory">
        {item.title}
      </h3>
      <p className="relative z-10 mt-3 flex-1 text-sm leading-relaxed text-buildrix-steel">
        {item.description}
      </p>
      <p className="relative z-10 mt-6 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-buildrix-steel/90 transition-colors duration-300 group-hover:text-buildrix-clay/80">
        {item.index} / {item.category}
      </p>
    </motion.article>
  );
}

export default function AboutCapabilities() {
  const reduce = Boolean(useReducedMotion());

  return (
    <section className="relative border-t border-buildrix-steel/10 bg-[#0a0a0b] py-20 sm:py-24 lg:py-32">
      <motion.div
        className="pointer-events-none absolute right-4 top-6 sm:right-6 lg:right-8 lg:top-8"
        initial={reduce ? false : { opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: reduce ? 0 : DURATION_SECTION * 0.95,
          delay: reduce ? 0 : 0.08,
          ease: EASE_BUILDRIX,
        }}
      >
        <span className="pointer-events-auto inline-block">
          <Link
            href="/#methodology"
            className="rounded-sm border border-buildrix-ivory/35 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-buildrix-ivory transition-buildrix hover:border-buildrix-clay/50 hover:text-buildrix-clay"
          >
            View methodology
          </Link>
        </span>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-12 lg:px-8 lg:pt-4">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          {/* Sticky header — stays put while cards scroll horizontally */}
          <div className="max-w-md shrink-0 lg:w-56 xl:w-64">
            <div className="lg:sticky lg:top-28">
              <Reveal y={18} amount={0.45}>
                <p className="text-metadata font-bold tracking-[0.14em] text-buildrix-clay">
                  Capabilities
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-buildrix-ivory sm:text-3xl">
                  Systems that endure.
                </h2>
              </Reveal>
            </div>
          </div>

          <div className="min-w-0 flex-1 lg:pt-1">
            <div className="-mx-4 overflow-x-auto overscroll-x-contain px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:mx-0 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden">
              <motion.div
                className="flex w-max gap-5 pr-8 sm:pr-10 lg:grid lg:w-full lg:max-w-none lg:grid-cols-3 lg:gap-5 lg:pr-0 xl:gap-6"
                initial={reduce ? false : 'hidden'}
                whileInView={reduce ? undefined : 'visible'}
                viewport={{ once: true, amount: 0.15 }}
                variants={staggerContainer(0.12, 0.04)}
              >
                {aboutCapabilities.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={fadeUpItem}
                    className="min-w-0 shrink-0 lg:min-w-0"
                  >
                    <CapabilityCard item={item} reduce={reduce} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
