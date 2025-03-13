"use client";

import { FC } from "react";
import { motion } from "framer-motion";

interface TypedBannerProps {
  text: string;
}

const TypedBanner: FC<TypedBannerProps> = ({ text }) => {
  const words = text.split("");

  return (
    <div className="inline-block p-2 bg-muted rounded-lg mb-4 overflow-hidden">
      <motion.span
        className="text-sm font-medium inline-block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {words.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.03,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
        <motion.span
          className="inline-block w-[12px] h-[2px] bg-foreground ml-1"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [1, 0],
            scaleY: [1, 1],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: words.length * 0.03 + 0.3,
          }}
        />
      </motion.span>
    </div>
  );
};

export default TypedBanner;
