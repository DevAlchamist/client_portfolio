"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Check,
  Code2,
  FileText,
  Globe,
  Layers,
  LayoutDashboard,
  Monitor,
  Network,
  Palette,
  Rocket,
} from "lucide-react";
import { EASE_BUILDRIX } from "@/components/motion";
import {
  apiIntegration,
  coreServices,
  flagshipService,
  landingPagesService,
} from "@/data/services-page";
import {
  servicesShowcase,
  type ShowcaseIconName,
} from "@/data/services-showcase";

const showcaseIcons: Record<ShowcaseIconName, typeof Code2> = {
  Code: Code2,
  Palette,
  Globe,
  FileText,
};

const cardEase = EASE_BUILDRIX;

export default function ServicesGrid() {
  const reduce = useReducedMotion();

  const rowReveal = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.11,
        delayChildren: reduce ? 0 : 0.04,
      },
    },
  };

  const slabItem = {
    hidden: { opacity: 0, y: 44, scale: 0.99 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: reduce ? 0 : 0.78, ease: cardEase },
    },
  };

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-16 sm:space-y-10 sm:px-6 sm:py-20 lg:space-y-12 lg:px-8 lg:py-24">
      {/* Row 1 — featured + landing */}
      <motion.div
        className="grid gap-8 lg:grid-cols-3 lg:gap-8"
        variants={rowReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        <motion.article
          variants={slabItem}
          className="relative flex flex-col overflow-hidden rounded-lg border border-buildrix-steel/15 bg-buildrix-surface shadow-buildrix-panel lg:col-span-2"
        >
          <div className="relative z-10 flex flex-wrap items-start justify-between gap-4 p-8 pb-0 sm:p-10">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-buildrix-steel/20 bg-buildrix-base/60">
                <Monitor className="h-5 w-5 text-buildrix-clay" aria-hidden />
              </span>
              <div>
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-buildrix-ivory sm:text-2xl">
                  {flagshipService.title}
                </h2>
              </div>
            </div>
            <span className="rounded-sm border border-buildrix-steel/25 bg-buildrix-base/80 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-buildrix-steel">
              {flagshipService.badge}
            </span>
          </div>
          <p className="relative z-10 max-w-2xl px-8 pb-8 pt-4 text-sm leading-relaxed text-buildrix-steel sm:px-10 sm:text-base">
            {flagshipService.description}
          </p>
          <div className="relative mt-auto aspect-[16/10] w-full">
            <Image
              src={flagshipService.image}
              alt={flagshipService.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-buildrix-surface via-transparent to-transparent opacity-90"
              aria-hidden
            />
          </div>
        </motion.article>

        <motion.article
          variants={slabItem}
          className="flex flex-col rounded-lg border border-buildrix-steel/15 bg-gradient-to-b from-white/[0.03] to-transparent p-8 shadow-buildrix-subtle sm:p-10"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-md border border-buildrix-steel/20 bg-buildrix-base/60">
            <Rocket className="h-5 w-5 text-buildrix-clay" aria-hidden />
          </span>
          <h2 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-buildrix-ivory">
            {landingPagesService.title}
          </h2>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-buildrix-steel">
            {landingPagesService.description}
          </p>
          <ul className="mt-10 space-y-4 border-t border-buildrix-steel/15 pt-8">
            {landingPagesService.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm text-buildrix-ivory/90">
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-buildrix-clay"
                  aria-hidden
                />
                {f}
              </li>
            ))}
          </ul>
        </motion.article>
      </motion.div>

      {/* Row 2 — three columns */}
      <motion.div
        className="grid gap-8 md:grid-cols-3 md:gap-8"
        variants={rowReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {coreServices.map((svc, index) => {
          const Icon =
            svc.id === "html"
              ? Code2
              : svc.id === "fullstack"
                ? Layers
                : LayoutDashboard;
          return (
            <motion.article
              key={svc.id}
              variants={slabItem}
              transition={{ delay: reduce ? 0 : index * 0.06 }}
              className="flex flex-col rounded-lg border border-buildrix-steel/15 bg-buildrix-surface p-8 shadow-buildrix-subtle sm:p-10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-md border border-buildrix-steel/20 bg-buildrix-base/50">
                <Icon className="h-5 w-5 text-buildrix-clay" aria-hidden />
              </span>
              <h2 className="mt-8 text-lg font-semibold tracking-[-0.02em] text-buildrix-ivory">
                {svc.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-buildrix-steel">
                {svc.description}
              </p>
            </motion.article>
          );
        })}
      </motion.div>

      {/* Row 3 — API full width */}
      <motion.article
        variants={slabItem}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="overflow-hidden rounded-lg border border-buildrix-steel/15 bg-buildrix-surface shadow-buildrix-panel"
      >
        <div className="flex flex-col lg:min-h-[320px] lg:flex-row">
          <div className="flex flex-1 flex-col justify-center p-8 sm:p-10 lg:max-w-[55%] lg:p-12">
            <span className="flex h-11 w-11 items-center justify-center rounded-md border border-buildrix-steel/20 bg-buildrix-base/50">
              <Network className="h-5 w-5 text-buildrix-clay" aria-hidden />
            </span>
            <h2 className="mt-8 text-xl font-semibold tracking-[-0.02em] text-buildrix-ivory sm:text-2xl">
              {apiIntegration.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-buildrix-steel sm:text-base">
              {apiIntegration.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {apiIntegration.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-buildrix-steel/20 bg-buildrix-base/60 px-3 py-1.5 text-xs font-medium text-buildrix-steel"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-h-[220px] flex-1 lg:min-h-0 lg:min-w-[40%]">
            <Image
              src={apiIntegration.image}
              alt={apiIntegration.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-buildrix-surface via-buildrix-surface/40 to-transparent lg:bg-gradient-to-l"
              aria-hidden
            />
          </div>
        </div>
      </motion.article>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        variants={rowReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        {servicesShowcase.map((item, index) => {
          const Icon = showcaseIcons[item.icon];
          return (
            <motion.article
              key={item.title}
              variants={slabItem}
              transition={{ delay: reduce ? 0 : index * 0.05 }}
              className="flex flex-col rounded-lg border border-buildrix-steel/15 border-l-[3px] bg-buildrix-surface/80 p-6 shadow-buildrix-subtle sm:p-8"
              style={{ borderLeftColor: item.color }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-buildrix-steel/20 bg-buildrix-base/50">
                <Icon className="h-5 w-5 text-buildrix-clay" aria-hidden />
              </span>
              <h2 className="mt-5 text-base font-semibold tracking-[-0.02em] text-buildrix-ivory sm:text-lg">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-buildrix-steel">
                {item.description}
              </p>
              <p className="mt-4 flex-1 text-xs leading-relaxed text-buildrix-steel/85 sm:text-sm">
                {item.details}
              </p>
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  );
}
