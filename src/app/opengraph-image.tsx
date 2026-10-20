import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ahmad × Alishba — 13–14 November 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#2A1418",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <p style={{ color: "#E4CD84", fontSize: 18, letterSpacing: "0.2em", margin: 0 }}>
          YOU ARE CORDIALLY INVITED
        </p>
        <h1 style={{ color: "#F8F1E4", fontSize: 72, margin: 0, fontWeight: 500 }}>
          Ahmad × Alishba
        </h1>
        <p style={{ color: "#F8F1E4", fontSize: 28, margin: 0, opacity: 0.7 }}>
          13–14 November 2026 · Jahanian, Pakistan
        </p>
      </div>
    ),
    { ...size }
  );
}
