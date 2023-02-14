import React from 'react'
import Head from 'next/head'
import Header from '../header/Header'

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>GuitarLa - {pagina}</title>
        <meta
          name='description'
          content='Website clone dedicated to sell guitars'
        />
        {/* <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' /> */}
      </Head>
      <Header />
      {children}
    </div>
  )
}

export default Layout
