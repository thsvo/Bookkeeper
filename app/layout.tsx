import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: "Reliable QuickBooks Bookkeeping & Cleanup Support | Bookkeepers Touch",
  description: "Stop drowning in messy books and backlogs. Bookkeepers Touch provides crystal-clear, tax-ready financial statements and white-label back-office support for US CPA Firms, Tax Firms, Fractional CFOs, and Small Businesses.",
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
