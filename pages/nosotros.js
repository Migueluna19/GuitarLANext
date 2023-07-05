import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

function Nosotros() {
  return (
   <>
   <Layout
   title={'Nosotros'}
   description={'Sobre Nosotros, GuitarLA, tienda de música'}
   >
    <main className='contenedor'>
      <h2 className='heading'>Nosotros</h2>

      <div className={styles.contenido}>
      <Image src="/img/nosotros.jpg" width={1000} height={800} alt='Imagen Sobre Nosotros'/>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci augue, egestas vitae pharetra nec, bibendum id sapien. Nam feugiat turpis quam, eget blandit est pharetra eget. Aenean eu justo in tortor blandit faucibus. Fusce turpis dolor, interdum sed libero quis, consequat commodo augue. Sed neque nisl, faucibus in porta a, ultrices vel tortor. Nullam ac fringilla mi. Morbi semper lectus diam, vitae pharetra diam tincidunt sit amet. Ut id eros nibh. Donec aliquet vestibulum venenatis.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci augue, egestas vitae pharetra nec, bibendum id sapien. Nam feugiat turpis quam, eget blandit est pharetra eget. Aenean eu justo in tortor blandit faucibus. Fusce turpis dolor, interdum sed libero quis, consequat commodo augue. Sed neque nisl, faucibus in porta a, ultrices vel tortor. Nullam ac fringilla mi. Morbi semper lectus diam, vitae pharetra diam tincidunt sit amet. Ut id eros nibh. Donec aliquet vestibulum venenatis.
        </p>
      </div>
      </div>
    </main>
   </Layout>
   </>
  )
}

export default Nosotros