'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { aboutCommissions } from '@/data/about-page';
import {
  Reveal,
  fadeUpItem,
  staggerContainer,
  EASE_BUILDRIX,
  DURATION_SECTION,
} from '@/components/motion';

export default function AboutCommissions() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-buildrix-steel/10 bg-buildrix-base py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-16 xl:gap-24">
          {/* Sticky rail — stays visible while case studies scroll */}
          <div className="lg:w-52 lg:shrink-0 xl:w-60">
            <div className="lg:sticky lg:top-28">
              <Reveal y={16} amount={0.5}>
                <p className="flex items-center gap-3 text-lg font-semibold tracking-[-0.02em] text-buildrix-ivory sm:text-xl">
                  <motion.span
                    className="block h-8 w-px shrink-0 bg-buildrix-ivory/80 [transform-origin:top]"
                    aria-hidden
                    initial={reduce ? false : { scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      duration: reduce ? 0 : 0.65,
                      ease: EASE_BUILDRIX,
                    }}
                  />
                  <span>Selected commissions</span>
                </p>
              </Reveal>
            </div>
          </div>

          <motion.div
            className="min-w-0 flex-1 space-y-20 sm:space-y-24 lg:space-y-28"
            initial={reduce ? false : 'hidden'}
            whileInView={reduce ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.06, margin: '0px 0px -8% 0px' }}
            variants={staggerContainer(0.12, 0.05)}
          >
            {aboutCommissions.map((item, i) => (
              <motion.article
                key={item.id}
                variants={fadeUpItem}
                className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-16"
              >
                <div
                  className={
                    i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'
                  }
                >
                  <motion.div className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-buildrix-steel/15 bg-buildrix-surface sm:aspect-[16/11] lg:aspect-[5/4]">
                    <div
                      className="pointer-events-none absolute inset-0 z-[2] opacity-[0.08] [background-image:linear-gradient(90deg,rgba(110,126,145,0.2)_1px,transparent_1px),linear-gradient(rgba(110,126,145,0.2)_1px,transparent_1px)] [background-size:22px_22px]"
                      aria-hidden
                    />
                    <motion.div
                      className="absolute inset-0 z-[1]"
                      whileHover={reduce ? undefined : { scale: 1.05 }}
                      transition={{ duration: 0.7, ease: EASE_BUILDRIX }}
                    >
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 45vw"
                      />
                    </motion.div>
                  </motion.div>
                </div>
                <motion.div
                  className={`flex flex-col justify-center ${
                    i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'
                  }`}
                  initial={reduce ? false : 'hidden'}
                  whileInView={reduce ? undefined : 'visible'}
                  viewport={{ once: true, amount: 0.35 }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: reduce ? 0 : 0.1,
                        delayChildren: reduce ? 0 : 0.06,
                      },
                    },
                  }}
                >
                  <motion.p
                    className="text-metadata font-semibold text-buildrix-clay"
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: reduce ? 0 : DURATION_SECTION * 0.85,
                          ease: EASE_BUILDRIX,
                        },
                      },
                    }}
                  >
                    {item.caseLabel}
                  </motion.p>
                  <motion.h3
                    className="mt-4 text-2xl font-bold tracking-[-0.03em] text-buildrix-ivory sm:text-3xl lg:text-4xl"
                    variants={{
                      hidden: { opacity: 0, y: 18 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: reduce ? 0 : DURATION_SECTION * 0.95,
                          ease: EASE_BUILDRIX,
                        },
                      },
                    }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="mt-5 text-sm leading-relaxed text-buildrix-ivory/90 sm:text-base"
                    variants={{
                      hidden: { opacity: 0, y: 14 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: reduce ? 0 : DURATION_SECTION * 0.9,
                          ease: EASE_BUILDRIX,
                        },
                      },
                    }}
                  >
                    {item.description}
                  </motion.p>
                  <motion.div
                    className="mt-6 flex flex-wrap gap-2"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: reduce ? 0 : DURATION_SECTION * 0.85,
                          ease: EASE_BUILDRIX,
                        },
                      },
                    }}
                  >
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-buildrix-steel/25 bg-buildrix-surface px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-buildrix-ivory/90 transition-buildrix hover:border-buildrix-clay/35"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: reduce ? 0 : DURATION_SECTION * 0.85,
                          ease: EASE_BUILDRIX,
                        },
                      },
                    }}
                  >
                    <Link
                      href="/work"
                      className="mt-8 inline-flex w-fit text-sm font-semibold text-buildrix-clay underline-offset-4 transition-buildrix hover:underline"
                    >
                      View work
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
