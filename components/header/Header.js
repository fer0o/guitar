import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='contenedor'>
        <div className='flex flex-col lg:flex-row lg:justify-between items-center'>
          <Link href='/'>
            <Image
              src='/img/logo.svg'
              width={400}
              height={100}
              alt='imagen logo'
            />
          </Link>
          <nav className='mt-20 lg:mt-0 flex  gap-8 uppercase text-white lg:text-3xl text-2xl font-bold'>
            <Link
              href='/'
              className='hover:bg-orange-500 transition duration-300 p-2'
            >
              Inicio
            </Link>
            <Link
              href='/nosotros'
              className='hover:bg-orange-500 transition duration-300 p-2'
            >
              Nosotros
            </Link>
            <Link
              href='/blog'
              className='hover:bg-orange-500 transition duration-300 p-2'
            >
              Blog
            </Link>
            <Link
              href='/tienda'
              className='hover:bg-orange-500 transition duration-300 p-2'
            >
              Tienda
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
