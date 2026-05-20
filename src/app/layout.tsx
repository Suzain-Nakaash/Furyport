import type { Metadata } from 'next'
import './globals.css'

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
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
