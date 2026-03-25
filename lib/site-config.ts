/**
 * Canonical site identity for SEO, structured data, and metadata.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://billtsol.vercel.app).
 */
export const SITE_NAME = "Vasileios Tsolakidis";
export const SITE_HANDLE = "billtsol";
export const SITE_TITLE =
  "Vasileios Tsolakidis (billtsol) | Robotics & Embedded Systems Engineer";
export const SITE_DESCRIPTION =
  "Official site of Vasileios Tsolakidis — robotics & embedded systems engineer (@billtsol on GitHub). Computer vision, PID control, ESP32, and scalable systems. Based in Greece.";

export const SITE_KEYWORDS = [
  "Vasileios Tsolakidis",
  "billtsol",
  "Vasileios Tsolakidis billtsol",
  "robotics engineer",
  "embedded systems engineer",
  "Greece",
  "computer vision",
  "ESP32",
  "autonomous systems",
] as const;

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  // VERCEL_PROJECT_PRODUCTION_URL is always the stable production domain (never preview URLs)
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL.replace(/\/$/, "")}`;
  }
  // VERCEL_URL is per-deployment — only use it in development/preview, not as canonical
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }
  return "http://localhost:3000";
}

export const SOCIAL = {
  github: "https://github.com/billtsol",
  linkedin: "https://www.linkedin.com/in/vasileios-tsolakidis",
  email: "mailto:billtsol1@gmail.com",
} as const;
