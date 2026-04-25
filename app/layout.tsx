import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/theme-context'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'FraudShield',
  description: 'Ad fraud detection and identity verification platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Header />
          <main suppressHydrationWarning>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
