"use client"

import { Briefcase, ExternalLink, Users, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Junior Software Engineer",
    company: "NETCOMPANY",
    location: "Greece",
    type: "Hybrid",
    period: "Jul 2025 - Present",
    description: "Architected and maintained a large-scale microservice platform powering public-sector organizations across 11+ EU countries.",
    achievements: [
      "Built event-driven architectures with Spring Boot, PostgreSQL, and Apache Kafka",
      "Containerized and orchestrated 80+ microservices using Docker + Kubernetes",
      "Implemented full CI/CD pipelines in international Agile squads",
      "Delivered measurable impact: reduced system latency by 25%"
    ],
    technologies: ["Spring Boot", "PostgreSQL", "Kafka", "Docker", "Kubernetes", "CI/CD"],
    highlight: true,
  },
  {
    title: "Junior Software Engineer",
    company: "Flarmio",
    location: "Greece",
    type: "Remote",
    period: "Jan 2025 - Jul 2025",
    description: "Engineered full-stack solutions spanning React/Next.js frontends and Node.js/TypeScript REST APIs.",
    achievements: [
      "Contributed across Search Engine and Custom Systems teams",
      "Took ownership of additional responsibilities beyond initial role",
      "Optimized ERP data operations, improving efficiency by 40%"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "GraphQL"],
    highlight: false,
  },
]

const leadership = [
  {
    title: "Founder & Team Leader",
    organization: "Heron Robotics Team",
    affiliation: "University of Macedonia",
    period: "Oct 2023 - Present",
    members: "15+ members",
    description: "Co-founded and scaled the university's inaugural robotics collective. Directed development of autonomous embedded systems for national and international competitions.",
    achievements: [
      "Mentored juniors in Arduino/ESP32 firmware, KiCad circuit design, PID tuning",
      "Secured UML 2024 - 2nd Place Nationally",
      "Led team to Hero Robotics Challenge - 3rd Place Nationally (Jun 2024)"
    ],
    links: [
      { label: "News Article", url: "https://www.foititikanea.gr/πανεπιστήμια/πανεπιστήμιο-μακεδονίας/31107-diakrise-me-ten-prote-gia-ten-omada-rompotikes-heron-tou-pamak" },
      { label: "Instagram", url: "https://www.instagram.com/heron_robotics/" }
    ]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <span className="text-primary font-mono text-sm">02.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Experience</h2>
          <div className="h-px flex-1 bg-border max-w-xs hidden sm:block" />
        </div>

        {/* Professional Experience */}
        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
          <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
            <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            Professional Experience
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10 md:pl-20 pb-8 md:pb-12 last:pb-0">
                {/* Timeline Dot */}
                <div className={`absolute left-4 md:left-8 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 ${exp.highlight ? 'bg-primary border-primary animate-pulse' : 'bg-card border-border'}`} />

                <div className={`glass rounded-xl p-4 md:p-6 border ${exp.highlight ? 'border-primary/30' : 'border-border'} hover:border-primary/50 transition-all`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 md:gap-4 mb-3 md:mb-4">
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium text-sm md:text-base">{exp.company}</p>
                      <p className="text-xs md:text-sm text-muted-foreground">{exp.location} - {exp.type}</p>
                    </div>
                    <Badge variant="outline" className="font-mono text-xs self-start shrink-0">
                      {exp.period}
                    </Badge>
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">{exp.description}</p>

                  <ul className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                        <span className="text-primary mt-0.5">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Robotics */}
        <div className="space-y-6 md:space-y-8">
          <h3 className="text-lg md:text-xl font-semibold text-foreground flex items-center gap-2">
            <Rocket className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            Leadership & Robotics
          </h3>

          {leadership.map((role, index) => (
            <div key={index} className="glass rounded-xl p-4 md:p-6 border border-border hover:border-primary/30 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 md:gap-4 mb-3 md:mb-4">
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground">{role.title}</h4>
                  <p className="text-primary font-medium text-sm md:text-base">{role.organization}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{role.affiliation}</p>
                </div>
                <div className="sm:text-right">
                  <Badge variant="outline" className="font-mono text-xs mb-1 md:mb-2">
                    {role.period}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
                    <Users className="w-3 h-3 md:w-4 md:h-4" />
                    {role.members}
                  </div>
                </div>
              </div>

              <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">{role.description}</p>

              <ul className="space-y-1.5 md:space-y-2 mb-3 md:mb-4">
                {role.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5">▹</span>
                    {achievement}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {role.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs md:text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
