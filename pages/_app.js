import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${roboto.variable} font-sans`}>
      <ThemeProvider attribute='class'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </main>
  )
}
