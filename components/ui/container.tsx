"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <motion.div
      className={cn(
        "relative w-full max-w-6xl mx-auto px-4 lg:px-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Container;