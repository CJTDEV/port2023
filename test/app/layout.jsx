import './styles/globals.css'
import { Ubuntu } from '@next/font/google'

//fonts
const ubuntu = Ubuntu({ weight: '400', })


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ubuntu.className}>
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
