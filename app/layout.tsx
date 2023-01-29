import { Oxygen } from '@next/font/google'
import Header from 'components/Header/header'
import './globals.css'

const oxygen = Oxygen({ weight: ['400', '700'], subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={oxygen.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
