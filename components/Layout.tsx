import Head from 'next/head'
import Link from 'next/link'
import { parse } from 'romast'

import EditLink from './EditLink'
import { LayoutProps } from '@/interfaces'

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div id="main" style={{ maxWidth: 700, margin: '0 auto' }}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <Link href={'/'}>
        <h1>{title}</h1>
      </Link>
      <hr />
      <EditLink />
      {children}
    </div>
  )
}

export default Layout
