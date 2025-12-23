import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://scavengers.app'

export const metadata: Metadata = {
  title: 'Scavengers - AI-Powered Scavenger Hunts',
  description: 'Create amazing scavenger hunts in seconds with AI. Free, offline-capable, and fun for everyone.',
  keywords: ['scavenger hunt', 'ai', 'mobile app', 'games', 'team building', 'party games', 'outdoor activities'],
  authors: [{ name: 'Scavengers Team' }],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Scavengers - AI-Powered Scavenger Hunts',
    description: 'Create amazing scavenger hunts in seconds with AI. Free for up to 15 players!',
    type: 'website',
    url: siteUrl,
    siteName: 'Scavengers',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scavengers - AI-Powered Scavenger Hunts',
    description: 'Create amazing scavenger hunts in seconds with AI. Free for up to 15 players!',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
