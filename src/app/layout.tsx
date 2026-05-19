import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
  variable: '--font-sans',
})

const interDisplay = Inter({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: 'FURYXZIA — Visual Narratives & Art',
  description: 'Cinematic Video Editing & Digital Art Portfolio // 2026',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${interDisplay.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
