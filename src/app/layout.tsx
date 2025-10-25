import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Toda Cor - Transformando a Educação nas Prefeituras do Ceará',
  description: 'Fornecemos materiais educacionais de qualidade e bibliotecas completas para fortalecer a educação pública municipal. Soluções especializadas para o desenvolvimento educacional do seu município.',
  keywords: [
    'educação',
    'prefeituras',
    'bibliotecas',
    'tecnologia educacional',
    'robótica',
    'materiais didáticos',
    'Ceará',
    'municipal'
  ],
  authors: [{ name: 'Toda Cor' }],
  creator: 'Toda Cor',
  publisher: 'Toda Cor',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Toda Cor - Transformando a Educação nas Prefeituras do Ceará',
    description: 'Fornecemos materiais educacionais de qualidade e bibliotecas completas para fortalecer a educação pública municipal.',
    url: '/',
    siteName: 'Toda Cor',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Toda Cor - Educação Municipal',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toda Cor - Transformando a Educação nas Prefeituras do Ceará',
    description: 'Fornecemos materiais educacionais de qualidade e bibliotecas completas para fortalecer a educação pública municipal.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <meta name="theme-color" content="#2563EB" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
