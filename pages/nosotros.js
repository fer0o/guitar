import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import React from 'react'

const Nosotros = () => {
  return (
    <div>
      <Layout pagina='nosotros'>
        <h1>Nosotros</h1>
        <Link href='/'>Inicio</Link>
      </Layout>
    </div>
  )
}

export default Nosotros
