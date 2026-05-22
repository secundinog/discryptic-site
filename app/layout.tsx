import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '@fontsource/42dot-sans/400.css'
import '@fontsource/42dot-sans/500.css'
import '@fontsource/42dot-sans/600.css'
import '@fontsource/42dot-sans/700.css'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-logo',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://discryptic.com'),
  title: 'Discryptic — Digital Venture Studio',
  description:
    'Building and scaling digital brands across AI, finance, compliance and emerging digital markets.',
  keywords: [
    'venture studio',
    'digital brands',
    'online business',
    'AI',
    'fintech',
    'compliance',
    'SEO',
  ],
  icons: {
    icon: '/assets/favicon.svg',
  },
  alternates: {
    canonical: 'https://discryptic.com',
  },
  openGraph: {
    title: 'Discryptic — Digital Venture Studio',
    description:
      'Building and scaling digital brands across AI, finance, compliance and emerging digital markets.',
    url: 'https://discryptic.com',
    siteName: 'Discryptic',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discryptic — Digital Venture Studio',
    description:
      'Building and scaling digital brands across AI, finance, compliance and emerging digital markets.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
