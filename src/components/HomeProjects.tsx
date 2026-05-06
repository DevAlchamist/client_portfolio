"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { portfolioShowcase } from "@/data/portfolio-page";
import { EASE_BUILDRIX } from "@/components/motion";

export default function HomeProjects() {
  const reduce = useReducedMotion();
  const items = portfolioShowcase.slice(0, 6);

  return (
    <section
      id="projects"
      className="scroll-mt-[4.5rem] py-20 sm:py-24 lg:py-28"
    >
      <motion.div
        className="mx-auto mb-10 flex max-w-7xl flex-col justify-between gap-6 px-4 sm:mb-14 sm:flex-row sm:items-end sm:px-6 lg:px-8"
        initial={reduce ? false : { opacity: 0, y: 28 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: reduce ? 0 : 0.7, ease: EASE_BUILDRIX }}
      >
        <h2 className="text-metadata text-buildrix-steel">Selected Projects</h2>
        <Link
          href="/work"
          className="text-sm font-medium tracking-wide text-buildrix-clay transition-buildrix sm:text-right"
        >
          Slide to explore <span aria-hidden>→</span>
        </Link>
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] sm:gap-5 lg:gap-6 [&::-webkit-scrollbar]:hidden"
          tabIndex={0}
          role="region"
          aria-label="Selected projects"
        >
          {items.map((p, index) => (
            <motion.article
              key={p.id}
              className="relative h-[min(72vh,44rem)] w-[min(88vw,28rem)] shrink-0 snap-start overflow-hidden border border-buildrix-steel/15 shadow-buildrix-panel sm:w-[min(72vw,24rem)] lg:w-[calc((100%-3rem)/3)]"
              initial={
                reduce ? false : { opacity: 0, y: 40, x: index === 0 ? 0 : 28 }
              }
              whileInView={reduce ? undefined : { opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduce ? 0 : 0.78,
                ease: EASE_BUILDRIX,
                delay: reduce ? 0 : index * 0.1,
              }}
            >
              <Link href={`/work/${p.id}`} className="absolute inset-0 z-10">
                <span className="sr-only">Open {p.title}</span>
              </Link>

              <Image
                src={p.image}
                alt={p.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 72vw, (max-width: 1280px) 33vw, 30vw"
                priority={index === 0}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-buildrix-base via-buildrix-base/55 to-transparent"
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-metadata text-buildrix-clay">
                  {(p.tags[0] ?? p.category ?? "PROJECT").toString()}
                </p>
                <p className="mt-3 text-xl font-semibold tracking-[-0.02em] text-buildrix-ivory sm:text-2xl">
                  {p.title}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
