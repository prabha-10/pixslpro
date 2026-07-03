import { ImageResponse } from "next/og";

export const alt = "PIXSL — Websites & AI Agents for B2B Service Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Branded social card, generated at build time. Kept Satori-safe: flexbox only,
// no blur filters or unsupported CSS.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0A",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: 9999,
              backgroundColor: "#E8602A",
              marginRight: 16,
            }}
          />
          <div
            style={{
              color: "#9CA3AF",
              fontSize: 28,
              letterSpacing: 6,
              textTransform: "uppercase",
            }}
          >
            Websites · AI Agents
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              fontSize: 170,
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1,
            }}
          >
            PIXSL<span style={{ color: "#E8602A" }}>.</span>
          </div>
          <div
            style={{
              color: "#D1D5DB",
              fontSize: 46,
              marginTop: 28,
              maxWidth: 920,
            }}
          >
            Websites &amp; AI agents for B2B service businesses.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: "#FF8A5C", fontSize: 32, fontWeight: 600 }}>
            pixsl.pro
          </div>
          <div style={{ color: "#6B7280", fontSize: 28 }}>
            Build. Automate. Scale.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
