import './globals.css'
import { Inter } from 'next/font/google'

import { Header, Footer } from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CodeIgnite',
  description: 'Transforma tu web con CodeIgnite',
  keywords: "Informatica, Codigo, CodeIgnite, Web, Desarrollo, Diseño, Programacion, Programador, Programadora, Programadores, Programadoras, Programacion, Programa",
  robots: "index, follow",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"></script>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
