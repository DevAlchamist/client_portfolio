'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_BUILDRIX, DURATION_SECTION } from './constants';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  once?: boolean;
  amount?: number | 'some' | 'all';
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  x = 0,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const prefersReduced = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /** Until mount, match SSR (no reduced-motion) so tree stays motion.div — avoids hydration errors. */
  const reduce = mounted && prefersReduced;

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount, margin: '0px 0px -10% 0px' }}
      transition={{
        duration: reduce ? 0 : DURATION_SECTION,
        ease: EASE_BUILDRIX,
        delay: reduce ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}
