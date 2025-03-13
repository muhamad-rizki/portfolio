"use client";

import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./project-card";

const ProjectsSection: FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      title: "SIDARLING Project",
      description:
        "An application project for a university thesis used to manage waste processing and recording at PT. PLN. I was responsible for developing the Frontend application using NextJS and Backend using PHP.",
      tags: ["NextJS", "PHP", "React", "Tailwind CSS", "Web Application"],
      projectUrl: "#",
      imageUrl: "/projects/sidarling-project.png",
      year: 2023,
    },
    {
      title: "LP3I Mobile Services",
      description:
        "A mobile apps that used by LP3I Students and Lecturers to access their academic information. I was responsible for the fullstack development of this app. Using PHP CodeIgniter as Backend and Native Java Android for Frontend",
      tags: ["Android", "PHP", "CodeIgniter", "Java", "Mobile Apps"],
      projectUrl: "#",
      imageUrl: "/projects/lp3i-mobile.png",
      year: 2018,
    },
    {
      title: "JSON Form Demo App",
      description:
        "A project used by PT. Quadrant Synergy International clients to preview dynamic forms created based on JSON schema. I was responsible for developing the JSON-based dynamic form framework using Node.js and the demo application using Next.js.",
      tags: [
        "NextJS",
        "Node.js",
        "JSON Schema",
        "Dynamic Forms",
        "Web Application",
      ],
      projectUrl: "#",
      imageUrl: "/projects/jsonform-demoapp.png",
      year: 2024,
    },
    {
      title: "STIAMI Mobile",
      description:
        "A mobile apps that used by STIAMI Students to access their academic information. I was responsible for the mobile apps development that using React Native.",
      tags: ["React Native", "Mobile Apps"],
      projectUrl: "#",
      imageUrl: "/projects/stiami-mobile.png",
      year: 2020,
    },
    {
      title: "Quadrant Appcenter",
      description:
        "A project for releasing mobile applications for internal development at PT Quadrant Synergy International. I was responsible for developing the application from building apps to releasing them to Appcenter.",
      tags: [
        "React",
        "React Native",
        "Git",
        "AppCenter",
        "CI/CD",
        "Mobile Apps",
      ],
      projectUrl: "#",
      imageUrl: "/projects/quadrant-appcenter.png",
      year: 2023,
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section
      ref={ref}
      id="projects"
      className="py-24 w-full max-w-6xl mx-auto px-4 min-h-screen relative flex flex-col justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-3xl" />

      {/* Section Title */}
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
          Projects I've Worked On
        </motion.h2>
        <motion.div
          className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
        <motion.p
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A collection of personal and professional projects I've developed,
          from open-source libraries to full-stack applications
        </motion.p>
      </motion.div>

      {/* Projects Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 relative">
        {projects.sort((a, b) => b.year - a.year).map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="break-inside-avoid mb-6"
          >
            <div className="group">
              <div className="rounded-xl border border-border/50 bg-background/30 backdrop-blur-sm hover:border-blue-500/30 transition-all">
                <ProjectCard {...project} index={index} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-blue-500/60"
        animate={
          true && {
            x: [0, 15, 0, -15, 0],
            y: [0, -10, 0, 10, 0],
          }
        }
        transition={
          true && {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }
        }
      />

      <motion.div
        className="absolute top-1/3 left-1/4 w-3 h-3 rounded-full bg-purple-500/60"
        animate={
          true && {
            x: [0, -20, 0, 20, 0],
            y: [0, 15, 0, -15, 0],
          }
        }
        transition={
          true && {
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }
        }
      />
    </section>
  );
};

export default ProjectsSection;
