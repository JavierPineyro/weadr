import { lazy, Suspense } from 'react'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'

const LazyHomePage = lazy(() => import('./pages/Home/index'))
const Lazy404 = lazy(() => import('./pages/404/index'))

function App() {
  const location = useLocation()
  // INSTALAR SWR
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<LazyHomePage />} />
          <Route path='/search/:city' element={<h3>Aboot</h3>} />
          <Route path='*' element={<Lazy404 />} />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </>
  )
}

export default App
