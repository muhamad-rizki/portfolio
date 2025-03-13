"use client";

import { FC } from "react";
import { motion, useInView } from "framer-motion";
import TypedBanner from "./typed-banner";
import AnimatedButton from "./animated-button";
import SocialLinks from "./social-links";
import FloatingBadge from "./floating-badge";
import VisualGlobe from "./visual-globe";
import { useRef } from "react";

const IntroSection: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section
      ref={ref}
      id="intro"
      className="min-h-screen flex items-center w-full max-w-6xl mx-auto px-4 relative"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          className="space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <TypedBanner text="Hello, I'm Muhamad Rizki" />

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Creating innovative{" "}
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              digital solutions
            </span>{" "}
            since 2017
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Software Engineer specializing in web and mobile app development. 
            Bachelor of Information Technology graduate, fast learner, and open source enthusiast.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <AnimatedButton href="#projects">View My Projects</AnimatedButton>
            <AnimatedButton href="#about" variant="secondary">
              Learn More
            </AnimatedButton>
          </motion.div>

          <SocialLinks className="justify-center lg:justify-start mt-8" />
        </motion.div>

        <motion.div
          className="relative h-[500px] hidden lg:block"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Replace the previous globe with our new VisualGlobe component */}
          <VisualGlobe />

          {/* Updated floating badges based on skills */}
          <FloatingBadge className="-top-4 -left-4 rotate-[-6deg]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-blue-500"
            >
              <path
                d="M12 18.178L4.182 10.36l1.414-1.414L12 15.35l6.404-6.404 1.414 1.414z"
                fill="currentColor"
              />
              <path
                d="M12 12.65L4.182 4.832l1.414-1.414L12 9.822l6.404-6.404 1.414 1.414z"
                fill="currentColor"
              />
            </svg>
            <span className="text-sm font-medium">Full-Stack Developer</span>
          </FloatingBadge>

          <FloatingBadge className="top-1/4 -right-16 rotate-[6deg]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-purple-500"
            >
              <path 
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium">7+ Years Experience</span>
          </FloatingBadge>

          <FloatingBadge className="bottom-1/4 -right-8 rotate-[3deg]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-500"
            >
              <path
                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <path 
                d="M12 22.5v-6M3.27 6.96L12 12.01l8.73-5.05"
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm font-medium">Web & Mobile Apps</span>
          </FloatingBadge>

          <motion.div
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-background border border-border rounded-full shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <span className="text-sm font-medium flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Open for projects
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
