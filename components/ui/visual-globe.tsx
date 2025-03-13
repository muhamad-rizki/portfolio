"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfileImg from "@/public/profile.png";

interface VisualGlobeProps {
  className?: string;
}

const VisualGlobe: FC<VisualGlobeProps> = ({ className }) => {
  return (
    <div className="relative w-full h-full">
      {/* Background blur gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* The main globe */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          translateY: [0, 5, 0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="relative w-[500px] h-[500px]">
          <Image
            src={ProfileImg}
            alt="Digital Globe"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.div>

      {/* Chemical tube elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Chemical tube 1 - left */}
        <motion.div
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-6 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full"
          animate={{
            width: ["8rem", "10rem", "8rem"],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Chemical tube 2 - top */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-32 w-6 bg-gradient-to-b from-purple-500/30 to-blue-500/30 rounded-full"
          animate={{
            height: ["6rem", "8rem", "6rem"],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        {/* Chemical tube 3 - right */}
        <motion.div
          className="absolute -right-24 top-1/3 w-40 h-6 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full rotate-45"
          animate={{
            width: ["7rem", "10rem", "7rem"],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />

        {/* Chemical tube 4 - bottom */}
        <motion.div
          className="absolute bottom-10 left-1/4 h-24 w-6 bg-gradient-to-t from-blue-500/30 to-cyan-500/30 rounded-full rotate-[30deg]"
          animate={{
            height: ["5rem", "7rem", "5rem"],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1.5,
          }}
        />

        {/* Center node */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-md"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Floating particles */}
        <motion.div
          className="absolute left-[40%] top-[30%] w-2 h-2 rounded-full bg-blue-500/60"
          animate={{
            x: [0, 15, 0, -15, 0],
            y: [0, -10, 0, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute left-[60%] top-[60%] w-3 h-3 rounded-full bg-purple-500/60"
          animate={{
            x: [0, -20, 0, 20, 0],
            y: [0, 15, 0, -15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute left-[30%] top-[70%] w-1.5 h-1.5 rounded-full bg-cyan-500/60"
          animate={{
            x: [0, 10, 0, -10, 0],
            y: [0, -15, 0, 15, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 0.5,
          }}
        />
      </div>
    </div>
  );
};

export default VisualGlobe;
