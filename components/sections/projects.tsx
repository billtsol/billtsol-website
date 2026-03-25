"use client";

import {
  Github,
  ExternalLink,
  Cpu,
  Bot,
  Server,
  Gamepad2,
  Trophy,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Autonomous Maze-Solving Robot",
    subtitle: "Undergraduate Thesis",
    year: "2024",
    description:
      "Full hardware design & assembly in KiCad. ESP32-S3 C++ firmware controlling motors, sensors, and real-time mapping. Python YOLOv3 + OpenCV for live object recognition via ESP32-CAM. A* path planning with 30% efficiency improvement.",
    icon: Bot,
    technologies: [
      "ESP32-S3",
      "C++",
      "Python",
      "YOLOv3",
      "OpenCV",
      "KiCad",
      "Node.js",
      "WebSocket",
      "A* Algorithm",
    ],
    github: "https://github.com/billtsol/maze-robot",
    featured: true,
    highlights: [
      "Custom PCB design in KiCad",
      "Real-time object recognition",
      "30% navigation efficiency gain",
      "Bidirectional WebSocket communication",
    ],
  },
  {
    title: "Line-Following Robot with PID Control",
    subtitle: "Competition Robot",
    year: "Dec 2023 - Apr 2024",
    description:
      "Custom KiCad PCB, infrared sensor array, Arduino/ESP32 C firmware. Implemented and tuned PID control loops for championship-level line-tracking performance.",
    icon: Cpu,
    technologies: ["Arduino", "ESP32", "KiCad", "C/C++", "PID Control"],
    github: "https://github.com/billtsol/line-follower",
    featured: true,
    highlights: [
      "Championship-level performance",
      "Custom PCB design",
      "Advanced PID tuning",
      "Hero Robotics Challenge - 3rd Place",
    ],
  },
  {
    title: "Python REST Platform",
    subtitle: "Production API",
    year: "Mar 2022 - Sep 2022",
    description:
      "Built production-grade RESTful APIs with Django, authentication endpoints, and Swagger documentation. Containerized with Docker, deployed on AWS.",
    icon: Server,
    technologies: [
      "Django",
      "Python",
      "Docker",
      "AWS",
      "GitHub Actions",
      "Swagger",
      "REST API",
    ],
    github: "https://github.com/billtsol/django-APIs",
    featured: false,
    highlights: [
      "Full test coverage",
      "AWS deployment",
      "Automated CI/CD",
      "Swagger documentation",
    ],
  },
  {
    title: "Sudoku Web Game Platform",
    subtitle: "Real-time Multiplayer",
    year: "Dec 2022 - Apr 2023",
    description:
      "Developed real-time multiplayer Sudoku using Vue.js frontend and Firebase backend. Implemented custom routing, state management, and live synchronization.",
    icon: Gamepad2,
    technologies: [
      "Vue.js",
      "Firebase",
      "JavaScript",
      "Real-time Sync",
      "Authentication",
    ],
    github: "https://github.com/billtsol/zen-zone",
    featured: false,
    highlights: [
      "Real-time multiplayer",
      "Cross-device sync",
      "User authentication",
      "Live game updates",
    ],
  },
  {
    title: "CarOps Auto Repair Management System",
    subtitle: "Software Technology Case Study",
    year: "2022-2023",
    description:
      "Fully meets the Case Study requirements, including complete workflows, user roles (with role-based login), and a usable graphical interface. Users select login type (1-5) and, for roles with multiple users, enter surname. Business rules (e.g., no assignment before owner approval) are strictly enforced.",
    icon: Trophy,
    technologies: ["Java", "OOP", "Swing GUI", "User Roles"],
    github: "https://github.com/CarOps-28/CarOps",
    featured: false,
    highlights: [
      "Case Study complete & fully working",
      "User-friendly GUI & role selection",
      "Strict workflow and permission logic",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <span className="text-primary font-mono text-sm">03.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Projects
          </h2>
          <div className="h-px flex-1 bg-border max-w-xs hidden sm:block" />
        </div>

        <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-2xl">
          All source repositories available at{" "}
          <a
            href="https://github.com/billtsol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline hover:no-underline"
          >
            github.com/billtsol
          </a>
        </p>

        {/* Featured Projects */}
        <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="glass rounded-xl p-4 md:p-8 border border-border hover:border-primary/30 transition-all group"
              >
                <div className="grid lg:grid-cols-5 gap-4 md:gap-8">
                  {/* Project Icon */}
                  <div className="lg:col-span-1 flex lg:justify-center">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <project.icon className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="lg:col-span-4 space-y-3 md:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 md:gap-4">
                      <div>
                        <Badge
                          variant="outline"
                          className="mb-2 text-primary border-primary/30 text-xs"
                        >
                          Featured
                        </Badge>
                        <h3 className="text-lg md:text-xl font-semibold text-foreground">
                          {project.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          {project.subtitle} - {project.year}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="self-start shrink-0"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>

                    <p className="text-sm md:text-base text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-1.5 md:gap-2">
                      {project.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground"
                        >
                          <span className="text-primary">▹</span>
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 md:gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 md:px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="glass rounded-xl p-4 md:p-6 border border-border hover:border-primary/30 transition-all group flex flex-col"
              >
                <div className="flex items-start justify-between mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground hover:text-primary" aria-hidden="true" />
                  </a>
                </div>

                <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-xs text-primary mb-2 md:mb-3">
                  {project.subtitle} - {project.year}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4 flex-1 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>
            ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 md:mt-12">
          <Button variant="outline" size="default" asChild>
            <a
              href="https://github.com/billtsol?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              View All Repositories
              <ExternalLink className="w-3 h-3 md:w-4 md:h-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
