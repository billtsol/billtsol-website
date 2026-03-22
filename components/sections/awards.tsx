"use client"

import { Trophy, Medal, Star, Award } from "lucide-react"

const awards = [
  {
    title: "UML 2024",
    achievement: "2nd Place Nationally",
    organization: "Heron Robotics Team",
    year: "2024",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    description: "Led the team to national recognition in the Unknown Mission League robotics competition."
  },
  {
    title: "Hero Robotics Challenge",
    achievement: "3rd Place Nationally",
    organization: "Heron Robotics Team",
    year: "2024",
    icon: Medal,
    color: "from-amber-500 to-yellow-500",
    description: "Designed and optimized an autonomous line-following robot for competitive deployment."
  },
  {
    title: "Greek Collegiate Programming Contest",
    achievement: "National Qualifier",
    organization: "GRCPC / ICPC",
    year: "2023",
    icon: Star,
    color: "from-blue-500 to-cyan-500",
    description: "Qualified at national level demonstrating algorithmic thinking and problem-solving under pressure."
  },
  {
    title: "Best Software Technology Project",
    achievement: "Academic Excellence",
    organization: "Prof. Alexandros Chatzigeorgiou",
    year: "2022-2023",
    icon: Award,
    color: "from-purple-500 to-pink-500",
    description: "Settlers of Catan project recognized for complete object-oriented software engineering lifecycle."
  },
]

export function AwardsSection() {
  return (
    <section id="awards" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <span className="text-primary font-mono text-sm">04.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Awards & Recognition</h2>
          <div className="h-px flex-1 bg-border max-w-xs hidden sm:block" />
        </div>

        {/* Awards Grid */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {awards.map((award, index) => (
            <div 
              key={index}
              className="glass rounded-xl p-4 md:p-6 border border-border hover:border-primary/30 transition-all group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-br ${award.color} opacity-5 blur-2xl group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative flex items-start gap-3 md:gap-4">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <award.icon className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="text-base md:text-lg font-semibold text-foreground truncate">{award.title}</h3>
                      <p className="text-primary font-medium text-sm md:text-base">{award.achievement}</p>
                    </div>
                    <span className="text-xs md:text-sm text-muted-foreground font-mono shrink-0">{award.year}</span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1">{award.organization}</p>
                  <p className="text-xs md:text-sm text-muted-foreground/80 mt-2 md:mt-3 line-clamp-2">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Travel Achievement */}
        <div className="mt-6 md:mt-8 glass rounded-xl p-5 md:p-8 border border-border text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 mb-3 md:mb-4">
            <span className="text-2xl md:text-3xl">🌍</span>
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">30-Day European Expedition</h3>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Independently organized and completed a solo trip across{" "}
            <span className="text-primary font-semibold">11 European countries</span> in 30 days, 
            demonstrating autonomy, cultural adaptability, and organizational skills.
          </p>
          <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mt-3 md:mt-4">
            {["Rome", "Pisa", "Zurich", "Vienna", "Budapest", "Prague", "Berlin"].map((city) => (
              <span key={city} className="px-2 md:px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
