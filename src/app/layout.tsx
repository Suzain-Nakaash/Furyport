import type { Metadata } from 'next'
import ClientLayout from '../components/ClientLayout'
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
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}

