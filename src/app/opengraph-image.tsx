import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Ahmad × Alishba — 13–14 November 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const imageData = await readFile(join(process.cwd(), "public/hero-couple.png"));
  const base64 = `data:image/png;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={base64} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(42,20,24,0.85) 0%, rgba(42,20,24,0.2) 60%, transparent 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 60,
            gap: 10,
          }}
        >
          <p style={{ color: "#E4CD84", fontSize: 18, letterSpacing: "0.2em", margin: 0 }}>
            WEDDING INVITATION
          </p>
          <h1 style={{ color: "#F8F1E4", fontSize: 56, margin: 0, fontWeight: 500 }}>
            Tariq Mehmood
          </h1>
          <p style={{ color: "#F8F1E4", fontSize: 24, margin: 0, opacity: 0.75 }}>
            invites you to his daughter&apos;s wedding
          </p>
          <p style={{ color: "#E4CD84", fontSize: 20, margin: 0 }}>
            13–14 November 2026 · Jahanian, Pakistan
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
