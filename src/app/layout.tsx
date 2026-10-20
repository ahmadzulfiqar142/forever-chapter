import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tariq Mehmood — Wedding Invitation",
  description:
    "Tariq Mehmood invites you to his daughter's wedding. 13–14 November 2026 · Jahanian, Pakistan.",
  openGraph: {
    title: "Tariq Mehmood — Wedding Invitation",
    description:
      "Tariq Mehmood invites you to his daughter's wedding. 13–14 November 2026 · Jahanian, Pakistan.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
