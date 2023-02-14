import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Nosotros = () => {
  return (
    <div>
      <Layout pagina='nosotros'>
        <main className='contenedor'>
          <h2 className='text-6xl text-center font-bold text-orange-500 my-20 mx-0'>
            Nosotros
          </h2>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-16 items-center'>
            <div>
              <Image
                src='/img/nosotros.jpg'
                width={600}
                height={450}
                layout='responsive'
                alt='imagen sobre nosotros'
              />
            </div>
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export default Nosotros
