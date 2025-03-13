"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

const AnimatedButton: FC<AnimatedButtonProps> = ({
  href,
  variant = "primary",
  children,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const targetPosition = element.offsetTop;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.a
      onClick={handleClick}
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-6 font-medium relative overflow-hidden transition-all duration-300 cursor-pointer",
        variant === "primary"
          ? "bg-foreground text-background hover:bg-foreground/90"
          : "border border-input bg-background hover:bg-muted"
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span initial={{ y: 0 }} className="relative z-10">
        {children}
      </motion.span>
      <motion.div
        className={cn(
          "absolute inset-0 z-0",
          variant === "primary" ? "bg-foreground/20" : "bg-muted/50"
        )}
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

export default AnimatedButton;
