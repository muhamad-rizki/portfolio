"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingBadgeProps {
  children: React.ReactNode;
  className?: string;
}

const FloatingBadge: FC<FloatingBadgeProps> = ({ children, className }) => {
  return (
    <motion.div
      className={cn(
        "absolute rounded-full px-4 py-2 bg-background border border-border shadow-lg flex items-center gap-2",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ zIndex: 10 }}
      whileHover={{ y: -5 }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingBadge;