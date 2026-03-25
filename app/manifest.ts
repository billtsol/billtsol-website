import type { MetadataRoute } from "next"
import { SITE_DESCRIPTION, SITE_NAME, SITE_HANDLE } from "@/lib/site-config"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — ${SITE_HANDLE}`,
    short_name: SITE_HANDLE,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0f",
    theme_color: "#0a0a0f",
    icons: [
      {
        src: "/icon.svg",
        type: "image/svg+xml",
        sizes: "any",
        purpose: "any",
      },
    ],
  }
}
