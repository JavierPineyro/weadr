import React, { useState } from 'react'
import { FORECAST_MOCK } from '@/mocks/data'

function Home() {
  const [forecast, setForecast] = useState(FORECAST_MOCK)

  const formatDate = (t) => {
    const rawDate = new Date(t * 1000) // con el epoc time transformo a date
    const options = { dateStyle: 'full' } // opciones para mostrar la fecha
    return new Intl.DateTimeFormat('es-AR', options).format(rawDate) // creo la fecha
  }

  return (
    <main>
      <h1>{forecast.location.name}</h1>
      <h3>{forecast.location.country}</h3>
      <h4>{formatDate(forecast.location.localtime_epoch)}</h4>
      <br />
      <ul>
        <li>{forecast.current.temp_c}°C</li>
        <li>{forecast.current.condition.text}</li>
        <li>{forecast.current.feelslike_c}°C sensasion termica</li>
        <li>{forecast.current.humidity}% humedad</li>
        <li>Viento {forecast.current.wind_kph}km/h</li>
      </ul>
      {/* ACA VIENE LA BOX CON LA HORA,TEMPERATURA Y CONDICION CHIQUITO */}
      {/* aca viene la box con la puesta del sol y salida del sol etiqueta time */}
      {/* aca se podria agregar lo mismo pero para los dos días siguientes resumidos
        en condicion, fecha, temperatura max y min

      */}
    </main>
  )
}

export default Home
