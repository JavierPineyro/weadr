import { Link } from 'react-router-dom'
import styles from './notfound.module.css'
function NotFound() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.paragraph}>Algo salió mal D:</p>
      <Link className={styles.link} to='/'>← ir al Inicio</Link>
    </main>
  )
}

export default NotFound
