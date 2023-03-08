import Home from '@pages/Home'
import Page404 from '@/pages/404'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  // INSTALAR SWR
  return (
    <>
      {/* //HEADER */}
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/search:city' element={<h3>Aboot</h3>} />
        <Route path='*' element={<Page404 />} />
      </Routes>
      {/* //FOOTER */}
    </>
  )
}

export default App
