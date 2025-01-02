import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team Shuffler',
  description: 'Team organization tool',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#1a1b1e] text-[#c1c2c5]">{children}</body>
    </html>
  )
}
