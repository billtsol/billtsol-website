"use client"

import { Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/billtsol",
    icon: Github,
    username: "billtsol",
    description: "Check out my repositories and projects"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/vasileios-tsolakidis",
    icon: Linkedin,
    username: "vasileios-tsolakidis",
    description: "Connect with me professionally"
  },
]

const contactInfo = [
  {
    label: "Email",
    value: "billtsol1@gmail.com",
    icon: Mail,
    href: "mailto:billtsol1@gmail.com"
  },
  {
    label: "Phone",
    value: "+30 699 698 6613",
    icon: Phone,
    href: "tel:+306996986613"
  },
  {
    label: "Location",
    value: "Greece",
    icon: MapPin,
    href: "https://maps.google.com/?q=Thessaloniki,Greece"
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 md:gap-4 mb-8 md:mb-12">
          <span className="text-primary font-mono text-sm">06.</span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Contact</h2>
          <div className="h-px flex-1 bg-border max-w-xs hidden sm:block" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Message */}
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4 text-balance">
              Ready to collaborate on the next frontier?
            </h3>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether deploying autonomous fleets, architecting microservices, 
              or mentoring the next wave of roboticists - the channel is open.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
            {/* Contact Info */}
            <div className="glass rounded-xl p-4 md:p-6 border border-border">
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-4 md:mb-6">Direct Contact</h4>
              <div className="space-y-3 md:space-y-4">
                {contactInfo.map((info, i) => (
                  <a
                    key={i}
                    href={info.href}
                    target={info.label === "Location" ? "_blank" : undefined}
                    rel={info.label === "Location" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 md:gap-4 p-2.5 md:p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <info.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs md:text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-sm md:text-base text-foreground font-medium truncate">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass rounded-xl p-4 md:p-6 border border-border">
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-4 md:mb-6">Connect Online</h4>
              <div className="space-y-3 md:space-y-4">
                {socialLinks.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 p-2.5 md:p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                  >
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <social.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm md:text-base text-foreground font-medium flex items-center gap-2">
                        {social.name}
                        <ExternalLink className="w-3 h-3 text-muted-foreground" />
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground truncate">{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button size="default" className="group md:text-base" asChild>
              <a href="mailto:billtsol1@gmail.com">
                <Send className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
