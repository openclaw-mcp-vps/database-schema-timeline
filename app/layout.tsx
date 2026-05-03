import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Database Schema Timeline — Visualize Schema Evolution',
  description: 'Interactive timeline showing how your database schemas changed over time with impact analysis. Built for backend developers and DBAs.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="853425dd-07df-4555-acd0-4df22e2b8957"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
