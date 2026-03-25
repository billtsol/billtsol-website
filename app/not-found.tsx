import type { Metadata } from "next"
import Link from "next/link"
import { SITE_NAME } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: `The page you're looking for doesn't exist. Return to ${SITE_NAME}'s portfolio.`,
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-lg mx-auto">
        {/* 404 visual */}
        <div className="space-y-2">
          <p className="font-mono text-sm text-muted-foreground tracking-widest uppercase">
            Error 404
          </p>
          <h1 className="text-7xl sm:text-9xl font-bold text-primary/20 select-none">
            404
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            This URL doesn&apos;t exist. Maybe it was moved, renamed, or never
            launched.
          </p>
        </div>

        {/* Navigation back */}
        <nav aria-label="Return navigation" className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
          >
            ← Back to Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* SEO-friendly breadcrumb hint */}
        <p className="text-xs text-muted-foreground/60 font-mono">
          {SITE_NAME} · billtsol
        </p>
      </div>
    </main>
  )
}
