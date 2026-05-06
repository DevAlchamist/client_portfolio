import { EASE_BUILDRIX, DURATION_SECTION } from './constants';

export const staggerContainer = (stagger = 0.11, delayChildren = 0.08) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const fadeUpItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_SECTION,
      ease: EASE_BUILDRIX,
    },
  },
};

export const fadeLeftItem = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION_SECTION,
      ease: EASE_BUILDRIX,
    },
  },
};
