import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals/tailwind.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sahan Siriwardhana - Portfolio',
  description: 'Full Stack Developer & IT Undergraduate passionate about Full Stack Development, Business Analysis, Networking, and Project Management.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Angular', 'Node.js', 'Portfolio'],
  authors: [{ name: 'Sahan Siriwardhana' }],
  openGraph: {
    title: 'Sahan Siriwardhana - Portfolio',
    description: 'Full Stack Developer & IT Undergraduate',
    url: 'https://your-domain.com',
    siteName: 'Sahan Siriwardhana Portfolio',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
      </head>
      <body className={`${inter.className} text-white min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
