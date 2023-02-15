import React from 'react'
import Head from 'next/head'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const Layout = ({ children, pagina }) => {
  return (
    <div>
      <Head>
        <title>GuitarLa-{pagina}</title>
        <meta
          name='description'
          content='Website clone dedicated to sell guitars'
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
