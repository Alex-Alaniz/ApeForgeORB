import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ApeForge| OnRamp & Bridge',
  description: 'OnRamp and Bridging Forged',
  manifest: '/manifest.json',
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ApeForge OnRamp & Bridge',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      { url: '/images/apechain-icon-white.svg', type: 'image/svg+xml' },
      { url: '/images/apechain-icon-outlined-white.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/apechain-icon-outlined-white.png', sizes: '192x192', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'ApeForge OnRamp & Bridge',
    description: 'OnRamp and Bridging Forged.',
    images: [
      {
        url: '/images/apechain-logo.png',
        width: 800,
        height: 600,
        alt: 'ApeChain Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApeForge OnRamp & Bridge',
    description: 'OnRamp and Bridging Forged.',
    images: ['/images/apechain-logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-US">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ApeForgeORB" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
