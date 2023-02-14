import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Layout from '@/components/layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <div>
      <Layout pagina='Inicio'>
        <h1>Inicio</h1>
        <Link href='/nosotros' className='underline text-blue-500 m-40'>
          Nosotros
        </Link>
      </Layout>
    </div>
  )
}
