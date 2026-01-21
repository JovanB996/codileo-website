import React from "react"
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ subsets: ["latin"] });
const _spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'CODILEO | Where Code Meets Instinct',
  description: 'CODILEO is a premium IT agency specializing in websites, e-commerce, landing pages, and outsourcing. We blend technical expertise with creative instinct to deliver exceptional digital solutions.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/codileo_logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/codileo_logo.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/images/codileo_logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
