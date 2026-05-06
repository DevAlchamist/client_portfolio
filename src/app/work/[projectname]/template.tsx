'use client';

import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_BUILDRIX, DURATION_SECTION } from '@/components/motion';

export default function WorkProjectTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <motion.div
      key={pathname}
      initial={reduce ? false : { opacity: 0, x: 28 }}
      animate={reduce ? undefined : { opacity: 1, x: 0 }}
      transition={{
        duration: reduce ? 0 : DURATION_SECTION * 0.95,
        ease: EASE_BUILDRIX,
      }}
    >
      {children}
    </motion.div>
  );
}
