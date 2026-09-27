import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad × Alishba — 13–15 November 2026",
  description: "You are cordially invited to the wedding of Ahmad Zulfiqar & Alishba Tariq.",
  openGraph: {
    title: "Ahmad × Alishba",
    description: "13–15 November 2026 · Wedding Invitation",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
