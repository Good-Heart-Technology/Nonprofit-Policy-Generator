import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nonprofit Policy Generator',
  description: 'Generate professional policies for your nonprofit organization',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 