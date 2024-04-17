import { Suspense } from 'react'
import './styles/globals.css'
import { Roboto } from 'next/font/google'
import { GlobalProvider } from "./GlobalContext"





//fonts
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '700'], display: 'swap' })



export default function RootLayout({ children }) {

  return (
    <html lang="en" className={roboto.className}>
      <head />
      <GlobalProvider>
        <body>
          {children}
        </body>
      </GlobalProvider>
    </html>
  )
}
