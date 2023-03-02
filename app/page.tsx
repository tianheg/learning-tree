'use client'
import { createContext } from 'react'

const Context = createContext()

import { Inter } from 'next/font/google'
import { OrgaProvider } from '@orgajs/react'
import { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'

import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

const components = {
  a: Link,
  img: Image
}

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <OrgaProvider components={components}>
      <Component {...pageProps}/>
    </OrgaProvider>
  )
}
