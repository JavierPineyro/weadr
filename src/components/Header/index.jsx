import { useState, lazy, Suspense } from 'react'
import { SearchIcon, SunIcon } from '../Icons'
import styles from './header.module.css'
const LazySearchPopUp = lazy(() => import('../PopUp/index'))

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(true)
  // UN INPUT Y QUE DESPUES DE 3 LETRAS HAGA UNA BUSQUEDA DE OPCIONES
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>Weadr.</div>
        <div className={styles.containerButton}>
          <button className={styles.button} onClick={handleClick}>
            <SearchIcon /> Search
          </button>
          <button className={styles.button}><SunIcon /></button>
        </div>
      </header>
      <Suspense fallback={null}>
        <LazySearchPopUp isOpen={isOpen} onOpen={setIsOpen} />
      </Suspense>
    </>
  )
}

export default Header
