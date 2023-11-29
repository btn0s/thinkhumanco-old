import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'thinkhuman.co',
  description: 'We help mission-driven startups bootstrap and scale.',
  openGraph: {
    type: 'website',
    url: 'https://thinkhuman.co',

    title: 'We help mission-driven startups bootstrap and scale.',
    description: `We're a group of product design and technology specialists working with mission-focused startups to solve problems that make an impact.`,
    images: [
      {
        url: 'https://thinkhuman.co/images/og-share.png',
        width: 1200,
        height: 630,
        alt: 'thinkhuman.co',
      },
    ],
    siteName: 'thinkhuman.co',
  },
  twitter: {
    site: 'thinkhuman.co',
    card: 'summary_large_image',
  },
  themeColor: '#D1F0D5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} flex min-h-full bg-white antialiased`}
      >
        <main className="w-full flex-auto">{children}</main>
      </body>
    </html>
  )
}
