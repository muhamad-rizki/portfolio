"use client";

import { FC, useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface Orb {
  id: number;
  size: number;
  x: number;
  y: number;
  color: string;
  speedX: number;
  speedY: number;
  amplitude: number;
  frequency: number;
  phase: number;
}

const AnimatedBackground: FC = () => {
  const [orbs, setOrbs] = useState<Orb[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  // Check if two orbs are colliding
  const checkCollision = (orb1: Orb, orb2: Orb): boolean => {
    const dx = orb1.x - orb2.x;
    const dy = orb1.y - orb2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const minDistance = ((orb1.size + orb2.size) / 2) * 0.8; // Allow slight overlap for visual effect

    return distance < minDistance;
  };

  // Generate a non-overlapping position for an orb
  const generateNonOverlappingPosition = (
    existingOrbs: Orb[],
    size: number
  ): { x: number; y: number } => {
    const padding = size / 2;
    const maxAttempts = 50;
    let attempts = 0;
    let isValid = false;
    let x = 0,
      y = 0;

    while (!isValid && attempts < maxAttempts) {
      x = Math.random() * (window.innerWidth - size) + padding;
      y = Math.random() * (window.innerHeight - size) + padding;

      isValid = true;

      for (const orb of existingOrbs) {
        const dx = x - orb.x;
        const dy = y - orb.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = ((size + orb.size) / 2) * 1.2; // Add extra space between orbs

        if (distance < minDistance) {
          isValid = false;
          break;
        }
      }

      attempts++;
    }

    // If we couldn't find a non-overlapping position, place it randomly but far from center
    if (!isValid) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.min(window.innerWidth, window.innerHeight) * 0.4;
      x = window.innerWidth / 2 + Math.cos(angle) * radius;
      y = window.innerHeight / 2 + Math.sin(angle) * radius;
    }

    return { x, y };
  };

  const generateOrbs = () => {
    const colors = [
      "from-blue-500/15 to-purple-500/15",
      "from-purple-500/15 to-pink-500/15",
      "from-blue-500/15 to-cyan-500/15",
      "from-indigo-500/15 to-blue-500/15",
    ];

    const newOrbs: Orb[] = [];

    // Create floating orbs with non-overlapping initial positions
    for (let i = 0; i < 5; i++) {
      const size = Math.random() * 400 + 200;
      const position = generateNonOverlappingPosition(newOrbs, size);

      newOrbs.push({
        id: i,
        size: size,
        x: position.x,
        y: position.y,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 0.2 - 0.1,
        speedY: Math.random() * 0.2 - 0.1,
        amplitude: Math.random() * 150 + 50,
        frequency: Math.random() * 0.002 + 0.001,
        phase: Math.random() * Math.PI * 2,
      });
    }

    return newOrbs;
  };

  const updateOrbPositions = (time: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = time;
    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;

    setOrbs((prevOrbs) => {
      // First update positions
      const updatedOrbs = prevOrbs.map((orb) => {
        // Calculate base movement
        let newX = orb.x + orb.speedX * deltaTime;
        let newY = orb.y + orb.speedY * deltaTime;

        // Add sinusoidal floating motion
        newX +=
          Math.sin(time * orb.frequency + orb.phase) * orb.amplitude * 0.01;
        newY +=
          Math.cos(time * orb.frequency + orb.phase * 1.3) *
          orb.amplitude *
          0.01;

        // Mouse interaction - gentle attraction/repulsion
        const dx = mousePosition.x - newX;
        const dy = mousePosition.y - newY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 400) {
          // Repel if mouse is close
          const force = (1 - Math.min(distance, 400) / 400) * 1;
          newX -= (dx / distance) * force;
          newY -= (dy / distance) * force;
        }

        // Bounce off walls with some padding
        const padding = orb.size / 2;

        if (newX < padding) {
          newX = padding;
          orb.speedX = Math.abs(orb.speedX);
        }
        if (newX > window.innerWidth - padding) {
          newX = window.innerWidth - padding;
          orb.speedX = -Math.abs(orb.speedX);
        }

        if (newY < padding) {
          newY = padding;
          orb.speedY = Math.abs(orb.speedY);
        }
        if (newY > window.innerHeight - padding) {
          newY = window.innerHeight - padding;
          orb.speedY = -Math.abs(orb.speedY);
        }

        return {
          ...orb,
          x: newX,
          y: newY,
        };
      });

      // Then handle collisions between orbs
      for (let i = 0; i < updatedOrbs.length; i++) {
        for (let j = i + 1; j < updatedOrbs.length; j++) {
          if (checkCollision(updatedOrbs[i], updatedOrbs[j])) {
            // Calculate repulsion vectors
            const dx = updatedOrbs[j].x - updatedOrbs[i].x;
            const dy = updatedOrbs[j].y - updatedOrbs[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // Avoid division by zero
            if (distance === 0) continue;

            // Calculate minimum distance to prevent overlap
            const minDistance = (updatedOrbs[i].size + updatedOrbs[j].size) / 2;

            // Calculate repulsion force - stronger for closer orbs
            const repulsionStrength = 0.05;
            const overlap = (minDistance - distance) * repulsionStrength;

            // Apply repulsion vector
            const repulsionX = (dx / distance) * overlap;
            const repulsionY = (dy / distance) * overlap;

            // Apply forces in opposite directions
            updatedOrbs[i].x -= repulsionX;
            updatedOrbs[i].y -= repulsionY;
            updatedOrbs[j].x += repulsionX;
            updatedOrbs[j].y += repulsionY;

            // Slightly adjust speeds in opposite directions
            const speedAdjustment = 0.01;
            updatedOrbs[i].speedX -= (dx / distance) * speedAdjustment;
            updatedOrbs[i].speedY -= (dy / distance) * speedAdjustment;
            updatedOrbs[j].speedX += (dx / distance) * speedAdjustment;
            updatedOrbs[j].speedY += (dy / distance) * speedAdjustment;
          }
        }
      }

      return updatedOrbs;
    });

    animationFrameRef.current = requestAnimationFrame(updateOrbPositions);
  };

  useEffect(() => {
    setIsHydrated(true);
    const newOrbs = generateOrbs();
    setOrbs(newOrbs);

    const handleResize = () => {
      setOrbs(generateOrbs());
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(updateOrbPositions);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  if (!isHydrated) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full blur-3xl bg-gradient-to-r ${orb.color}`}
          style={{
            width: orb.size,
            height: orb.size,
            x: orb.x - orb.size / 2,
            y: orb.y - orb.size / 2,
            opacity: 0.7,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 0.7,
            scale: 1,
            transition: {
              opacity: { duration: 2, ease: "easeOut" },
              scale: { duration: 1.5, ease: "easeOut" },
            },
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
