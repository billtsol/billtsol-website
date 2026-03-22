"use client";

import { GraduationCap, Plane, Code2 } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <span className="text-primary font-mono text-sm">01.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Mission Brief
          </h2>
          <div className="h-px flex-1 bg-border max-w-xs hidden sm:block" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - About Text */}
          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Robotics & embedded systems engineer with deep operational
              experience in
              <span className="text-primary"> autonomous navigation</span>,
              <span className="text-primary"> PID control loops</span>, and
              <span className="text-primary"> production microservices</span>.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              I am a hands-on architect of full-stack hardware-software
              ecosystems: KiCad circuit design, ESP32/Arduino C/C++ firmware,
              YOLO-powered computer vision, and Kubernetes-orchestrated Spring
              Boot platforms.
            </p>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              Academic and competition-proven leader who co-founded the
              University of Macedonia{"'"}s first robotics team, secured
              national podium placements, and delivered enterprise systems
              serving public organizations across 11+ European countries.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 pt-4 md:pt-6">
              {[
                { value: "3", label: "Years", sublabel: "4yr degree" },
                { value: "11+", label: "EU Countries", sublabel: "Served" },
                { value: "25%", label: "Latency", sublabel: "Reduction" },
                { value: "25", label: "Countries", sublabel: "Traveled" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-3 md:p-4 rounded-lg glass border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="text-xl md:text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground/60">
                    {stat.sublabel}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Education & Highlights */}
          <div className="space-y-4 md:space-y-6">
            {/* Education Card */}
            <div className="glass rounded-xl p-4 md:p-6 border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2.5 md:p-3 rounded-lg bg-primary/10 shrink-0">
                  <GraduationCap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    B.Sc. Computer Science
                  </h3>
                  <p className="text-primary font-medium text-sm md:text-base">
                    University of Macedonia
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    GPA 8.43/10 - Accelerated Completion in 3 years
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Oct 2021 - Jul 2025 (4 years degree)
                  </p>
                  <div className="mt-3 md:mt-4 p-2.5 md:p-3 rounded-lg bg-muted/50">
                    <p className="text-xs md:text-sm font-medium text-foreground">
                      Undergraduate Thesis
                    </p>
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {'"'}Maze Robot: Autonomous Navigation System{'"'}
                    </p>
                    <p className="text-xs text-primary mt-1">
                      ESP32-S3 - YOLO - A* Algorithm - 30% efficiency gain
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Erasmus Card */}
            <div className="glass rounded-xl p-4 md:p-6 border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2.5 md:p-3 rounded-lg bg-accent/10 shrink-0">
                  <Plane className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-foreground">
                    Erasmus+ Exchange
                  </h3>
                  <p className="text-primary font-medium text-sm md:text-base">
                    University of Pisa
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Pisa, Italy - Sep 2024 - Jan 2025
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-2">
                    Immersed in international AI and data-science coursework
                    within a multicultural research environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Curriculum Tags */}
            <div className="space-y-2 md:space-y-3">
              <h4 className="text-xs md:text-sm font-medium text-foreground flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                Core Curriculum
              </h4>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {[
                  "Algorithms",
                  "Data Structures",
                  "Databases",
                  "Computer Vision",
                  "AI",
                  "Embedded Systems",
                  "Software Engineering",
                ].map((course) => (
                  <span
                    key={course}
                    className="px-2 md:px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
