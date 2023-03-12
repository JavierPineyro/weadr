import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  console.log('404 se veee')
  return (
    <>
      <h1>404</h1>
      <Link to='/'>Volver al Inicio</Link>
    </>
  )
}

export default NotFound
