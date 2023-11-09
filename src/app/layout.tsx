import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TRACTIAN | Monitoramento Online de Ativos e Gestão de Manutenção assistida por IA',
  description:
    'O sistema preditivo mais completo do mercado para fornecer aos técnicos de manutenção e tomadores de decisão industriais uma supervisão abrangente de suas operações. Monitore seus ativos de forma eficiente com nosso sensor de vibração, temperatura e energia industrial, aliado ao melhor software de gestão de manutenção.',
}

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  return (
    <html lang={params.lang}>
      <head>
        <link rel="icon" href="../../public/tractian-favicon-ia.png" />
      </head>
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}
