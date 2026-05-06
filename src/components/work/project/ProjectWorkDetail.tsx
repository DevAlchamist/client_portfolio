'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Boxes,
  Check,
  ExternalLink,
  Github,
  LineChart,
  Shield,
  Waypoints,
} from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import type {
  PortfolioProjectDetail,
  ProjectNeighbor,
  TechnicalFeature,
} from '@/data/portfolio-detail';
import { Reveal, staggerContainer, fadeUpItem } from '@/components/motion';
import { StatCounter } from '@/components/work/project/StatCounter';

const iconMap = {
  scale: Boxes,
  shield: Shield,
  chart: LineChart,
  api: Waypoints,
} as const;

type ProjectWorkDetailProps = {
  detail: PortfolioProjectDetail;
  neighbors: { prev: ProjectNeighbor; next: ProjectNeighbor };
};

function FeatureIcon({ feature }: { feature: TechnicalFeature }) {
  const Icon = iconMap[feature.icon];
  return (
    <Icon
      className="h-5 w-5 text-buildrix-clay"
      strokeWidth={1.75}
      aria-hidden
    />
  );
}

export function ProjectWorkDetail({ detail, neighbors }: ProjectWorkDetailProps) {
  const reduce = useReducedMotion();

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-buildrix-base pb-0 pt-[4.5rem]">
      {/* 1 — Project overview + hero */}
      <section className="border-b border-buildrix-steel/15 bg-[#101011]">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.75fr)] lg:items-start lg:gap-16">
            <div>
              <Reveal y={20} amount={0.35}>
                <p className="text-metadata text-buildrix-steel">Project overview</p>
              </Reveal>
              <Reveal y={24} delay={0.06} amount={0.35}>
                <h1 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-buildrix-ivory sm:text-4xl lg:text-[2.75rem]">
                  {detail.title}
                </h1>
              </Reveal>
              <Reveal y={28} delay={0.1} amount={0.35}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-buildrix-ivory/90 sm:text-lg">
                  {detail.overview}
                </p>
              </Reveal>
            </div>

            <motion.div
              className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 sm:gap-8 lg:pt-8"
              role="list"
              aria-label="Project metadata"
              initial={reduce ? false : 'hidden'}
              whileInView={reduce ? undefined : 'visible'}
              viewport={{ once: true, amount: 0.25 }}
              variants={staggerContainer(0.1, 0.08)}
            >
              {[
                { k: 'Year', v: detail.year },
                { k: 'Category', v: detail.category },
                { k: 'Role', v: detail.role },
                { k: 'Stack', v: detail.techStack },
              ].map((row) => (
                <motion.div key={row.k} variants={fadeUpItem} role="listitem">
                  <p className="text-metadata text-buildrix-steel">{row.k}</p>
                  <p className="mt-2 break-words text-sm font-semibold text-buildrix-ivory sm:text-base">
                    {row.v}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {(detail.github?.trim() || detail.live?.trim()) && (
            <Reveal y={16} amount={0.3} className="mt-10 border-t border-buildrix-steel/15 pt-8">
              <p className="text-metadata text-buildrix-steel">Repository & demo</p>
              <div className="mt-4 flex flex-wrap gap-4">
                {detail.github?.trim() ? (
                  <Link
                    href={detail.github.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-buildrix-steel/30 bg-buildrix-surface/60 px-4 py-2.5 text-sm font-medium text-buildrix-ivory transition-buildrix hover:border-buildrix-clay/45 hover:text-buildrix-clay"
                  >
                    <Github className="h-4 w-4 shrink-0" aria-hidden />
                    GitHub
                  </Link>
                ) : null}
                {detail.live?.trim() ? (
                  <Link
                    href={detail.live.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border border-buildrix-steel/30 bg-buildrix-surface/60 px-4 py-2.5 text-sm font-medium text-buildrix-ivory transition-buildrix hover:border-buildrix-clay/45 hover:text-buildrix-clay"
                  >
                    <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
                    Live site
                  </Link>
                ) : null}
              </div>
            </Reveal>
          )}
        </div>

        <Reveal y={16} amount={0.2} className="w-full">
          <div className="relative aspect-[21/9] min-h-[220px] w-full sm:min-h-[280px] lg:min-h-[360px]">
            <Image
              src={detail.image}
              alt={detail.imageAlt}
              fill
              priority
              className="object-cover object-center grayscale-[35%]"
              sizes="100vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-buildrix-base/80 via-buildrix-base/15 to-transparent"
              aria-hidden
            />
          </div>
        </Reveal>
      </section>

      {/* 2 — The Blueprint */}
      <section className="border-b border-buildrix-steel/10 bg-buildrix-base py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-14">
            <Reveal className="lg:pr-4" amount={0.25}>
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-buildrix-clay sm:text-3xl lg:text-[2rem]">
                <span className="relative inline-block">
                  The
                  <span
                    className="absolute left-0 top-[calc(100%+0.35rem)] block h-1 w-10 rounded-[1px] bg-buildrix-clay"
                    aria-hidden
                  />
                </span>{' '}
                Blueprint
              </h2>
            </Reveal>

            <Reveal delay={0.08} amount={0.22}>
              <h3 className="text-lg font-semibold text-buildrix-clay">
                Technical Strategy
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-buildrix-clay/85 sm:text-[0.9375rem]">
                {detail.blueprint.strategy}
              </p>
            </Reveal>

            <Reveal delay={0.16} amount={0.22}>
              <h3 className="text-lg font-semibold text-buildrix-clay">
                Project Goals
              </h3>
              <ul className="mt-5 space-y-4">
                {detail.blueprint.goals.map((goal) => (
                  <li key={goal} className="flex gap-3 text-sm leading-relaxed text-buildrix-clay/85">
                    <span
                      className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-buildrix-clay/40 bg-buildrix-clay/10"
                      aria-hidden
                    >
                      <Check className="h-3.5 w-3.5 text-buildrix-clay" strokeWidth={2.5} />
                    </span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 — Process & Structure */}
      <section className="border-b border-buildrix-steel/10 bg-[#0e0e0f] py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-metadata text-buildrix-steel">Development cycle</p>
            </Reveal>
            <Reveal delay={0.06} y={22}>
              <h2 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-buildrix-ivory sm:text-4xl">
                Process &amp; Structure
              </h2>
            </Reveal>
          </div>

          <motion.ul
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8"
            initial={reduce ? false : 'hidden'}
            whileInView={reduce ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.12, margin: '0px 0px -8% 0px' }}
            variants={staggerContainer(0.14, 0.1)}
          >
            {detail.phases.map((phase) => (
              <motion.li key={phase.title} variants={fadeUpItem} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-buildrix-steel/15 bg-buildrix-surface shadow-buildrix-subtle transition-transform duration-500 ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-[1.02]">
                  <Image
                    src={phase.image}
                    alt={phase.imageAlt}
                    fill
                    className="object-cover transition-[filter,transform] duration-700 ease-[cubic-bezier(0.2,0,0,1)] group-hover:brightness-110 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-buildrix-ivory/90">
                      {phase.phaseLabel}
                    </p>
                    <p className="mt-2 text-lg font-bold tracking-[-0.02em] text-buildrix-ivory sm:text-xl">
                      {phase.title}
                    </p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* 4 — Technical Core */}
      <section className="border-b border-buildrix-steel/10 bg-buildrix-base py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="max-w-xl flex-1">
              <Reveal>
                <h2 className="text-3xl font-bold tracking-[-0.03em] text-buildrix-ivory sm:text-4xl">
                  Technical Core
                </h2>
              </Reveal>
              <Reveal delay={0.08} className="mt-5">
                <p className="text-sm leading-relaxed text-buildrix-steel sm:text-base">
                  {detail.technicalCore.description}
                </p>
              </Reveal>
            </div>

            <Reveal
              delay={0.06}
              className="flex shrink-0 items-stretch justify-center gap-0 rounded-lg border border-buildrix-steel/20 bg-buildrix-surface/80 px-6 py-6 backdrop-blur-sm sm:px-10 sm:py-8"
            >
              <StatCounter
                value={detail.technicalCore.uptime}
                decimals={1}
                label="Uptime %"
              />
              <div
                className="mx-6 hidden w-px self-stretch bg-buildrix-steel/25 sm:block md:mx-10"
                aria-hidden
              />
              <StatCounter
                value={detail.technicalCore.latencyMs}
                decimals={0}
                label="MS Latency"
              />
            </Reveal>
          </div>

          <motion.ul
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-6"
            initial={reduce ? false : 'hidden'}
            whileInView={reduce ? undefined : 'visible'}
            viewport={{ once: true, amount: 0.1, margin: '0px 0px -10% 0px' }}
            variants={staggerContainer(0.1, 0.08)}
          >
            {detail.technicalCore.features.map((feature) => (
              <motion.li key={feature.title} variants={fadeUpItem}>
                <article className="group flex h-full flex-col rounded-lg border border-buildrix-steel/12 bg-buildrix-surface/60 p-5 shadow-buildrix-subtle transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.2,0,0,1)] hover:scale-[1.02] hover:border-buildrix-clay/35 sm:p-6">
                  <FeatureIcon feature={feature} />
                  <h3 className="mt-4 text-base font-semibold text-buildrix-ivory">
                    {feature.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-buildrix-steel">
                    {feature.description}
                  </p>
                  <div className="mt-6 h-px w-full bg-buildrix-steel/15 transition-colors duration-500 group-hover:bg-buildrix-clay/40" />
                </article>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* 5 — Previous / Next */}
      <Reveal y={24} amount={0.35} className="border-t border-buildrix-steel/20 bg-[#0a0a0b]">
        <nav
          className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-buildrix-steel/20 border-b border-buildrix-steel/20 md:grid-cols-2 md:divide-x md:divide-y-0"
          aria-label="Project pagination"
        >
          <Link
            href={`/work/${neighbors.prev.slug}`}
            className="group flex flex-col px-4 py-10 transition-colors duration-300 hover:bg-buildrix-surface/40 sm:px-8 sm:py-12 lg:px-10"
          >
            <span className="text-metadata text-buildrix-steel">Previous project</span>
            <span className="mt-3 text-xl font-bold tracking-[-0.02em] text-buildrix-ivory transition-[color,transform] duration-300 ease-[cubic-bezier(0.2,0,0,1)] group-hover:translate-x-1 group-hover:text-buildrix-clay sm:text-2xl">
              {neighbors.prev.title}
            </span>
          </Link>
          <Link
            href={`/work/${neighbors.next.slug}`}
            className="group flex flex-col px-4 py-10 text-left transition-colors duration-300 hover:bg-buildrix-surface/40 sm:px-8 sm:py-12 md:text-right lg:px-10"
          >
            <span className="text-metadata text-buildrix-steel">Next project</span>
            <span className="mt-3 text-xl font-bold tracking-[-0.02em] text-buildrix-ivory transition-[color,transform] duration-300 ease-[cubic-bezier(0.2,0,0,1)] group-hover:-translate-x-1 group-hover:text-buildrix-clay sm:text-2xl md:ml-auto">
              {neighbors.next.title}
            </span>
          </Link>
        </nav>
      </Reveal>
    </div>
  );
}
