import { FC } from 'react'
import Head from 'next/head'

const Layout: FC<{ children: string, title: string }> = ({ children, title }) => {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto'}}>
      <Head>
        <title>{ title } | tianheg</title>
        <link rel="icon" href="favicon.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="favicon-dark.png" media="(prefers-color-scheme: dark)" />
      </Head>
      <h1>{ title }</h1>
      <hr />
      { children }
    </div>
  )
}

export default Layout