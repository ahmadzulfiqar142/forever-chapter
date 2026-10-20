import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Ahmad and Alishba's wedding invitation — 13–14 November 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const imageData = await readFile(join(process.cwd(), "public/hero-couple-og.png"));
  const coupleImage = `data:image/png;base64,${imageData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#f2ece4",
        }}
      >
        <div
          style={{
            width: "52%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px",
            background: "#2d1719",
            color: "#fffaf2",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#d5b875",
              fontSize: 19,
              letterSpacing: 5,
              textTransform: "uppercase",
            }}
          >
            Wedding Invitation
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 26,
              fontSize: 64,
              lineHeight: 1.08,
              fontWeight: 500,
            }}
          >
            Ahmad <span style={{ color: "#d5b875", margin: "0 14px" }}>×</span> Alishba
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              color: "#e4d9d0",
              fontSize: 27,
            }}
          >
            13–14 November 2026
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 12,
              color: "#e4d9d0",
              fontSize: 23,
            }}
          >
            Jahanian, Pakistan
          </div>
          <div
            style={{
              display: "flex",
              width: 90,
              height: 3,
              marginTop: 38,
              background: "#d5b875",
            }}
          />
        </div>
        <div
          style={{
            width: "48%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f2ece4",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={coupleImage}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
