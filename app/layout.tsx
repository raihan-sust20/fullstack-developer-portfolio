import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Raihan Ahmed | Backend-Focused Full-Stack Developer',
  description: 'Portfolio of Raihan Ahmed, showcasing expertise in building reliable, secure, and scalable backend systems with modern web technologies.',
  // openGraph: {
  //   title: 'Raihan Ahmed | Backend-Focused Full-Stack Developer',
  //   description: 'Portfolio demonstrating expertise in reliable and secure backend systems, APIs, and infrastructure engineering.',
  //   url: 'https://your-portfolio-domain.com',
  //   siteName: 'Raihan Ahmed Portfolio',
  //   images: [
  //     {
  //       url: 'https://your-portfolio-domain.com/og-image.png',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Raihan Ahmed Portfolio',
  //     },
  //   ],
  //   type: 'website',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Raihan Ahmed | Backend-Focused Full-Stack Developer',
  //   description: 'Portfolio showcasing expertise in building secure, scalable backend systems and APIs.',
  //   site: '@your_twitter_handle',
  //   creator: '@your_twitter_handle',
  //   images: ['https://your-portfolio-domain.com/og-image.png'],
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
