import { FC } from 'react'
import Head from 'next/head'

const Layout: FC<{ children: string, title: string }> = ({ children, title }) => {
  return (
    <div style={{ maxWidth: 700, margin: '0 auto'}}>
      <Head>
        <title>{ title }</title>
      </Head>
      <h1>{ title }</h1>
      <hr />
      { children }
    </div>
  )
}

export default Layout