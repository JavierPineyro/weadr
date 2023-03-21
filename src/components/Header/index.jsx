import { useState, lazy, Suspense } from 'react'
import { SearchIcon } from '@/components/Icons'
import ThemeButton from '@/components/ThemeButton'
import { useDarkStore } from '../../../theme'
import styles from './header.module.css'
const LazySearchPopUp = lazy(() => import('../PopUp/index'))

function Header({ viewNavigate }) {
  const [isOpen, setIsOpen] = useState(false)

  const darkMode = useDarkStore((state) => state.darkMode)
  const toggleColorMode = useDarkStore((state) => state.toggleColorMode)

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
          <ThemeButton toggleColorMode={toggleColorMode} darkMode={darkMode} />
        </div>
      </header>
      <Suspense fallback={null}>
        <LazySearchPopUp viewNavigate={viewNavigate} isOpen={isOpen} onOpen={setIsOpen} />
      </Suspense>
    </>
  )
}

export default Header
