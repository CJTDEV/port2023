import './styles/globals.css'
import { Roboto } from 'next/font/google'


//fonts
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' })


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
