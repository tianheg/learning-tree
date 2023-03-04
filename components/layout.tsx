import { FC } from 'react'
import Head from 'next/head'
import EditLink from './EditLink';

const Layout: FC<{ children: string; title: string }> = ({
  children,
  title,
}) => {
  return (
    <div id="main" style={{ maxWidth: 700, margin: '0 auto' }}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </Head>
      <h1>{title}</h1>
      <hr />
      <EditLink />
      {children}
    </div>
  )
}

export default Layout
