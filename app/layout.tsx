import Head from 'next/head'

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>tianheg</title>
        <link rel="icon" href="favicon.png" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="favicon-dark.png" media="(prefers-color-scheme: dark)" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
