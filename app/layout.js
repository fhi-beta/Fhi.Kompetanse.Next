import './globals.css'
import "@folkehelseinstituttet/style/import/_all.scss"

import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App  2' ,
  description: 'Generated 2 by create next app',
}

export default function RootLayout({ children }) {
   
   return (
    <html lang="en">
      <body>
      <h1>
           <Link href="/">Next Kompetanse</Link>
      </h1>


      
      
       {children}
        </body>
    </html>
  )
}
