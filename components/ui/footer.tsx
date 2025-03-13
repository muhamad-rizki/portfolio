"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="py-6 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-2 text-sm text-muted-foreground"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="font-medium">© {currentYear}</span>
            <span>Rizki • All rights reserved</span>
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              {
                href: "https://github.com/muhamad-rizki",
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/its-rizki",
                label: "LinkedIn",
              },
              {
                href: "mailto:contact@rizki.work",
                label: "Email",
              },
            ].map(({ href, label }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
