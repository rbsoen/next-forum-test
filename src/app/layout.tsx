import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forum',
  description: 'Test forums',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="main">{children}</body>
    </html>
  )
}
