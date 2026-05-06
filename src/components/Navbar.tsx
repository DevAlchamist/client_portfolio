"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { DURATION_SECTION, EASE_BUILDRIX } from "@/components/motion";

export type NavbarNavItem = {
  label: string;
  href: string;
};

export type NavbarProps = {
  navItems?: NavbarNavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  logoHref?: string;
  logoText?: string;
  className?: string;
};

const defaultNavItems: NavbarNavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar({
  navItems = defaultNavItems,
  ctaLabel = "Build with us",
  ctaHref = "/contact",
  logoHref = "/",
  logoText = "BUILDRIX",
  className = "",
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const visible = { opacity: 1, y: 0 };

  return (
    <motion.header
      className={`border-b border-buildrix-steel/20 bg-buildrix-surface shadow-buildrix-subtle transition-buildrix ${className}`}
      initial={reduce ? visible : { opacity: 0, y: -18 }}
      animate={visible}
      transition={{
        duration: reduce ? 0 : DURATION_SECTION * 1.05,
        ease: EASE_BUILDRIX,
      }}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href={logoHref}
          className="shrink-0 text-lg font-bold tracking-[-0.02em] text-buildrix-clay sm:text-xl transition-buildrix hover:opacity-90"
        >
          {logoText}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href + item.label}
              href={item.href}
              className="text-sm font-medium capitalize text-buildrix-ivory/85 transition-buildrix hover:text-buildrix-clay"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={ctaHref}
            className="hidden rounded-sm bg-buildrix-clay px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-buildrix-base shadow-buildrix-subtle transition-buildrix hover:opacity-90 md:inline-flex"
          >
            {ctaLabel}
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm text-buildrix-ivory/90 transition-buildrix hover:text-buildrix-clay md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-buildrix-steel/20 bg-buildrix-surface px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile primary">
            {navItems.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className="py-1 capitalize text-buildrix-ivory/85 transition-buildrix hover:text-buildrix-clay"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ctaHref}
              className="mt-2 inline-flex w-fit rounded-sm bg-buildrix-clay px-5 py-2.5 text-xs font-bold uppercase tracking-[0.08em] text-buildrix-base shadow-buildrix-subtle transition-buildrix hover:opacity-90"
              onClick={() => setOpen(false)}
            >
              {ctaLabel}
            </Link>
          </nav>
        </div>
      )}
    </motion.header>
  );
}
