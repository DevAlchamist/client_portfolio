'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { aboutPrinciples } from '@/data/about-page';
import { Reveal, staggerContainer, fadeUpItem, EASE_BUILDRIX, DURATION_SECTION } from '@/components/motion';

export default function AboutPrinciples() {
  const reduce = useReducedMotion();

  return (
    <section className="border-t border-buildrix-steel/10 bg-buildrix-base py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-14 lg:flex-row lg:gap-16 xl:gap-24">
          {/* Sticky label column — stays fixed while principles scroll */}
          <div className="lg:w-52 lg:shrink-0 xl:w-56">
            <div className="lg:sticky lg:top-28 lg:pt-1">
              <Reveal y={20} amount={0.5}>
                <p className="text-metadata font-bold tracking-[0.14em] text-buildrix-clay">
                  Architectural principles
                </p>
              </Reveal>
            </div>
          </div>

          <motion.div
            className="min-w-0 flex-1 space-y-20 sm:space-y-24 lg:space-y-28"
            initial={reduce ? false : 'hidden'}
            whileInView={reduce ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.08, margin: '0px 0px -6% 0px' }}
            variants={staggerContainer(0.14, 0.06)}
          >
            {aboutPrinciples.map((item) => (
              <motion.article
                key={item.id}
                variants={fadeUpItem}
                className="relative scroll-mt-28"
              >
                {/* Watermark index: clipped strip so digits never sit on top of copy */}
                <div className="relative z-0 mb-1 min-h-[5.75rem] overflow-hidden sm:min-h-[6.75rem] lg:min-h-[7.5rem]">
                  <motion.div
                    className={`pointer-events-none select-none absolute bottom-0 font-bold leading-none tabular-nums text-buildrix-ivory/[0.07] text-[clamp(4.25rem,14vw,8.5rem)] sm:text-[clamp(5rem,13vw,9rem)] ${
                      item.numberSide === 'right'
                        ? 'right-0 translate-x-[8%] text-right sm:translate-x-[4%]'
                        : 'left-0 -translate-x-[6%] sm:-translate-x-[3%]'
                    }`}
                    aria-hidden
                    initial={reduce ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: reduce ? 0 : DURATION_SECTION * 1.1,
                      ease: EASE_BUILDRIX,
                    }}
                  >
                    {item.index}
                  </motion.div>
                </div>
                <div className="relative z-10">
                  <motion.h2
                    className="text-lg font-bold uppercase tracking-[0.12em] text-buildrix-clay sm:text-xl"
                    initial={reduce ? false : { opacity: 0, x: item.numberSide === 'right' ? 12 : -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{
                      duration: reduce ? 0 : DURATION_SECTION * 0.9,
                      ease: EASE_BUILDRIX,
                    }}
                  >
                    {item.title}
                  </motion.h2>
                  <motion.p
                    className="mt-5 max-w-2xl text-sm leading-relaxed text-buildrix-ivory sm:text-base"
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: reduce ? 0 : DURATION_SECTION * 0.95,
                      delay: reduce ? 0 : 0.06,
                      ease: EASE_BUILDRIX,
                    }}
                  >
                    {item.body}
                  </motion.p>
                  <motion.div
                    className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-lg border border-buildrix-steel/15"
                    initial={reduce ? false : { opacity: 0, y: 28, scale: 0.985 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: reduce ? 0 : DURATION_SECTION * 1.05,
                      delay: reduce ? 0 : 0.1,
                      ease: EASE_BUILDRIX,
                    }}
                  >
                    <motion.div
                      className="absolute inset-0"
                      initial={false}
                      whileHover={reduce ? undefined : { scale: 1.04 }}
                      transition={{ duration: 0.65, ease: EASE_BUILDRIX }}
                    >
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 65vw"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
