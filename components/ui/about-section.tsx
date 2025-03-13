"use client";

import { FC, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import SkillBadge from "./skill-badge";
import FloatingBadge from "./floating-badge";
import GitHubContributions from "./github-contributions";
import aboutImg from "@/public/about.png";

// Create a categorized skills object for better organization
const skillCategories = [
  {
    name: "Frontend",
    icon: "🎨",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Next.js",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    name: "Backend",
    icon: "⚙️",
    skills: ["C#", ".NET", "PHP", "Laravel", "CodeIgniter", "Node.js"],
  },
  {
    name: "Mobile",
    icon: "📱",
    skills: ["React Native", "Swift", "Kotlin", "Objective-C", "Android Java"],
  },
  {
    name: "Database",
    icon: "🗄️",
    skills: [
      "MSSQL",
      "MySQL",
      "SQLite",
      "MongoDB",
      "CouchDB",
      "Prisma",
      "NHibernate",
      "TypeORM",
      "Drizzle",
    ],
  },
  {
    name: "Testing",
    icon: "🧪",
    skills: ["Jest", "xUnit", "Detox", "Maestro", "Selenium", "Katalon"],
  },
  {
    name: "DevOps",
    icon: "🚀",
    skills: ["AWS", "Docker", "Git", "Azure DevOps", "AppCenter", "Linux Bash"],
  },
  {
    name: "API & Data",
    icon: "🔌",
    skills: ["RESTful API", "GraphQL", "JSON", "Markdown"],
  },
  {
    name: "Methodologies",
    icon: "📋",
    skills: ["Agile", "Scrum", "TDD", "Clean Code", "Design Patterns"],
  },
];

// Timeline data for work experience
const experienceTimeline = [
  {
    period: "June 2022 - Present",
    role: "Research & Development Leader",
    company: "PT. Quadrant Synergy International",
    description:
      "Lead technology exploration and innovation for product development. Evaluate and implement new technologies to enhance project capabilities.",
    highlights: [
      "Technology Research",
      "Innovation Leadership",
      "Product Development",
    ],
  },
  {
    period: "April 2021 - June 2022",
    role: "IT Full Stack Developer",
    company: "PT. Quadrant Synergy International",
    description:
      "Developed full-stack solutions using C# .NET backend and React Native frontend for company projects.",
    highlights: ["Full Stack Development", "C# .NET", "React Native"],
  },
  {
    period: "March 2018 - April 2022",
    role: "IT Mobile Developer",
    company: "PT. Quadrant Synergy International",
    description:
      "Built hybrid mobile applications using React Native for various company projects.",
    highlights: [
      "Mobile Development",
      "React Native",
      "Cross-platform Solutions",
    ],
  },
  {
    period: "February 2017 - March 2018",
    role: "IT Mobile Developer",
    company: "Central Office of LP3I Jakarta Polytechnic",
    description:
      "Developed Android mobile applications using native Android Java.",
    highlights: ["Android Development", "Java", "Mobile Apps"],
  },
];

// Add the open source projects data
const openSourceProjects = [
  {
    name: "React Native Android Shadow",
    description:
      "A React Native library that provides consistent shadow API between iOS and Android platforms, making it easier to implement cross-platform shadow effects.",
    link: "https://github.com/vesselsoft/react-native-android-shadow",
    tech: ["React Native", "Android", "Java", "JavaScript"],
  },
  {
    name: "Metro Minify Obfuscator",
    description:
      "A React Native bundler enhancement that provides code obfuscation capabilities for bundled JavaScript code, built on top of the JavaScript Obfuscator library.",
    link: "https://github.com/vesselsoft/metro-minify-obfuscator",
    tech: ["React Native", "Metro Bundler", "JavaScript"],
  },
];

const AboutSection: FC = () => {
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
      id="about"
      className="py-24 w-full max-w-6xl mx-auto px-4 min-h-screen relative flex flex-col justify-center"
    >
      {/* Section title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl sm:text-5xl font-bold inline-block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
          {...fadeInUp}
        >
          About Me
        </motion.h2>
        <motion.div
          className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* First section - Personal info with visual */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          className="space-y-6 order-2 lg:order-1"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            As a{" "}
            <span className="font-medium text-foreground">
              Software Engineer and proud father
            </span>
            , I bring both technical expertise and a nurturing perspective to my
            work. Since 2017, I&apos;ve been crafting web and mobile applications
            while balancing the joys of parenthood. My journey includes earning
            a{" "}
            <span className="font-medium text-foreground">
              Bachelor of Information Technology degree
            </span>{" "}
            (2020) from Mohammad Husni Thamrin University.
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Being a father has enhanced my ability to think creatively and solve
            problems with patience and empathy. As a fast learner and open
            source enthusiast, I channel this mindset into creating innovative
            solutions that make a positive impact. I believe in building
            applications that not only solve technical challenges but also
            contribute to making the digital world more accessible and
            family-friendly.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-blue-500"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 10.5C7 9.11929 8.11929 8 9.5 8C10.8807 8 12 9.11929 12 10.5C12 11.8807 10.8807 13 9.5 13H7V10.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 8H16.5C17.8807 8 19 9.11929 19 10.5C19 11.8807 17.8807 13 16.5 13H14V8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 13V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Full-Stack</h4>
                <p className="text-sm text-muted-foreground">Development</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-purple-500"
                >
                  <path
                    d="M12 16V12M12 8H12.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Problem Solver</h4>
                <p className="text-sm text-muted-foreground">
                  Analytical Thinker
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-green-500"
                >
                  <path
                    d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.59 13.51L15.42 17.49"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.41 6.51L8.59 10.49"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Team Player</h4>
                <p className="text-sm text-muted-foreground">
                  Collaborative Approach
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[550px] order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">

              <div className="relative h-full w-full flex items-center justify-center rounded-xl overflow-hidden">
                <Image
                  src={aboutImg}
                  alt="Development"
                  width={400}
                  height={400}
                  className="object-containf w-full h-full object-center"
                />
              </div>

              <FloatingBadge className="top-4 right-4 rotate-[3deg]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-500"
                >
                  <path
                    d="M22 9L12 5L2 9L12 13L22 9ZM22 9V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 11.5V16.5C6 16.5 8.5 19 12 19C15.5 19 18 16.5 18 16.5V11.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-medium">Bachelor of IT</span>
              </FloatingBadge>

              <FloatingBadge className="bottom-4 left-4 rotate-[-3deg]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-green-500"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16V12M12 8H12.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-sm font-medium">Problem Solver</span>
              </FloatingBadge>

              <FloatingBadge className="top-20 -left-4 rotate-[-6deg]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-purple-500"
                >
                  <path
                    d="M7 8H17M7 12H17M9 16H15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Open Source Enthusiast
                </span>
              </FloatingBadge>

              <motion.div
                className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-blue-500/60"
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
                className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-purple-500/60"
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
            </div>
          </div>
        </motion.div>
      </div>

      {/* Experience Timeline Section */}
      <motion.div className="mb-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl" />

        <motion.h3
          className="text-2xl font-bold mb-12 text-center relative"
          {...fadeInUp}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Professional Experience
          </span>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h3>

        <div className="relative pl-8 ml-4 space-y-8">
          <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent" />

          {experienceTimeline.map((experience, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            >
              <div className="absolute -left-[41px] mt-2 h-5 w-5">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-[2px] bg-background rounded-full" />
                <div className="absolute inset-[4px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-110 transition-transform" />
              </div>

              <div className="bg-background/30 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-blue-500/30 transition-colors">
                <div className="mb-1 text-sm font-medium text-blue-500/80">
                  {experience.period}
                </div>
                <h4 className="text-xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {experience.role}
                </h4>
                <div className="text-muted-foreground/80 font-medium">
                  {experience.company}
                </div>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
                <div className="flex gap-2 mt-4 flex-wrap">
                  {experience.highlights.map((highlight, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.4 + index * 0.1 + i * 0.05,
                      }}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-500/5 text-blue-500 border border-blue-500/10 hover:border-blue-500/30 hover:bg-blue-500/10 transition-colors"
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            className="absolute -left-[14px] bottom-0"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(59, 130, 246, 0.4)",
                "0 0 0 8px rgba(59, 130, 246, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <div className="h-4 w-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
          </motion.div>
        </div>
      </motion.div>

      {/* Open Source Projects Section */}
      <motion.div
        className="mb-24 relative"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl" />

        <motion.h3
          className="text-2xl font-bold mb-12 text-center relative"
          {...fadeInUp}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Open Source Contributions
          </span>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h3>

        <GitHubContributions className="mb-12 p-4 rounded-xl border border-border/50 bg-background/30 backdrop-blur-sm" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {openSourceProjects.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="p-6 h-full rounded-xl border border-border/50 bg-background/30 backdrop-blur-sm hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <svg
                    className="w-6 h-6 text-blue-500 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                      fill="currentColor"
                    />
                  </svg>
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                    {project.name}
                  </h4>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-500/5 text-blue-500 border border-blue-500/10 group-hover:border-blue-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="absolute right-6 top-6 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-500"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Skills Categories Section */}
      <motion.div
        className="mb-16 relative"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl" />

        <motion.h3
          className="text-2xl font-bold mb-12 text-center relative"
          {...fadeInUp}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Technical Skills
          </span>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              className="p-6 rounded-xl border border-border/50 bg-background/30 backdrop-blur-sm hover:border-blue-500/30 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + catIndex * 0.1 }}
              whileHover={{
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.1)",
                background:
                  "linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0))",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </span>
                <h4 className="text-lg font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {category.name}
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <SkillBadge
                    key={`${category.name}-${skill}`}
                    name={skill}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Final Quote Section */}
      <motion.div
        className="text-center max-w-3xl mx-auto mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          className="text-muted-foreground mx-auto mb-4 opacity-50"
        >
          <path
            d="M10 11H8V13H10V15H6V11C6 9.89543 6.89543 9 8 9H10V11ZM18 15H14V11C14 9.89543 14.8954 9 16 9H18V11H16V13H18V15Z"
            fill="currentColor"
          />
        </svg>
        <p className="text-xl italic text-muted-foreground">
          I believe the best digital solutions come from combining technical
          excellence with empathy and understanding - values I&apos;ve learned both
          as a developer and as a father.
        </p>
        <div className="mt-4 font-semibold">Muhamad Rizki</div>
        <div className="text-sm text-muted-foreground">Software Engineer</div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
