"use client";

import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  active?: boolean;
  children: React.ReactNode;
  label: string;
}

const NavLink: FC<NavLinkProps> = ({ href, active, children, label }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.a
      onClick={handleClick}
      className={cn(
        "group relative px-3 py-2 text-sm transition-all duration-300 hover:text-foreground flex items-center gap-2.5 cursor-pointer rounded-md",
        active ? "text-foreground font-medium" : "text-muted-foreground"
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <span className="order-1">{children}</span>
      <span className="font-medium order-2 hidden md:block">{label}</span>
      
      {active && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          layoutId="activeSection"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.a>
  );
};

export default NavLink;
