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

      </div>
    ),
    { ...size }
  );
}
