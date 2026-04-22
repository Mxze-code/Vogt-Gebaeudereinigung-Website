import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

// Use distinct CSS variable names so they don't clash with @theme definitions
const inter = Inter({ subsets: ['latin'], variable: '--font-inter-var' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat-var' })

export const metadata = {
  title: 'VOGT Gebäudereinigung – Professionelle Reinigung in Bretten, Pforzheim, Karlsruhe',
  description: 'Zuverlässige Gebäudereinigung für Gewerbe und Privathaushalt. Büroreinigung, Firmenreinigung, Privathaushalte. Einsatzgebiet: Bretten, Pforzheim, Karlsruhe, Enzkreis.',
  keywords: 'Gebäudereinigung Bretten, Büroreinigung Pforzheim, Firmenreinigung Karlsruhe, Enzkreis',
  openGraph: {
    title: 'VOGT Gebäudereinigung',
    description: 'Professionelle Gebäudereinigung in der Region Bretten',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={`${inter.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
