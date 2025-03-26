import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ApeChain | Web3 Development Platform',
  description: 'ApeChain - The premier Web3 development platform for building and deploying decentralized applications. Secure, scalable, and developer-friendly.',
  manifest: '/manifest.json',
  themeColor: '#000000',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ApeChain',
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
    title: 'ApeChain | Web3 Development Platform',
    description: 'ApeChain - The premier Web3 development platform for building and deploying decentralized applications. Secure, scalable, and developer-friendly.',
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
    title: 'ApeChain | Web3 Development Platform',
    description: 'ApeChain - The premier Web3 development platform for building and deploying decentralized applications. Secure, scalable, and developer-friendly.',
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
