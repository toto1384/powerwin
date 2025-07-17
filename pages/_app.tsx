import "@/styles/globals.css";
import type { AppProps } from "next/app";

import localFont from 'next/font/local'

const gilroy = localFont({
  src: [
    {
      path: '../public/fonts/Gilroy-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-Heavy.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
  display: 'swap',
})


export default function App({ Component, pageProps }: AppProps) {
  return <main className={gilroy.className}><Component {...pageProps} /></main>
}
