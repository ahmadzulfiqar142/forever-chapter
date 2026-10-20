import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://forever-chapter.vercel.app"),
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>❤️</text></svg>",
  },
  title: "Tariq Mehmood — Wedding Invitation",
  description:
    "Tariq Mehmood invites you to his daughter's wedding. 13–14 November 2026 · Jahanian, Pakistan.",
  openGraph: {
    title: "Tariq Mehmood — Wedding Invitation",
    description:
      "Tariq Mehmood invites you to his daughter's wedding. 13–14 November 2026 · Jahanian, Pakistan.",
    images: [
      {
        url: "/wedding-invitation-og.png",
        width: 1200,
        height: 630,
        alt: "Wedding invitation — 13–14 November 2026 in Jahanian, Pakistan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/wedding-invitation-og.png"],
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
