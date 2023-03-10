import { OrgaProvider } from '@orgajs/react'
import Image from 'next/image'
import Link from 'next/link'
import type { AppProps } from 'next/app'

import '../styles/globals.scss'

const components = {
  a: Link,
  img: Image
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OrgaProvider components={components}>
      <Component {...pageProps}/>
    </OrgaProvider>
  )
}