import Image from 'next/image'
import Link from 'next/link'
import {formatearFecha} from '../utils/helpers'
import styles from '../styles/blog.module.css'

function Post({post}) {
    const {contenido,imagen, titulo,url,publishedAt}=post
    console.log(post)
  return (
    <article>
        <Image src={imagen.data[0].attributes.formats.medium.url} alt={`Imagen blog ${titulo}`} width={600} height={400}/>
        <div className={styles.contenido}>
            <h3>{titulo}</h3>
            <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
            <p className={styles.resumen}>{contenido}</p>
            <Link className={styles.enlace} href={`/blog/${url}`}>Leer Post</Link>
        </div>
    </article>
  )
}

export default Post