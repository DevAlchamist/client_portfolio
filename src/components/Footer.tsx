'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUpItem } from '@/components/motion';
import { footerDefaults } from '@/data/site-footer';

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterProps = {
  brandTitle?: string;
  brandDescription?: string;
  connectHeading?: string;
  connectLinks?: FooterLink[];
  legalHeading?: string;
  legalLinks?: FooterLink[];
  copyrightLine?: string;
  className?: string;
};

export default function Footer({
  brandTitle = footerDefaults.brandTitle,
  brandDescription = footerDefaults.brandDescription,
  connectHeading = footerDefaults.connectHeading,
  connectLinks = [...footerDefaults.connectLinks],
  legalHeading = footerDefaults.legalHeading,
  legalLinks = [...footerDefaults.legalLinks],
  copyrightLine,
  className = '',
}: FooterProps) {
  const reduce = useReducedMotion();
  const year = new Date().getFullYear();
  const copyright =
    copyrightLine ??
    `© ${year} Buildrix Digital Architecture Studio. All rights reserved.`;

  const gridContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : 0.1,
        delayChildren: reduce ? 0 : 0.04,
      },
    },
  };

  return (
    <footer
      className={`border-t border-buildrix-steel/15 bg-buildrix-base text-buildrix-steel ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <motion.div
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16"
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          <motion.div className="max-w-sm" variants={fadeUpItem}>
            <p className="text-lg font-bold tracking-[-0.02em] text-buildrix-ivory">
              {brandTitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-buildrix-steel">
              {brandDescription}
            </p>
          </motion.div>

          <motion.div variants={fadeUpItem}>
            <p className="text-metadata text-buildrix-clay">
              {connectHeading}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {connectLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-buildrix-ivory/75 transition-buildrix hover:text-buildrix-ivory"
                    {...(link.href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUpItem}>
            <p className="text-metadata text-buildrix-clay">
              {legalHeading}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-buildrix-ivory/75 transition-buildrix hover:text-buildrix-ivory"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="flex items-start justify-start lg:justify-end"
            variants={fadeUpItem}
          >
            <p className="max-w-[16rem] text-left text-xs leading-relaxed text-buildrix-steel sm:text-sm lg:text-right">
              {copyright}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
