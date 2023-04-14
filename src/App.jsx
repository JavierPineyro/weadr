import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useDarkStore } from '../theme'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Skeleton from '@/components/Skeleton'

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
    function changeTheme({ darkMode }) {
      const THEME = darkMode ? 'dark' : 'light'

      const MODE = {
        light: {
          '--bg_main': '#e4e4e4',
          '--font_color': '#16161d',
          '--button_hover': 'rgb(198, 200, 202)',
          '--gray_soft': '#222',
          '--gray_softer': '#16161d',
          '--dots': '#7c7c69c1'
          // '--dots': '#212112c1'
        },
        dark: {
          '--bg_main': '#16161d',
          '--font_color': '#f0e2e2',
          '--button_hover': 'rgb(44, 46, 48)',
          '--gray_soft': '#a7a7a7',
          '--gray_softer': '#a7a7a77d',
          '--dots': '#a7a7a76d'
        }
      }

      const themeMode = MODE[THEME]

      Object.entries(themeMode).forEach(([key, value]) => {
        window.document.documentElement.style.setProperty(key, value)
      })
    }

    changeTheme({ darkMode })
  }, [darkMode])

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
