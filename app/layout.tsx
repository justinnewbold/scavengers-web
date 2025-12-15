import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scavengers - AI-Powered Scavenger Hunts',
  description: 'Create amazing scavenger hunts in seconds with AI. Free, offline-capable, and fun for everyone.',
  keywords: ['scavenger hunt', 'ai', 'mobile app', 'games', 'team building'],
  authors: [{ name: 'Scavengers Team' }],
  openGraph: {
    title: 'Scavengers - AI-Powered Scavenger Hunts',
    description: 'Create amazing scavenger hunts in seconds with AI.',
    type: 'website',
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
