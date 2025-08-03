'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BuildrixLogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

const BuildrixLogo: React.FC<BuildrixLogoProps> = ({ 
  size = 40, 
  className = '', 
  animated = true 
}) => {
  const logoVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1
    },
    hover: { 
      scale: 1.05
    }
  };

  const pathVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 1
    }
  };

  const LogoContent = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer hexagon */}
      <motion.path
        d="M50 5 L85 25 L85 65 L50 85 L15 65 L15 25 Z"
        stroke="#64FFDA"
        strokeWidth="2"
        fill="none"
        variants={animated ? pathVariants : undefined}
        initial={animated ? "initial" : false}
        animate={animated ? "animate" : false}
        transition={animated ? { duration: 1.2, ease: "easeInOut" } : undefined}
      />
      
      {/* Inner geometric pattern */}
      <motion.path
        d="M35 30 L50 20 L65 30 L65 50 L50 60 L35 50 Z"
        fill="#64FFDA"
        fillOpacity="0.1"
        stroke="#64FFDA"
        strokeWidth="1.5"
        variants={animated ? pathVariants : undefined}
        initial={animated ? "initial" : false}
        animate={animated ? "animate" : false}
        transition={animated ? { duration: 1.2, delay: 0.3, ease: "easeInOut" } : undefined}
      />
      
      {/* Central "B" shape */}
      <motion.path
        d="M42 35 L42 55 M42 35 L52 35 Q57 35 57 40 Q57 45 52 45 L42 45 M42 45 L54 45 Q59 45 59 50 Q59 55 54 55 L42 55"
        stroke="#64FFDA"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        variants={animated ? pathVariants : undefined}
        initial={animated ? "initial" : false}
        animate={animated ? "animate" : false}
        transition={animated ? { duration: 1.2, delay: 0.6, ease: "easeInOut" } : undefined}
      />
      
      {/* Accent dots */}
      <motion.circle
        cx="25"
        cy="35"
        r="2"
        fill="#64FFDA"
        initial={animated ? { scale: 0, opacity: 0 } : false}
        animate={animated ? { scale: 1, opacity: 1 } : false}
        transition={animated ? { delay: 0.9, duration: 0.3 } : undefined}
      />
      <motion.circle
        cx="75"
        cy="55"
        r="2"
        fill="#64FFDA"
        initial={animated ? { scale: 0, opacity: 0 } : false}
        animate={animated ? { scale: 1, opacity: 1 } : false}
        transition={animated ? { delay: 1.1, duration: 0.3 } : undefined}
      />
    </svg>
  );

  if (animated) {
    return (
      <motion.div
        variants={logoVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-block cursor-pointer"
      >
        {LogoContent}
      </motion.div>
    );
  }

  return LogoContent;
};

export default BuildrixLogo;