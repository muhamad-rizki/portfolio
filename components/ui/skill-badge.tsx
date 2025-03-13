"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  index: number;
}

const SkillBadge: FC<SkillBadgeProps> = ({ name, index }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: [0.215, 0.61, 0.355, 1]
      }}
      whileHover={{ 
        scale: 1.05,
        background: 'linear-gradient(to right, rgb(59, 130, 246, 0.1), rgb(147, 51, 234, 0.1))'
      }}
      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-background/50 border border-border backdrop-blur-sm shadow-sm hover:border-blue-500/30 hover:text-blue-500 transition-all flex items-center gap-2 cursor-default"
    >
      {name}
    </motion.span>
  );
};

export default SkillBadge;