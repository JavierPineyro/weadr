import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import Skeleton from '@/components/Skeleton'
import { useDarkStore } from '../theme'

const LazyHomePage = lazy(() => import('./pages/Home/index'))
const Lazy404 = lazy(() => import('./pages/404/index'))
const LazySearchPage = lazy(() => import('./pages/Search/index'))

function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const darkMode = useDarkStore((state) => state.darkMode)

  const viewNavigate = (newUrl) => {
    if (!document.startViewTransition) {
      return navigate(newUrl)
    }

    return document.startViewTransition(() => {
      navigate(newUrl)
    })
  }

  useEffect(() => {
    function changeThemeToLightMode() {
      window.document.documentElement.style.setProperty('--bg_main', '#e4e4e4')
      window.document.documentElement.style.setProperty('--font_color', '#16161d')
      window.document.documentElement.style.setProperty('--button_hover', 'rgb(198, 200, 202)')
      window.document.documentElement.style.setProperty('--gray_soft', '#222')
      window.document.documentElement.style.setProperty('--gray_softer', '#16161d')
      window.document.documentElement.style.setProperty('--dots', '#212112c1')
    }
    function changeThemeToDarkMode() {
      window.document.documentElement.style.setProperty('--bg_main', '#16161d')
      window.document.documentElement.style.setProperty('--font_color', '#f0e2e2')
      window.document.documentElement.style.setProperty('--button_hover', 'rgb(44, 46, 48)')
      window.document.documentElement.style.setProperty('--gray_soft', '#a7a7a7')
      window.document.documentElement.style.setProperty('--gray_softer', '#a7a7a77d')
      window.document.documentElement.style.setProperty('--dots', '#a7a7a76d')
    }

    if (!darkMode) {
      changeThemeToLightMode()
    } else {
      changeThemeToDarkMode()
    }
  }, [darkMode])

  // INSTALAR SWR
  return (
    <>
      <Header viewNavigate={viewNavigate} />
      <Suspense fallback={<Skeleton />}>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<LazyHomePage />} />
          <Route path='/search/:city' element={<LazySearchPage />} />
          <Route path='*' element={<Lazy404 />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
