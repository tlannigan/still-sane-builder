import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Providers from '@/components/logic/providers/Providers'
import './globals.css'

// FontAwesome configuration to prevent icon size flicker
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const fontin = localFont({
  src: [
    { path: './fonts/Fontin-Bold.ttf', weight: '700', style: 'normal' },
    { path: './fonts/Fontin-Italic.ttf', weight: '400', style: 'italic' },
    { path: './fonts/Fontin-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/Fontin-SmallCaps.ttf', weight: '100', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-fontin',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Still Sane, Builder?',
    default: 'Still Sane, Builder?',
  },
  description: 'Share your Path of Exile 2 builds with others.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontin.variable} antialiased bg-black text-white overflow-hidden`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
