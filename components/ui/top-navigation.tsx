"use client";

import { FC } from "react";
import Image from "next/image";
import NavLink from "./nav-link";
import { ThemeToggle } from "./theme-toggle";
import { useActiveSection } from "@/hooks/use-active-section";
import { motion } from "framer-motion";
import { Code, User, Layout } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/public/logo-rizki.svg";

const TopNavigation: FC = () => {
  const activeSection = useActiveSection();

  const navItems = [
    {
      href: "#intro",
      label: "Introduction",
      icon: <Layout className="w-4 h-4" />,
    },
    { href: "#about", label: "About", icon: <User className="w-4 h-4" /> },
    {
      href: "#projects",
      label: "Projects",
      icon: <Code className="w-4 h-4" />,
    },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full px-4 bg-background/80 backdrop-blur-sm">
        <div className="relative py-4 max-w-6xl mx-auto">
          <div className="absolute inset-0" />
          <div className="relative flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <Logo className="w-8 h-8 fill-gray-600 dark:fill-white" />
            </a>

            <div className="flex items-center justify-center gap-8">
              {navItems.map(({ href, label, icon }) => (
                <NavLink
                  key={href}
                  href={href}
                  active={activeSection === href.slice(1)}
                  label={label}
                >
                  {icon}
                </NavLink>
              ))}
            </div>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default TopNavigation;
