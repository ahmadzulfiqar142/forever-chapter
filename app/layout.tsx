import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ahmad & Alishba | Wedding Invitation',
  description: 'Join Ahmad Zulfiqar and Alishba Tariq as they celebrate their wedding, 13 — 15 November 2026.',
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, viewportFit: 'cover', themeColor: '#f4f7f4' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html> }
