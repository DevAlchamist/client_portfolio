'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BuildrixLogo from './BuildrixLogo';

interface BuildrixBrandProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
  showIcon?: boolean;
}

const BuildrixBrand: React.FC<BuildrixBrandProps> = ({ 
  size = 'md', 
  className = '', 
  animated = true,
  showIcon = true 
}) => {
  const sizeConfig = {
    sm: { logoSize: 24, textSize: 'text-lg', spacing: 'mr-2' },
    md: { logoSize: 32, textSize: 'text-xl', spacing: 'mr-3' },
    lg: { logoSize: 40, textSize: 'text-2xl', spacing: 'mr-4' }
  };

  const config = sizeConfig[size];

  const brandVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0
    },
    hover: { 
      scale: 1.02
    }
  };

  const textVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { 
      opacity: 1, 
      x: 0
    }
  };

  const BrandContent = (
    <div className={`flex items-center ${className}`}>
      {showIcon && (
        <BuildrixLogo 
          size={config.logoSize} 
          animated={animated}
          className={config.spacing}
        />
      )}
      <motion.div
        variants={animated ? textVariants : undefined}
        initial={animated ? "initial" : false}
        animate={animated ? "animate" : false}
        transition={animated ? { duration: 0.6, delay: 0.3, ease: "easeOut" } : undefined}
        className="flex items-center"
      >
        <span className={`font-bold text-white ${config.textSize}`}>
          Build
        </span>
        <span className={`font-bold text-[#64FFDA] ${config.textSize}`}>
          rix
        </span>
      </motion.div>
    </div>
  );

  if (animated) {
    return (
      <motion.div
        variants={brandVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="inline-block cursor-pointer"
      >
        {BrandContent}
      </motion.div>
    );
  }

  return BrandContent;
};

export default BuildrixBrand;