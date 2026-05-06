'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_BUILDRIX } from '@/components/motion';
import {
  PORTFOLIO_PAGE_SIZE,
  PORTFOLIO_TOTAL,
  portfolioShowcase,
} from '@/data/portfolio-page';

export default function PortfolioGrid() {
  const reduce = useReducedMotion();
  const [visibleCount, setVisibleCount] = useState(PORTFOLIO_PAGE_SIZE);

  const visible = portfolioShowcase.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((c) => Math.min(c + PORTFOLIO_PAGE_SIZE, PORTFOLIO_TOTAL));
  };

  const loadPrevious = () => {
    setVisibleCount((c) => Math.max(c - PORTFOLIO_PAGE_SIZE, PORTFOLIO_PAGE_SIZE));
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
        {visible.map((project, index) => (
          <motion.li
            key={project.id}
            className="overflow-hidden rounded-lg border border-buildrix-steel/15 bg-buildrix-surface shadow-buildrix-subtle"
            initial={{ opacity: 0, y: 48, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
            transition={{
              duration: reduce ? 0 : 0.78,
              ease: EASE_BUILDRIX,
              delay: reduce ? 0 : Math.min(index, 8) * 0.05,
            }}
          >
            <Link
              href={`/work/${project.id}`}
              className="group flex flex-col outline-none transition-buildrix focus-visible:ring-2 focus-visible:ring-buildrix-clay/80 focus-visible:ring-offset-2 focus-visible:ring-offset-buildrix-base"
            >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-buildrix-surface/90 via-transparent to-transparent opacity-80" />
              <span className="absolute left-4 top-4 rounded-md bg-buildrix-base/75 px-2.5 py-1 text-xs font-medium tabular-nums text-buildrix-ivory backdrop-blur-sm">
                {project.year}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:p-8">
              <h2 className="text-lg font-semibold tracking-[-0.02em] text-buildrix-ivory group-hover:text-buildrix-clay/95 transition-colors">
                {project.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-buildrix-steel">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-buildrix-steel/25 bg-buildrix-base/70 px-2 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-buildrix-steel"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-buildrix-steel/10 pt-10 sm:flex-row sm:items-center">
        <p className="text-sm text-buildrix-steel">
          Showing{' '}
          <span className="font-medium text-buildrix-ivory">{visibleCount}</span>{' '}
          of{' '}
          <span className="font-medium text-buildrix-ivory">{PORTFOLIO_TOTAL}</span>{' '}
          completed projects
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            type="button"
            onClick={loadPrevious}
            disabled={visibleCount <= PORTFOLIO_PAGE_SIZE}
            className="rounded-sm border border-buildrix-steel/35 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-buildrix-steel transition-buildrix hover:border-buildrix-steel/55 hover:text-buildrix-ivory disabled:cursor-not-allowed disabled:opacity-35"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={loadMore}
            disabled={visibleCount >= PORTFOLIO_TOTAL}
            className="rounded-sm bg-buildrix-clay px-6 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-buildrix-base shadow-buildrix-subtle transition-buildrix hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-45"
          >
            Load more projects
          </button>
        </div>
      </div>
    </div>
  );
}
