import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import Skeleton from '@/components/Skeleton'
import { useDarkStore } from '../theme'

const LazyHomePage = lazy(() => import('./pages/Home/index'))
const Lazy404 = lazy(() => import('./pages/404/index'))

function App() {
  const location = useLocation()
  const darkMode = useDarkStore((state) => state.darkMode)

  useEffect(() => {
    if (!darkMode) {
      window.document.documentElement.style.setProperty('--bg_main', '#fff')
      window.document.documentElement.style.setProperty('--font_color', '#16161d')
      window.document.documentElement.style.setProperty('--button_hover', 'rgb(198, 200, 202)')
      window.document.documentElement.style.setProperty('--gray_soft', '#222')
      window.document.documentElement.style.setProperty('--gray_softer', '#16161d')
      window.document.documentElement.style.setProperty('--dots', '#212112c1')
    } else {
      window.document.documentElement.style.setProperty('--bg_main', '#16161d')
      window.document.documentElement.style.setProperty('--font_color', '#f0e2e2')
      window.document.documentElement.style.setProperty('--button_hover', 'rgb(44, 46, 48)')
      window.document.documentElement.style.setProperty('--gray_soft', '#a7a7a7')
      window.document.documentElement.style.setProperty('--gray_softer', '#a7a7a77d')
      window.document.documentElement.style.setProperty('--dots', '#a7a7a76d')
    }
  }, [darkMode])

  // INSTALAR SWR
  return (
    <>
      <Header />
      <Suspense fallback={<Skeleton />}>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<LazyHomePage />} />
          <Route path='/search/:city' element={<h3>Aboot</h3>} />
          <Route path='*' element={<Lazy404 />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
