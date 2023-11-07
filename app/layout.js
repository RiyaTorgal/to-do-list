import { Krona_One } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar/NavBar'

const krona = Krona_One({ subsets: ['latin'],weight: "400" })

export const metadata = {
  title: 'Daily Task Manager',
  description: 'Helps you to stay organized',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={krona.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
