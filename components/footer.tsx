"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 md:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <span className="font-mono text-xs md:text-sm font-bold text-primary">
                VT
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 text-center sm:text-left">
              <span className="text-sm md:text-base font-semibold text-foreground">
                Vasileios Tsolakidis
              </span>
              <span
                className="text-xs text-muted-foreground font-mono"
                aria-label="Online handle billtsol"
              >
                @billtsol
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 md:gap-4">
            <a
              href="https://github.com/billtsol"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://linkedin.com/in/vasileios-tsolakidis"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="mailto:billtsol1@gmail.com"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs md:text-sm text-muted-foreground">
            <p className="flex items-center gap-1 justify-center">
              Built with{" "}
              <Heart className="w-3 h-3 md:w-4 md:h-4 text-destructive fill-destructive" />{" "}
              by Lumireta
            </p>
            <p className="mt-1">
              {currentYear} Vasileios Tsolakidis. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
