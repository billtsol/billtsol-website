"use client";

import { useEffect, useState } from "react";
import { ArrowDown, MapPin, Phone, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const titles = [
  "Robotics Engineer",
  "Embedded Systems Developer",
  "Full-Stack Architect",
  "Autonomous Systems Pioneer",
];

export function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const title = titles[currentTitle];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < title.length) {
            setDisplayText(title.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentTitle((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle]);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20 px-4"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full glass border border-primary/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">
                Available for new missions
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-3 md:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                <span className="text-muted-foreground text-base sm:text-lg md:text-xl block mb-2">
                  {"I'm"}
                </span>
                Vasileios <span className="text-primary">Tsolakidis</span>
              </h1>
              <div className="h-8 md:h-12 flex items-center justify-center lg:justify-start">
                <span className="text-lg sm:text-xl md:text-2xl font-mono text-primary">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Pioneer of Autonomous Systems & Scalable Intelligence. I forge
              intelligent machines that think, adapt, and conquer complexity.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5 md:gap-2">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                <span>Greece</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                <span>+30 699 698 6613</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2">
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                <span>billtsol1@gmail.com</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              <Button
                size="default"
                className="group relative overflow-hidden text-sm md:text-base"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Button>
              <Button
                variant="outline"
                size="default"
                asChild
                className="text-sm md:text-base"
              >
                <a
                  href="https://github.com/billtsol"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="default"
                asChild
                className="text-sm md:text-base"
              >
                <a
                  href="https://linkedin.com/in/vasileios-tsolakidis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Robot/Tech Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-64 md:w-80 h-64 md:h-80">
              {/* Orbital Rings */}
              <div
                className="absolute inset-0 rounded-full border border-primary/20 animate-spin"
                style={{ animationDuration: "20s" }}
              />
              <div
                className="absolute inset-4 rounded-full border border-primary/30 animate-spin"
                style={{
                  animationDuration: "15s",
                  animationDirection: "reverse",
                }}
              />
              <div
                className="absolute inset-8 rounded-full border border-primary/40 animate-spin"
                style={{ animationDuration: "10s" }}
              />

              {/* Center Element */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-primary animate-pulse">
                    {"</"}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-2 font-mono">
                    SYSTEMS
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground font-mono">
                    ONLINE
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 md:w-12 h-10 md:h-12 rounded-lg bg-card border border-border flex items-center justify-center animate-float">
                <span className="font-mono text-xs text-primary">ESP32</span>
              </div>
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 md:w-12 h-10 md:h-12 rounded-lg bg-card border border-border flex items-center justify-center animate-float"
                style={{ animationDelay: "1s" }}
              >
                <span className="font-mono text-xs text-primary">YOLO</span>
              </div>
              <div
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 rounded-lg bg-card border border-border flex items-center justify-center animate-float"
                style={{ animationDelay: "2s" }}
              >
                <span className="font-mono text-xs text-primary">PID</span>
              </div>
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 rounded-lg bg-card border border-border flex items-center justify-center animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="font-mono text-xs text-primary">K8s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full glass hover:bg-primary/10 transition-colors"
          >
            <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
