import '../styles/globals.css'
import '../styles/tabBarStyle.css'
import '../styles/swiperStyle.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
