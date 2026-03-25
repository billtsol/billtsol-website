import { ImageResponse } from "next/og"
import { SITE_HANDLE, SITE_NAME } from "@/lib/site-config"

export const runtime = "edge"

export const alt = `${SITE_NAME} — ${SITE_HANDLE}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0f172a 100%)",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 36,
              color: "rgba(255,255,255,0.55)",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            {SITE_HANDLE}
          </span>
          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              fontFamily: "system-ui, sans-serif",
              maxWidth: 900,
            }}
          >
            {SITE_NAME}
          </span>
          <span
            style={{
              fontSize: 32,
              color: "rgba(96, 165, 250, 0.95)",
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Robotics & Embedded Systems Engineer
          </span>
        </div>
      </div>
    ),
    { ...size },
  )
}
