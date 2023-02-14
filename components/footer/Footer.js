import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='bg-black px-0 mt-20'>
      <div className='flex lg:flex-row flex-col items-center justify-between p-20'>
        <nav className=' lg:mt-0 flex lg:flex-row flex-col gap-8 uppercase text-white lg:text-3xl text-2xl font-bold'>
          <Link href='/' className='hover:text-orange-500'>
            Inicio
          </Link>
          <Link href='/nosotros' className='hover:text-orange-500'>
            Nosotros
          </Link>
          <Link href='/blog' className='hover:text-orange-500'>
            Blog
          </Link>
          <Link href='/tienda' className='hover:text-orange-500'>
            Tienda
          </Link>
        </nav>
        <p className='text-white text-center font-bold text-4xl py-10'>
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
