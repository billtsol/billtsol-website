"use client";

import { Cpu, Code2, Users, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    title: "Robotics & Embedded Systems",
    icon: Cpu,
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "ESP32/Arduino (C/C++)", level: 70, label: "Advanced" },
      { name: "PID Control & Motor Systems", level: 75, label: "Practical" },
      { name: "Computer Vision (YOLO/OpenCV)", level: 45, label: "Basics" },
      { name: "Circuit & PCB Design (KiCad)", level: 55, label: "Basics" },
    ],
  },
  {
    title: "Software Development & DevOps",
    icon: Code2,
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Python / Java / C++", level: 70, label: "Practical" },
      { name: "JavaScript/TypeScript & React", level: 80, label: "Advanced" },
      { name: "Spring Boot / Django / Node.js", level: 65, label: "Practical" },
      { name: "Docker & Kubernetes", level: 60, label: "Basics" },
      { name: "REST APIs & Microservices", level: 75, label: "Practical" },
    ],
  },
];

const softSkills = [
  { name: "Team Leadership", description: "15+ members" },
  {
    name: "International Collaboration",
    description: "Erasmus+ & EU projects",
  },
  { name: "Agile Methodologies", description: "Scrum & Kanban" },
  { name: "Problem-Solving", description: "Competitive pressure" },
  { name: "Cross-cultural Adaptability", description: "25 countries" },
];

const certifications = [
  {
    name: "AI Automation: Build LLM Apps & AI-Agents",
    provider: "Udemy",
    tech: "n8n & APIs",
  },
  {
    name: "Meta Full Stack Developer Professional Certificate",
    provider: "Coursera",
    tech: "Full Stack",
  },
  {
    name: "Build a Backend REST API with Django",
    provider: "Udemy",
    tech: "Django",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <span className="text-primary font-mono text-sm">05.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Skill Constellation
          </h2>
          <div className="h-px flex-1 bg-border max-w-xs hidden sm:block" />
        </div>

        {/* Technical Skills Grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass rounded-xl p-5 md:p-6 border border-border hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shrink-0`}
                >
                  <category.icon className="w-5 h-5 text-foreground" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {skill.name}
                      </span>
                      <span className="text-primary font-mono">
                        {skill.label}
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-1.5" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills & Certifications */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Soft Skills */}
          <div className="glass rounded-xl p-5 md:p-6 border border-border">
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                Soft Skills
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {softSkills.map((skill, i) => (
                <div
                  key={i}
                  className="p-3 md:p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <p className="font-medium text-foreground text-sm">
                    {skill.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass rounded-xl p-5 md:p-6 border border-border">
            <div className="flex items-center gap-3 mb-5 md:mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-foreground">
                Certifications
              </h3>
            </div>

            <div className="space-y-3 md:space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <div className="min-w-0">
                    <p className="font-medium text-foreground text-sm leading-tight">
                      {cert.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {cert.provider} - {cert.tech}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Languages */}
        <div className="mt-6 md:mt-8 glass rounded-xl p-5 md:p-6 border border-border">
          <h3 className="text-base md:text-lg font-semibold text-foreground mb-4">
            Additional Info
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Languages</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-muted text-xs md:text-sm">
                  English <span className="text-primary">(C1)</span>
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-muted text-xs md:text-sm">
                  Greek <span className="text-primary">(Native)</span>
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Interests</p>
              <p className="text-xs md:text-sm text-foreground">
                Travel (25 countries), Competitive Robotics, AI-Engineering
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">
                Driver{"'"}s License
              </p>
              <p className="text-xs md:text-sm text-foreground">Category B</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
